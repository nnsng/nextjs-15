import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Link href="/about">About</Link>
      <Link href="/dashboard">Dashboard</Link>
    </div>
  );
}
