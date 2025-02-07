import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <div className="flex flex-col">
        <Link href="/blog">Blog</Link>
        <Link href="/products">Products</Link>
        <Link href="/articles/breaking-news-123?lang=en">Read Article</Link>
      </div>
    </div>
  );
}
