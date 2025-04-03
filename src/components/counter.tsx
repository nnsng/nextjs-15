'use client';

import { useAuth, useUser } from '@clerk/nextjs';
import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  // const {isLoaded, isSignedIn, userId} = useAuth();
  const { isLoaded, isSignedIn, user } = useUser();

  if (isLoaded && !isSignedIn) return null;

  return (
    <div className="text-center">
      <p className="text-lg">Count: {count}</p>
      <button
        className="rounded bg-[var(--foreground)] px-2 py-1 text-[var(--background)]"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
}
