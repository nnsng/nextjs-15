import { Suspense } from 'react';
import Author from './author';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default async function PostsSequential() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: Post[] = await response.json();

  const filteredPosts = posts.filter((post) => post.id % 10 === 1);

  return (
    <div>
      <h1 className="text-2xl font-bold">Posts</h1>
      <div className="grid grid-cols-2 gap-4">
        {filteredPosts.map((post) => (
          <div key={post.id} className="rounded-md border border-gray-300 bg-white px-4 py-2">
            <h2 className="text-lg font-semibold">{post.title}</h2>
            <p className="text-gray-500">{post.body}</p>
            <Suspense fallback={<p>Loading author...</p>}>
              <Author userId={post.userId} />
            </Suspense>
          </div>
        ))}
      </div>
    </div>
  );
}
