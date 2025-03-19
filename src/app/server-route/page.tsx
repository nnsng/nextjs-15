import { serverSideFunc } from '@/utils/server-utils';

export default function ServerRoute() {
  const result = serverSideFunc();
  return <h1>Server route {result}</h1>;
}
