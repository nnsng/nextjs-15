'use client';

import { serverSideFunc } from '@/utils/server-utils';

export default function ClientRoute() {
  const result = serverSideFunc();
  return <h1>Client route {result}</h1>;
}
