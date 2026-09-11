import { NextResponse } from "next/server";
import { isAuthorized } from "@/lib/adminAuth";
import { removeBlogPost } from "@/lib/blogPosts";

export async function DELETE(request, { params }) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Not authorized." }, { status: 401 });
  }

  const ok = await removeBlogPost(params.id);
  if (!ok) {
    return NextResponse.json({ error: "Post not found." }, { status: 404 });
  }
  return NextResponse.json({ success: true });
}
