import { setTimeout } from 'timers/promises';

export default async function Product() {
  await setTimeout(2000);
  return <p>Product Component</p>;
}
