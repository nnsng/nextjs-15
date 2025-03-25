import fs from 'fs';

export default function ServerComponentTwo() {
  fs.readFileSync('src/components/server-component-two.tsx', 'utf8');
  return <p>Server Component Two</p>;
}
