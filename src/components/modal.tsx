'use client';

import { useRouter } from 'next/navigation';
import { MouseEventHandler, useEffect, useRef } from 'react';

export default function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const overlay = useRef(null);
  const wrapper = useRef(null);

  const onDismiss = () => router.back();

  const onClick: MouseEventHandler = (e) => {
    if (e.target === overlay.current || e.target === wrapper.current) {
      if (onDismiss) onDismiss();
    }
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onDismiss();
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <div
      ref={overlay}
      className="fixed top-0 right-0 bottom-0 left-0 z-10 mx-auto bg-black/60 p-10"
      onClick={onClick}
    >
      <div
        ref={wrapper}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 sm:w-10/12 md:w-8/12 lg:w-2/5"
      >
        {children}
      </div>
    </div>
  );
}
