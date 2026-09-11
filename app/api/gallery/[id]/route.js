import { NextResponse } from "next/server";
import { isAuthorized } from "@/lib/adminAuth";
import { removeGalleryPhoto } from "@/lib/gallery";

export async function DELETE(request, { params }) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Not authorized." }, { status: 401 });
  }

  const removed = await removeGalleryPhoto(params.id);
  if (!removed) {
    return NextResponse.json({ error: "Photo not found." }, { status: 404 });
  }
  return NextResponse.json({ ok: true });
}
