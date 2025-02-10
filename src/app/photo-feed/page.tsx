import Image from 'next/image';
import Link from 'next/link';
import wonders from './wonders';

export default function PhotoFeed() {
  return (
    <div className="container mx-auto">
      <h1 className="my-4 text-center text-3xl font-bold">New Wonders of the World</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        {wonders.map(({ id, src, name }) => (
          <Link key={id} href={`/photo-feed/${id}`}>
            <Image alt={name} src={src} className="aspect-square h-[unset] w-full object-cover" />
          </Link>
        ))}
      </div>
    </div>
  );
}
