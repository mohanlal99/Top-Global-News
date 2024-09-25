import type { NextRequest } from "next/server";

import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const user: any = true; // This should be set according to your authentication logic
  const userAdmin = true; // This should also be set according to your admin check

  // Check if the user is not logged in and is trying to access an admin page
  if (!user && request.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // If the user is logged in and not an admin, redirect to some other page or return a 403
  if (user && !userAdmin) {
    return NextResponse.redirect(new URL("/not-found", request.url));
  }

  // If the user is an admin, allow access to the admin page
  return NextResponse.next();
}

export const config = {
  matcher: "/admin/:path*",
};
