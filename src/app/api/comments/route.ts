import type { NextRequest } from 'next/server';
import { comments } from './data';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('query');
  if (!query) return Response.json(comments);
  const filteredComments = comments.filter((comment) => comment.text.includes(query));
  return Response.json(filteredComments);
}

export async function POST(request: Request) {
  const comment = await request.json();
  const newComment = {
    id: comments.length + 1,
    text: comment.text,
  };
  comments.push(newComment);
  return new Response(JSON.stringify(newComment), {
    status: 201,
  });
}
