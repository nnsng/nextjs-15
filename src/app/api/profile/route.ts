import { headers } from 'next/headers';
import type { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  console.log(requestHeaders.get('Authorization'));

  const headerList = await headers();
  console.log(headerList.get('Authorization'));

  return new Response('<h1>GET /api/profile</h1>', {
    headers: {
      'Content-Type': 'text/html',
    },
  });
}
