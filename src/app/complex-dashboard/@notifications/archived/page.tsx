import { Card } from '@/components/card';
import Link from 'next/link';

export default function ArchivedNotifications() {
  return (
    <Card>
      <p>Archived Notifications</p>
      <Link href="/complex-dashboard">Default</Link>
    </Card>
  );
}
