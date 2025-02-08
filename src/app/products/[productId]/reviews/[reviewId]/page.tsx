import { notFound } from 'next/navigation';

const getRandomInt = (max: number) => Math.floor(Math.random() * max);

export default async function ProductReview({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error('Error in ProductReview');
  }

  const { productId, reviewId } = await params;
  if (parseInt(reviewId) > 1000) {
    notFound();
  }

  return (
    <div>
      Review {reviewId} for product {productId}
    </div>
  );
}
