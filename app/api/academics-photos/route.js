import { NextResponse } from "next/server";
import { isAuthorized } from "@/lib/adminAuth";
import { getAcademicsPhotos, addAcademicsPhoto } from "@/lib/academics";

export async function GET() {
  const photos = await getAcademicsPhotos();
  return NextResponse.json({ photos });
}

export async function POST(request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Not authorized." }, { status: 401 });
  }

  const form = await request.formData();
  const file = form.get("file");
  const caption = form.get("caption") || "";

  try {
    const entry = await addAcademicsPhoto(file, caption);
    return NextResponse.json({ photo: entry }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: err.message || "Upload failed." }, { status: 400 });
  }
}
