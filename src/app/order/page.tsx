'use client';

import { useRouter } from 'next/navigation';

export default function Order() {
  const router = useRouter();

  const handleClick = () => {
    console.log('Order placed');
    router.push('/');
  };

  return (
    <div>
      <h1>Order</h1>
      <button onClick={handleClick}>Place order</button>
    </div>
  );
}
