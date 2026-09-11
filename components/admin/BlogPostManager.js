"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Upload, Trash2, Newspaper } from "lucide-react";

const TODAY = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

export default function BlogPostManager({ initialPosts }) {
  const formRef = useRef(null);
  const fileInputRef = useRef(null);
  const [posts, setPosts] = useState(initialPosts);
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [body, setBody] = useState("");
  const [previews, setPreviews] = useState([]);
  const [publishing, setPublishing] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const [error, setError] = useState("");

  function handleFilesChange(e) {
    const files = Array.from(e.target.files || []);
    setPreviews(files.map((f) => URL.createObjectURL(f)));
  }

  async function handlePublish(e) {
    e.preventDefault();
    if (!title.trim() || !body.trim()) {
      setError("Title and article text are required.");
      return;
    }

    setError("");
    setPublishing(true);
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("tag", tag);
      formData.append("author", author);
      formData.append("date", date);
      formData.append("body", body);
      for (const file of fileInputRef.current?.files || []) {
        formData.append("images", file);
      }

      const res = await fetch("/api/blog-posts", { method: "POST", body: formData });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Failed to publish post.");

      setPosts((prev) => [data.post, ...prev]);
      setTitle("");
      setTag("");
      setAuthor("");
      setDate("");
      setBody("");
      setPreviews([]);
      formRef.current?.reset();
    } catch (err) {
      setError(err.message);
    } finally {
      setPublishing(false);
    }
  }

  async function handleDelete(id) {
    setDeletingId(id);
    setError("");
    try {
      const res = await fetch(`/api/blog-posts/${id}`, { method: "DELETE" });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Delete failed.");
      }
      setPosts((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      setError(err.message);
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <div>
      <div className="mb-6">
        <h2 className="font-display text-xl font-semibold text-indigo sm:text-2xl">Blog posts</h2>
        <p className="mt-1 text-sm text-ink/60">Write an update below — it appears on the public Blog page immediately.</p>
      </div>

      <form ref={formRef} onSubmit={handlePublish} className="mb-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-ink/10">
        <label className="block text-xs font-semibold uppercase tracking-wide text-ink/50">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g. Our New Computer Lab is Open"
          className="mt-1.5 w-full rounded-lg border border-ink/15 px-3 py-2 text-sm outline-none focus:border-brick focus:ring-1 focus:ring-brick"
        />

        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wide text-ink/50">Category</label>
            <input
              type="text"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              placeholder="e.g. School Update"
              className="mt-1.5 w-full rounded-lg border border-ink/15 px-3 py-2 text-sm outline-none focus:border-brick focus:ring-1 focus:ring-brick"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wide text-ink/50">Author (optional)</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="e.g. Sandhya"
              className="mt-1.5 w-full rounded-lg border border-ink/15 px-3 py-2 text-sm outline-none focus:border-brick focus:ring-1 focus:ring-brick"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wide text-ink/50">Date</label>
            <input
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              placeholder={TODAY}
              className="mt-1.5 w-full rounded-lg border border-ink/15 px-3 py-2 text-sm outline-none focus:border-brick focus:ring-1 focus:ring-brick"
            />
          </div>
        </div>

        <label className="mt-4 block text-xs font-semibold uppercase tracking-wide text-ink/50">Article text</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows={7}
          placeholder="Write the article here. Leave a blank line between paragraphs."
          className="mt-1.5 w-full rounded-lg border border-ink/15 px-3 py-2 text-sm outline-none focus:border-brick focus:ring-1 focus:ring-brick"
        />

        <label className="mt-4 block text-xs font-semibold uppercase tracking-wide text-ink/50">Images (optional, up to 12)</label>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/jpeg,image/png,image/webp,image/gif"
          onChange={handleFilesChange}
          className="mt-1.5 block w-full text-sm text-ink/70 file:mr-3 file:rounded-full file:border-0 file:bg-brick/10 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-brick hover:file:bg-brick/20"
        />
        {previews.length > 0 && (
          <div className="mt-3 grid grid-cols-4 gap-2 sm:grid-cols-6">
            {previews.map((src, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-lg bg-ink/5 ring-1 ring-ink/10">
                <Image src={src} alt="Preview" width={100} height={100} className="h-full w-full object-cover" unoptimized />
              </div>
            ))}
          </div>
        )}

        {error && <p className="mt-3 text-sm text-brick">{error}</p>}

        <button
          type="submit"
          disabled={publishing}
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-brick px-5 py-2.5 text-sm font-semibold text-paper shadow-sm transition-colors hover:bg-brick-dark disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Upload className="h-4 w-4" />
          {publishing ? "Publishing…" : "Publish post"}
        </button>
      </form>

      <h3 className="mb-5 font-display text-base font-semibold text-indigo">
        {posts.length} post{posts.length === 1 ? "" : "s"}
      </h3>

      {posts.length === 0 ? (
        <p className="rounded-2xl bg-white p-8 text-center text-sm text-ink/60 ring-1 ring-ink/10">
          No posts published yet — write the first one above.
        </p>
      ) : (
        <div className="space-y-3">
          {posts.map((p) => (
            <div key={p.id} className="flex items-start gap-4 rounded-xl bg-white p-4 ring-1 ring-ink/10">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-ink/5">
                {p.images?.[0] ? (
                  <Image src={p.images[0]} alt={p.title} width={48} height={48} className="h-full w-full rounded-lg object-cover" />
                ) : (
                  <Newspaper className="h-5 w-5 text-ink/30" />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate font-display text-sm font-semibold text-indigo">{p.title}</p>
                <p className="mt-0.5 text-xs text-ink/50">
                  {p.date} {p.images?.length ? `· ${p.images.length} photo${p.images.length === 1 ? "" : "s"}` : ""}
                </p>
              </div>
              <button
                onClick={() => handleDelete(p.id)}
                disabled={deletingId === p.id}
                aria-label="Delete post"
                className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-ink/40 transition-colors hover:bg-brick/10 hover:text-brick disabled:opacity-50"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
