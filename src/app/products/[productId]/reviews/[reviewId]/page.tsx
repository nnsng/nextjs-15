export default async function ProductReview({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;
  return (
    <div>
      Review {reviewId} for product {productId}
    </div>
  );
}
