import type { Metadata } from 'next';

type Props = {
  params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { productId } = await params;
  return {
    title: `Product ${productId}`,
  };
};

export default async function ProductDetail({ params }: Props) {
  const { productId } = await params;
  return <div>Product Detail {productId}</div>;
}
