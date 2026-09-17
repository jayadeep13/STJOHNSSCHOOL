export const GEO_BYPASS_COOKIE = "sjs_geo_bypass";

// Vercel's edge network sets this header based on the visitor's real IP and
// strips any value a client tries to send itself, so it can't be spoofed by
// a visitor — no IP database or third-party lookup needed.
export function isIndiaRequest(headersList) {
  return headersList.get("x-vercel-ip-country") === "IN";
}
