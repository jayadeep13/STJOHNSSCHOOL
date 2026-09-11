"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { LogOut, ExternalLink } from "lucide-react";
import PhotoManager from "@/components/admin/PhotoManager";
import BlogPostManager from "@/components/admin/BlogPostManager";
import { GALLERY_CATEGORY_SUGGESTIONS } from "@/lib/galleryCategories";

export default function AdminDashboard({ initialGalleryPhotos, initialAcademicsPhotos, initialBlogPosts }) {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.refresh();
  }

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
        <div>
          <h1 className="font-display text-2xl font-semibold text-indigo sm:text-3xl">Admin panel</h1>
          <p className="mt-1 text-sm text-ink/60">Upload photos for the public site below.</p>
        </div>
        <button
          onClick={handleLogout}
          className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 px-4 py-2 text-sm font-medium text-ink/70 transition-colors hover:bg-ink/5"
        >
          <LogOut className="h-4 w-4" /> Sign out
        </button>
      </div>

      <div className="space-y-14">
        <section>
          <p className="mb-4 text-sm text-ink/60">
            Photos uploaded here appear on the{" "}
            <Link href="/gallery" target="_blank" className="text-brick underline underline-offset-2">
              public gallery page <ExternalLink className="inline h-3 w-3" />
            </Link>
            .
          </p>
          <PhotoManager
            title="Gallery photos"
            apiBase="/api/gallery"
            captionPlaceholder="e.g. Annual Sports Day, 2025"
            initialPhotos={initialGalleryPhotos}
            categoryOptions={GALLERY_CATEGORY_SUGGESTIONS}
          />
        </section>

        <section className="border-t border-ink/10 pt-14">
          <p className="mb-4 text-sm text-ink/60">
            Photos uploaded here appear on the{" "}
            <Link href="/academics" target="_blank" className="text-brick underline underline-offset-2">
              Academics page <ExternalLink className="inline h-3 w-3" />
            </Link>
            {" "}— use this for result posters, notices, or exhibition photos.
          </p>
          <PhotoManager
            title="Academics photos"
            apiBase="/api/academics-photos"
            captionPlaceholder="e.g. 2024–25 Result Poster"
            initialPhotos={initialAcademicsPhotos}
          />
        </section>

        <section className="border-t border-ink/10 pt-14">
          <p className="mb-4 text-sm text-ink/60">
            Posts published here appear on the{" "}
            <Link href="/blog" target="_blank" className="text-brick underline underline-offset-2">
              public Blog page <ExternalLink className="inline h-3 w-3" />
            </Link>
            {" "}alongside the school&rsquo;s existing updates, newest first.
          </p>
          <BlogPostManager initialPosts={initialBlogPosts} />
        </section>
      </div>
    </div>
  );
}
