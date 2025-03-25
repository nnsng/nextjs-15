import { setTimeout } from 'timers/promises';

export default async function Review() {
  await setTimeout(4000);
  return <p>Review Component</p>;
}
