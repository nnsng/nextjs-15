import { Card } from '@/components/card';
import { setTimeout } from 'timers/promises';

export default async function Revenue() {
  await setTimeout(5000);
  return <Card>Revenue</Card>;
}
