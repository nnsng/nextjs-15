import type { Metadata } from 'next';
import { setTimeout } from 'timers/promises';

export const metadata: Metadata = {
  title: {
    absolute: 'Blog',
  },
};

export default async function Blog() {
  await setTimeout(2000);
  return <div>Blog</div>;
}
