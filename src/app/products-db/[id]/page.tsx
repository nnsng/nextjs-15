import type { Product } from '@/app/products-db/page';
import { getProduct } from '@/prisma-db';
import { notFound } from 'next/navigation';
import { EditProductForm } from './edit-product-form';

export default async function EditProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product: Product | null = await getProduct(parseInt(id));

  if (!product) {
    notFound();
  }

  return <EditProductForm product={product} />;
}
