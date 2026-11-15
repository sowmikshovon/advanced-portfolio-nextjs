import { NextRequest, NextResponse } from "next/server";
import { cvConfig, resolveDirectCvUrl } from "../../../lib/cv-data";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const configuredUrl =
    process.env.NEXT_PUBLIC_CV_URL ?? cvConfig.externalUrl;
  const resolved = resolveDirectCvUrl(configuredUrl);
  const redirectTarget = resolved.startsWith("/")
    ? new URL(resolved, request.url)
    : resolved;

  const response = NextResponse.redirect(redirectTarget, { status: 307 });
  response.headers.set("Cache-Control", "no-store, max-age=0");
  return response;
}
