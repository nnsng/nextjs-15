import { NextResponse, type NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const theme = request.cookies.get('theme');
  if (!theme) {
    response.cookies.set('theme', 'dark');
  }

  response.headers.set('custom-header', 'custom-value');

  return response;
}

// export function middleware(request: NextRequest) {
//   if (request.nextUrl.pathname === '/profile') {
//     return NextResponse.rewrite(new URL('/about', request.nextUrl));
//   }
// }

// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL('/', request.url));
// }

// export const config = {
//   matcher: '/profile',
// };
