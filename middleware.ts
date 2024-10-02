import { NextRequest, NextResponse } from "next/server";

import { verifyToken } from "./lib/action/UserAction"; // Assuming this function is implemented to verify the token

const allowedOrigin = "https://topglobalnews.in";

export function middleware(request: NextRequest) {
  // Handle preflight requests for CORS
  if (request.method === "OPTIONS") {
    const response = new NextResponse(null, { status: 204 });

    response.headers.set("Access-Control-Allow-Origin", allowedOrigin);
    response.headers.set(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, DELETE",
    );
    response.headers.set(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization",
    );
    response.headers.set("Access-Control-Allow-Credentials", "true");

    return response;
  }

  // Initialize response for non-OPTIONS requests
  const response = NextResponse.next();

  response.headers.set("Access-Control-Allow-Origin", allowedOrigin);
  response.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, DELETE",
  );
  response.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization",
  );
  response.headers.set("Access-Control-Allow-Credentials", "true");

  // Extract token from cookies or authorization header
  const token =
    request.cookies.get("authToken")?.value ||
    request.headers.get("Authorization");

  // Redirect unauthenticated users trying to access protected pages
  if (
    !token &&
    (request.nextUrl.pathname.startsWith("/admin") ||
      request.nextUrl.pathname.startsWith("/profile"))
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Prevent logged-in users from accessing the sign-in page
  if (token && request.nextUrl.pathname.startsWith("/sign-in")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  try {
    if (token) {
      // Verify the token
      const decodedToken = verifyToken(token);

      // Check if the user is trying to access an admin page and is not an admin
      if (
        !decodedToken?.isAdmin &&
        request.nextUrl.pathname.startsWith("/admin")
      ) {
        return NextResponse.redirect(new URL("/not-found", request.url));
      }
    }
  } catch {
    // Handle invalid or expired tokens by redirecting users to sign-in
    if (
      request.nextUrl.pathname.startsWith("/admin") ||
      request.nextUrl.pathname.startsWith("/profile")
    ) {
      return NextResponse.redirect(new URL("/sign-in", request.url));
    }

    return NextResponse.redirect(new URL("/", request.url));
  }

  // Proceed with the request if everything checks out
  return response;
}

export const config = {
  matcher: ["/admin/:path*", "/profile", "/api/:path*", "/sign-in"],
};
