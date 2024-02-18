import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /_static (inside /public)
     * 4. all root files inside /public (e.g. /favicon.ico)
     */
    "/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)",
  ],
};
export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const session = await getToken({ req })
  const url = req.nextUrl;
  const searchParams = req.nextUrl.searchParams.toString();
  const path = `${url.pathname}${searchParams.length > 0 ? `?${searchParams}` : ""}`;
  console.log(path)
  if (session) {
    console.log(session.user)
    if (path === '/') {
      return NextResponse.redirect(new URL("/app", req.url));
    }
  }
  if (!session && path === '/app') {
    return NextResponse.redirect(new URL("/", req.url));
  }
  
  return res
}