import { getProducts } from '@/prisma-db';

type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

export default async function ProductsDbPage() {
  const products: Product[] = await getProducts();

  return (
    <div>
      <h1 className="text-2xl font-bold">Products</h1>
      <div className="space-y-4">
        {products.map((product) => (
          <div key={product.id} className="rounded-md border border-gray-300 bg-white px-4 py-2">
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-gray-500">Price: ${product.price}</p>
            {product.description && <p className="text-gray-500">{product.description}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
