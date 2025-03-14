import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  (req) => {
    if (!req.nextauth?.token) {
      return NextResponse.redirect(new URL("/auth", req.url));
    }
    return NextResponse.next();
  },
  {
    pages: {
      signIn: "/auth", 
    },
  }
);

export const config = {
  matcher: ["/v1/resume/:path*","/account/:path*"],
};
