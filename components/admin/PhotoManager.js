"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Upload, Trash2, ImageOff } from "lucide-react";

export default function PhotoManager({ title, description, apiBase, captionPlaceholder, initialPhotos, categoryOptions }) {
  const fileInputRef = useRef(null);
  const [photos, setPhotos] = useState(initialPhotos);
  const [caption, setCaption] = useState("");
  const [category, setCategory] = useState("");
  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const [error, setError] = useState("");
  const showCategory = Array.isArray(categoryOptions);
  const knownCategories = showCategory
    ? Array.from(new Set([...categoryOptions, ...photos.map((p) => p.category).filter(Boolean)]))
    : [];

  function handleFileChange(e) {
    const file = e.target.files?.[0];
    setPreview(file ? URL.createObjectURL(file) : null);
  }

  async function handleUpload(e) {
    e.preventDefault();
    const file = fileInputRef.current?.files?.[0];
    if (!file) return;

    setError("");
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("caption", caption);
      if (showCategory) formData.append("category", category);

      const res = await fetch(apiBase, { method: "POST", body: formData });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Upload failed.");

      setPhotos((prev) => [data.photo, ...prev]);
      setCaption("");
      setCategory("");
      setPreview(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (err) {
      setError(err.message);
    } finally {
      setUploading(false);
    }
  }

  async function handleDelete(id) {
    setDeletingId(id);
    setError("");
    try {
      const res = await fetch(`${apiBase}/${id}`, { method: "DELETE" });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Delete failed.");
      }
      setPhotos((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      setError(err.message);
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <div>
      <div className="mb-6">
        <h2 className="font-display text-xl font-semibold text-indigo sm:text-2xl">{title}</h2>
        {description && <p className="mt-1 text-sm text-ink/60">{description}</p>}
      </div>

      <form
        onSubmit={handleUpload}
        className="mb-8 grid gap-5 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-ink/10 sm:grid-cols-[160px_1fr] sm:items-start"
      >
        <div className="aspect-square overflow-hidden rounded-xl bg-ink/5 ring-1 ring-ink/10">
          {preview ? (
            <Image src={preview} alt="Preview" width={160} height={160} className="h-full w-full object-cover" unoptimized />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-ink/30">
              <ImageOff className="h-6 w-6" />
            </div>
          )}
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wide text-ink/50">Photo</label>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp,image/gif"
            onChange={handleFileChange}
            className="mt-1.5 block w-full text-sm text-ink/70 file:mr-3 file:rounded-full file:border-0 file:bg-brick/10 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-brick hover:file:bg-brick/20"
          />

          <label className="mt-4 block text-xs font-semibold uppercase tracking-wide text-ink/50">
            Caption (optional)
          </label>
          <input
            type="text"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            placeholder={captionPlaceholder}
            className="mt-1.5 w-full rounded-lg border border-ink/15 px-3 py-2 text-sm outline-none focus:border-brick focus:ring-1 focus:ring-brick"
          />

          {showCategory && (
            <>
              <label className="mt-4 block text-xs font-semibold uppercase tracking-wide text-ink/50">
                Category
              </label>
              <input
                type="text"
                list="photo-category-suggestions"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="e.g. Events, Festivals, Sports Day…"
                className="mt-1.5 w-full rounded-lg border border-ink/15 px-3 py-2 text-sm outline-none focus:border-brick focus:ring-1 focus:ring-brick"
              />
              <datalist id="photo-category-suggestions">
                {knownCategories.map((c) => (
                  <option key={c} value={c} />
                ))}
              </datalist>
              <p className="mt-1.5 text-xs text-ink/45">
                Shows as a filter tab on the public gallery. Leave blank for &ldquo;General&rdquo;.
              </p>
            </>
          )}

          {error && <p className="mt-3 text-sm text-brick">{error}</p>}

          <button
            type="submit"
            disabled={uploading}
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-brick px-5 py-2.5 text-sm font-semibold text-paper shadow-sm transition-colors hover:bg-brick-dark disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Upload className="h-4 w-4" />
            {uploading ? "Uploading…" : "Upload photo"}
          </button>
        </div>
      </form>

      <h3 className="mb-5 font-display text-base font-semibold text-indigo">
        {photos.length} photo{photos.length === 1 ? "" : "s"}
      </h3>

      {photos.length === 0 ? (
        <p className="rounded-2xl bg-white p-8 text-center text-sm text-ink/60 ring-1 ring-ink/10">
          No photos yet — upload the first one above.
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {photos.map((p) => (
            <div key={p.id} className="group relative overflow-hidden rounded-xl ring-1 ring-ink/10">
              <div className="aspect-square">
                <Image
                  src={p.src}
                  alt={p.caption || "Photo"}
                  width={320}
                  height={320}
                  className="h-full w-full object-cover"
                />
              </div>
              <button
                onClick={() => handleDelete(p.id)}
                disabled={deletingId === p.id}
                aria-label="Delete photo"
                className="absolute right-2 top-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white opacity-0 transition-opacity hover:bg-brick group-hover:opacity-100 disabled:opacity-100"
              >
                <Trash2 className="h-4 w-4" />
              </button>
              {showCategory && p.category && (
                <span className="absolute left-2 top-2 rounded-full bg-indigo/90 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-paper">
                  {p.category}
                </span>
              )}
              {p.caption && (
                <p className="truncate bg-white px-2 py-1.5 text-xs text-ink/70">{p.caption}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
