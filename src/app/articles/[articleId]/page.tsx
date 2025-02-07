'use client';

import Link from 'next/link';
import { use } from 'react';

export default function Article({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: string }>;
}) {
  const { articleId } = use(params);
  const { lang } = use(searchParams);

  return (
    <div>
      <h1>Article</h1>
      <p>Article content in {lang}</p>
      <div className="flex gap-4">
        <Link href={`/articles/${articleId}?lang=en`}>English</Link>
        <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
        <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
      </div>
    </div>
  );
}
