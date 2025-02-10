import Link from 'next/link';

export default function InnerF2() {
  return (
    <div>
      <h1>InnerF2 page</h1>
      <Link href="/f5">F5</Link>
      <Link href="/f3/inner-f3">Inner F3</Link>
    </div>
  );
}
