import crypto from "crypto";
import cloudinary from "@/lib/cloudinary";

const LIST_PUBLIC_ID = "site-data/blog-posts";
const IMAGE_FOLDER = "blog-posts";
const ALLOWED_TYPES = new Set(["image/jpeg", "image/png", "image/webp", "image/gif"]);
const MAX_BYTES = 8 * 1024 * 1024; // 8MB per image
const MAX_IMAGES = 12;

function listUrl() {
  const cloudName = cloudinary.config().cloud_name;
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

export async function getBlogPosts() {
  const list = await readList();
  return [...list].sort((a, b) => (b.publishedAt || 0) - (a.publishedAt || 0));
}

export async function addBlogPost({ title, tag, author, date, body, files }) {
  const cleanTitle = String(title || "").trim().slice(0, 200);
  const cleanBody = String(body || "").trim().slice(0, 20000);
  if (!cleanTitle) throw new Error("A title is required.");
  if (!cleanBody) throw new Error("Article text is required.");

  const imageFiles = (files || []).filter((f) => f && typeof f.arrayBuffer === "function" && f.size > 0);
  if (imageFiles.length > MAX_IMAGES) {
    throw new Error(`Please upload at most ${MAX_IMAGES} images per post.`);
  }

  const images = [];
  const imagePublicIds = [];
  for (const file of imageFiles) {
    if (!ALLOWED_TYPES.has(file.type)) {
      throw new Error("Unsupported image type. Please upload JPEG, PNG, WEBP or GIF images.");
    }
    if (file.size > MAX_BYTES) {
      throw new Error("One of the images is too large. Max size is 8MB each.");
    }

    const id = crypto.randomBytes(8).toString("hex");
    const publicId = `${IMAGE_FOLDER}/${Date.now()}-${id}`;
    const buffer = Buffer.from(await file.arrayBuffer());

    const uploaded = await cloudinary.uploader.upload(`data:${file.type};base64,${buffer.toString("base64")}`, {
      public_id: publicId,
      resource_type: "image",
    });

    images.push(cloudinary.url(uploaded.public_id, { secure: true, fetch_format: "auto", quality: "auto" }));
    imagePublicIds.push(uploaded.public_id);
  }

  const now = Date.now();
  const entry = {
    id: crypto.randomBytes(8).toString("hex"),
    title: cleanTitle,
    tag: String(tag || "").trim().slice(0, 60) || "Update",
    author: String(author || "").trim().slice(0, 80),
    date: String(date || "").trim().slice(0, 60) || new Date(now).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
    body: cleanBody,
    images,
    imagePublicIds,
    publishedAt: now,
  };

  const list = await readList();
  list.push(entry);
  await writeList(list);

  return entry;
}

export async function removeBlogPost(id) {
  const list = await readList();
  const entry = list.find((p) => p.id === id);
  if (!entry) return false;

  const next = list.filter((p) => p.id !== id);
  await writeList(next);

  for (const publicId of entry.imagePublicIds || []) {
    await cloudinary.uploader.destroy(publicId, { resource_type: "image" }).catch(() => {});
  }

  return true;
}
