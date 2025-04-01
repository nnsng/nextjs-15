'use client';

import { useEffect } from 'react';

export default function ErrorComponent({ error }: { error: Error }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return <div>Something went wrong</div>;
}
