import { getProducts } from '@/prisma-db';
import Link from 'next/link';

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

export default async function ProductsDbPage() {
  const products: Product[] = await getProducts();

  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-bold">Products</h1>
      <div className="space-y-4">
        {products.map((product) => (
          <div key={product.id} className="rounded-md border border-gray-300 bg-white px-4 py-2">
            <h2 className="text-lg font-semibold">
              <Link href={`/products-db/${product.id}`}>{product.title}</Link>
            </h2>
            <p className="text-gray-500">Price: ${product.price}</p>
            {product.description && <p className="text-gray-500">{product.description}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
