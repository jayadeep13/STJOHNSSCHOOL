import { cookies } from "next/headers";
import { verifySessionToken, SESSION_COOKIE } from "@/lib/adminAuth";
import { getGalleryPhotos } from "@/lib/gallery";
import { getAcademicsPhotos } from "@/lib/academics";
import { getBlogPosts } from "@/lib/blogPosts";
import AdminLogin from "@/components/admin/AdminLogin";
import AdminDashboard from "@/components/admin/AdminDashboard";

export const metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};
export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const token = cookies().get(SESSION_COOKIE)?.value;
  const authed = verifySessionToken(token);

  if (!authed) {
    return (
      <section className="flex min-h-[70vh] items-center justify-center bg-paper px-4 py-16">
        <AdminLogin />
      </section>
    );
  }

  const [galleryPhotos, academicsPhotos, blogPosts] = await Promise.all([
    getGalleryPhotos(),
    getAcademicsPhotos(),
    getBlogPosts(),
  ]);

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <AdminDashboard
        initialGalleryPhotos={galleryPhotos}
        initialAcademicsPhotos={academicsPhotos}
        initialBlogPosts={blogPosts}
      />
    </section>
  );
}
