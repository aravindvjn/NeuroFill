import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET = process.env.JWT_SECRET!

export async function middleware(req: NextRequest) {
    const token = req.cookies.get("token")?.value;

    if (!token) {
        return NextResponse.redirect(new URL("/auth", req.url));
    }

    try {
        await jwtVerify(token, new TextEncoder().encode(JWT_SECRET));
        return NextResponse.next();
    } catch (error) {
        console.error("Invalid token:", error);
        return NextResponse.redirect(new URL("/auth", req.url));
    }
}
