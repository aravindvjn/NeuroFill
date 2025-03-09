import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in environment variables.");
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/v1/resume")) {
    const token = req.cookies.get("token")?.value;
    if (!token) {
      console.warn("No token found, redirecting to /auth");
      return NextResponse.redirect(new URL("/auth", req.url));
    }
  
    try {
      const decoded = await jwtVerify(token, new TextEncoder().encode(JWT_SECRET));
      
      if(!decoded || !decoded.payload?.userId){
        throw new Error()
      }
      
      return NextResponse.next();
    } catch (error) {
      if (process.env.NODE_ENV !== "production") {
        console.error("Invalid token:", error);
      }
      return NextResponse.redirect(new URL("/auth", req.url));
    } 
  }
   return NextResponse.next();
}

export const config = {
  matcher: "/((?!_next|api|public|.*\\..*).*)"
};
