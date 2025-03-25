import Product from '@/components/product';
import Review from '@/components/review';
import { Suspense } from 'react';

export default function ProductReviews() {
  return (
    <div>
      <h1>Product Reviews</h1>
      <Suspense fallback={<p>Loading Product...</p>}>
        <Product />
      </Suspense>
      <Suspense fallback={<p>Loading Review...</p>}>
        <Review />
      </Suspense>
    </div>
  );
}
