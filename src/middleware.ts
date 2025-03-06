import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in environment variables.");
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith("/_next") || 
    pathname.startsWith("/api") || 
    pathname.startsWith("/public") ||
    pathname.endsWith(".js") || 
    pathname.endsWith(".css") || 
    pathname.endsWith(".ico") || 
    pathname.endsWith(".png") ||
    pathname.endsWith(".jpg") || 
    pathname.endsWith(".jpeg")
  ) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/auth")) {
    return NextResponse.next();
  }

  const token = req.cookies.get("token")?.value;
  if (!token) {
    console.warn("No token found, redirecting to /auth");
    return NextResponse.redirect(new URL("/auth", req.url));
  }

  try {
    await jwtVerify(token, new TextEncoder().encode(JWT_SECRET));
    return NextResponse.next();
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error("Invalid token:", error);
    }
    return NextResponse.redirect(new URL("/auth", req.url));
  }
}

export const config = {
  matcher: "/((?!_next|api|public|.*\\..*).*)" 
};
