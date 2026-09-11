import { NextResponse } from "next/server";
import { isAuthorized } from "@/lib/adminAuth";
import { getBlogPosts, addBlogPost } from "@/lib/blogPosts";

export async function GET() {
  const posts = await getBlogPosts();
  return NextResponse.json({ posts });
}

export async function POST(request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Not authorized." }, { status: 401 });
  }

  const form = await request.formData();
  const title = form.get("title") || "";
  const tag = form.get("tag") || "";
  const author = form.get("author") || "";
  const date = form.get("date") || "";
  const body = form.get("body") || "";
  const files = form.getAll("images");

  try {
    const entry = await addBlogPost({ title, tag, author, date, body, files });
    return NextResponse.json({ post: entry }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: err.message || "Failed to publish post." }, { status: 400 });
  }
}
