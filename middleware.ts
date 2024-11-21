import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import { NextRequest, NextResponse } from "next/server";

export default NextAuth(authConfig).auth;

// export function middleware(request: NextRequest) {
//   console.log("hello world");
//   return NextResponse.redirect(new URL("/login", request.url), {
//     status: 303,
//   });
// }
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  // not work when using regex /(....) with NextResponse.redirect
  // matcher: [
  //   /*
  //    * Match all request paths except for the ones starting with:
  //    * - api (API routes)
  //    * - _next/static (static files)
  //    * - _next/image (image optimization files)
  //    * - favicon.ico, sitemap.xml, robots.txt (metadata files)
  //    */
  //   "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  // ],
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
  // matcher: ['/cow'],
  // matcher: ["/book/(.*)"],
};
