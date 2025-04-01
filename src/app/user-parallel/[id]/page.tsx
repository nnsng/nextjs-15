import { setTimeout } from 'timers/promises';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type Album = {
  userId: number;
  id: number;
  title: string;
};

async function getUserPosts(userId: string) {
  await setTimeout(2000);
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  return response.json() as Promise<Post[]>;
}

async function getUserAlbums(userId: string) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
  return response.json() as Promise<Album[]>;
}

export default async function UserProfile({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const postsData = getUserPosts(id);
  const albumsData = getUserAlbums(id);
  const [posts, albums] = await Promise.all([postsData, albumsData]);

  return (
    <div>
      <h1 className="text-2xl font-bold">User {id}</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Posts</h2>
          {posts.map((post) => (
            <div key={post.id} className="rounded-md border border-gray-300 bg-white px-4 py-2">
              <h3 className="text-lg font-semibold">{post.title}</h3>
              <p className="text-gray-500">{post.body}</p>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Albums</h2>
          {albums.map((album) => (
            <div key={album.id} className="rounded-md border border-gray-300 bg-white px-4 py-2">
              <h3 className="text-lg font-semibold">{album.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
