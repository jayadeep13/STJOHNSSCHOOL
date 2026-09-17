import crypto from "crypto";
import cloudinary from "@/lib/cloudinary";

const LIST_PUBLIC_ID = "site-data/gallery";
const IMAGE_FOLDER = "gallery";
const ALLOWED_TYPES = new Set(["image/jpeg", "image/png", "image/webp", "image/gif"]);
const MAX_BYTES = 8 * 1024 * 1024; // 8MB

function listUrl() {
  const cloudName = cloudinary.config().cloud_name;
  // cache-bust so we always see the latest save, not a stale CDN copy
  return `https://res.cloudinary.com/${cloudName}/raw/upload/${LIST_PUBLIC_ID}?t=${Date.now()}`;
}

async function readList() {
  try {
    const res = await fetch(listUrl(), { cache: "no-store" });
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

async function writeList(list) {
  const json = JSON.stringify(list, null, 2);
  await cloudinary.uploader.upload(`data:application/json;base64,${Buffer.from(json).toString("base64")}`, {
    public_id: LIST_PUBLIC_ID,
    resource_type: "raw",
    overwrite: true,
    invalidate: true,
  });
}

export async function getGalleryPhotos() {
  const list = await readList();
  return [...list].sort((a, b) => (b.uploadedAt || 0) - (a.uploadedAt || 0));
}

export async function addGalleryPhoto(file, caption = "", category = "") {
  if (!file || typeof file.arrayBuffer !== "function") {
    throw new Error("No file provided.");
  }
  if (!ALLOWED_TYPES.has(file.type)) {
    throw new Error("Unsupported file type. Please upload a JPEG, PNG, WEBP or GIF image.");
  }
  if (file.size > MAX_BYTES) {
    throw new Error("File is too large. Max size is 8MB.");
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const id = crypto.randomBytes(8).toString("hex");
  const publicId = `${IMAGE_FOLDER}/${Date.now()}-${id}`;

  const uploaded = await cloudinary.uploader.upload(`data:${file.type};base64,${buffer.toString("base64")}`, {
    public_id: publicId,
    resource_type: "image",
  });

  const entry = {
    id,
    publicId: uploaded.public_id,
    src: cloudinary.url(uploaded.public_id, { secure: true, fetch_format: "auto", quality: "auto" }),
    caption: String(caption || "").slice(0, 200),
    category: String(category || "").slice(0, 60),
    uploadedAt: Date.now(),
  };

  const list = await readList();
  list.push(entry);
  await writeList(list);

  return entry;
}

export async function removeGalleryPhoto(id) {
  const list = await readList();
  const entry = list.find((p) => p.id === id);
  if (!entry) return false;

  const next = list.filter((p) => p.id !== id);
  await writeList(next);

  if (entry.publicId) {
    await cloudinary.uploader.destroy(entry.publicId, { resource_type: "image" }).catch(() => {});
  }

  return true;
}
