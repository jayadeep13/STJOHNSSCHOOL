import fs from "fs/promises";
import path from "path";
import crypto from "crypto";

const ALLOWED_TYPES = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
  "image/gif": "gif",
};
const MAX_BYTES = 8 * 1024 * 1024; // 8MB per image
const MAX_IMAGES = 12;

const DATA_FILE = path.join(process.cwd(), "data", "blog-posts.json");
const UPLOAD_DIR = path.join(process.cwd(), "public", "images", "blog-posts");
const PUBLIC_PREFIX = "/images/blog-posts/";

async function ensureStore() {
  await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
  await fs.mkdir(UPLOAD_DIR, { recursive: true });
  try {
    await fs.access(DATA_FILE);
  } catch {
    await fs.writeFile(DATA_FILE, "[]\n", "utf8");
  }
}

async function readList() {
  await ensureStore();
  const raw = await fs.readFile(DATA_FILE, "utf8");
  try {
    const list = JSON.parse(raw);
    return Array.isArray(list) ? list : [];
  } catch {
    return [];
  }
}

async function writeList(list) {
  await fs.writeFile(DATA_FILE, JSON.stringify(list, null, 2) + "\n", "utf8");
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

  await ensureStore();

  const images = [];
  for (const file of imageFiles) {
    const ext = ALLOWED_TYPES[file.type];
    if (!ext) throw new Error("Unsupported image type. Please upload JPEG, PNG, WEBP or GIF images.");
    if (file.size > MAX_BYTES) throw new Error("One of the images is too large. Max size is 8MB each.");

    const id = crypto.randomBytes(8).toString("hex");
    const filename = `${Date.now()}-${id}.${ext}`;
    const buffer = Buffer.from(await file.arrayBuffer());
    await fs.writeFile(path.join(UPLOAD_DIR, filename), buffer);
    images.push(`${PUBLIC_PREFIX}${filename}`);
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

  for (const src of entry.images || []) {
    if (src.startsWith(PUBLIC_PREFIX)) {
      const filePath = path.join(UPLOAD_DIR, src.slice(PUBLIC_PREFIX.length));
      await fs.unlink(filePath).catch(() => {});
    }
  }

  return true;
}
