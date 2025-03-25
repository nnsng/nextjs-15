'use client';

import { useState, type PropsWithChildren } from 'react';

export default function ClientComponentOne({ children }: PropsWithChildren) {
  const [] = useState('');
  return (
    <>
      <p>Client Component One</p>
      {children}
    </>
  );
}
