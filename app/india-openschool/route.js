import { NextResponse } from "next/server";
import { GEO_BYPASS_COOKIE } from "@/lib/geo";

// Visiting this path always works, from any country, no exceptions.
// It sets a long-lived cookie that unlocks the whole site for this browser
// afterward, so it doubles as the way in for admins/staff based in India.
export async function GET(request) {
  const response = NextResponse.redirect(new URL("/", request.url));
  response.cookies.set(GEO_BYPASS_COOKIE, "1", {
    maxAge: 60 * 60 * 24 * 365,
    path: "/",
    httpOnly: true,
    sameSite: "lax",
  });
  return response;
}
