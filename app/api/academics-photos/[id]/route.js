import { NextResponse } from "next/server";
import { isAuthorized } from "@/lib/adminAuth";
import { removeAcademicsPhoto } from "@/lib/academics";

export async function DELETE(request, { params }) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Not authorized." }, { status: 401 });
  }

  const removed = await removeAcademicsPhoto(params.id);
  if (!removed) {
    return NextResponse.json({ error: "Photo not found." }, { status: 404 });
  }
  return NextResponse.json({ ok: true });
}
