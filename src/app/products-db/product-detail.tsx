'use client';

import { removeProduct } from '@/actions/products';
import Link from 'next/link';
import { useOptimistic } from 'react';
import type { Product } from './page';

export function ProductDetail({ products }: { products: Product[] }) {
  const [optimisticProducts, setOptimisticProducts] = useOptimistic<Product[], number>(
    products,
    (currentProducts, productId) => {
      return currentProducts.filter((product) => product.id !== productId);
    },
  );

  const removeProductById = async (productId: number) => {
    setOptimisticProducts(productId);
    await removeProduct(productId);
  };

  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-bold">Products</h1>
      <div className="space-y-4">
        {optimisticProducts.map((product) => (
          <div key={product.id} className="rounded-md border border-gray-300 bg-white px-4 py-2">
            <h2 className="text-lg font-semibold">
              <Link href={`/products-db/${product.id}`}>{product.title}</Link>
            </h2>
            <p className="text-gray-500">Price: ${product.price}</p>
            {product.description && <p className="text-gray-500">{product.description}</p>}
            <form action={removeProductById.bind(null, product.id)}>
              <button type="submit" className="mt-1 rounded bg-red-500 px-2 py-1 text-white">
                Delete
              </button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}
