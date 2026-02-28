import { NextResponse } from 'next/server';

export function middleware(request) {
  // Add any middleware logic here, such as authentication or logging
  return NextResponse.next();
}

export const config = {
  matcher: ['/evangelist-bot/:path*', '/observatory/outreach/:path*'],
};