import fs from "fs/promises";
import path from "path";
import crypto from "crypto";
import sharp from "sharp";

const ALLOWED_TYPES = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
  "image/gif": "gif",
};
const MAX_BYTES = 8 * 1024 * 1024; // 8MB

function paths(collection) {
  return {
    dataFile: path.join(process.cwd(), "data", `${collection}.json`),
    uploadDir: path.join(process.cwd(), "public", "images", collection),
    publicPrefix: `/images/${collection}/`,
  };
}

async function ensureStore(collection) {
  const { dataFile, uploadDir } = paths(collection);
  await fs.mkdir(path.dirname(dataFile), { recursive: true });
  await fs.mkdir(uploadDir, { recursive: true });
  try {
    await fs.access(dataFile);
  } catch {
    await fs.writeFile(dataFile, "[]\n", "utf8");
  }
}

export async function getPhotos(collection) {
  await ensureStore(collection);
  const { dataFile } = paths(collection);
  const raw = await fs.readFile(dataFile, "utf8");
  let list;
  try {
    list = JSON.parse(raw);
  } catch {
    list = [];
  }
  if (!Array.isArray(list)) return [];
  return [...list].sort((a, b) => (b.uploadedAt || 0) - (a.uploadedAt || 0));
}

async function writeList(collection, list) {
  const { dataFile } = paths(collection);
  await fs.writeFile(dataFile, JSON.stringify(list, null, 2) + "\n", "utf8");
}

export async function addPhoto(collection, file, caption = "", category = "") {
  await ensureStore(collection);
  const { uploadDir, publicPrefix, dataFile } = paths(collection);

  if (!file || typeof file.arrayBuffer !== "function") {
    throw new Error("No file provided.");
  }
  const ext = ALLOWED_TYPES[file.type];
  if (!ext) {
    throw new Error("Unsupported file type. Please upload a JPEG, PNG, WEBP or GIF image.");
  }
  if (file.size > MAX_BYTES) {
    throw new Error("File is too large. Max size is 8MB.");
  }

  const id = crypto.randomBytes(8).toString("hex");
  let buffer = Buffer.from(await file.arrayBuffer());
  let finalExt = ext;

  if (ext === "jpg" || ext === "png") {
    try {
      buffer = await sharp(buffer).webp({ quality: 80 }).toBuffer();
      finalExt = "webp";
    } catch {
      // fall back to the original format if conversion fails
    }
  }

  const filename = `${Date.now()}-${id}.${finalExt}`;
  await fs.writeFile(path.join(uploadDir, filename), buffer);

  const entry = {
    id,
    src: `${publicPrefix}${filename}`,
    caption: String(caption || "").slice(0, 200),
    category: String(category || "").slice(0, 60),
    uploadedAt: Date.now(),
  };

  const raw = await fs.readFile(dataFile, "utf8");
  const list = JSON.parse(raw || "[]");
  list.push(entry);
  await writeList(collection, list);

  return entry;
}

export async function removePhoto(collection, id) {
  await ensureStore(collection);
  const { dataFile, uploadDir, publicPrefix } = paths(collection);
  const raw = await fs.readFile(dataFile, "utf8");
  const list = JSON.parse(raw || "[]");
  const entry = list.find((p) => p.id === id);
  if (!entry) return false;

  const next = list.filter((p) => p.id !== id);
  await writeList(collection, next);

  if (entry.src?.startsWith(publicPrefix)) {
    const filePath = path.join(uploadDir, entry.src.slice(publicPrefix.length));
    await fs.unlink(filePath).catch(() => {});
  }

  return true;
}
