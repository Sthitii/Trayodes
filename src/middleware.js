// middleware.js
import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  function middleware(req) {
    // If path is /admin/login, don't redirect
    if (req.nextUrl.pathname === '/admin/login') {
      return NextResponse.next();
    }

    // For all other /admin routes, check authentication
    if (req.nextUrl.pathname.startsWith('/admin')) {
      if (!req.nextauth.token) {
        return NextResponse.redirect(new URL('/admin/login', req.url));
      }
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: () => true 
    },
    pages: {
      signIn: '/admin/login',
    },
  }
);

export const config = {
  matcher: ['/admin/:path*']
};