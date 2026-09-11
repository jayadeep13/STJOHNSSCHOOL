import GalleryHero from "@/components/GalleryHero";
import GalleryFilterGrid from "@/components/GalleryFilterGrid";
import { getGalleryPhotos } from "@/lib/gallery";

export const metadata = {
  title: "Gallery",
  description:
    "Photos from St. John's School, Dantherapalli — classrooms, celebrations, home visits and everyday life.",
};
export const dynamic = "force-dynamic";

export default async function GalleryPage() {
  const photos = await getGalleryPhotos();

  return (
    <>
      <GalleryHero photos={photos} />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <GalleryFilterGrid photos={photos} />
      </section>
    </>
  );
}
