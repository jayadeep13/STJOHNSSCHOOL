import { NextResponse } from "next/server";
import { isAuthorized } from "@/lib/adminAuth";
import { getGalleryPhotos, addGalleryPhoto } from "@/lib/gallery";

export async function GET() {
  const photos = await getGalleryPhotos();
  return NextResponse.json({ photos });
}

export async function POST(request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Not authorized." }, { status: 401 });
  }

  const form = await request.formData();
  const file = form.get("file");
  const caption = form.get("caption") || "";
  const category = form.get("category") || "";

  try {
    const entry = await addGalleryPhoto(file, caption, category);
    return NextResponse.json({ photo: entry }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: err.message || "Upload failed." }, { status: 400 });
  }
}
