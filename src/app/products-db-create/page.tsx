import { Submit } from '@/components/submit';
import { addProduct } from '@/prisma-db';
import { redirect } from 'next/navigation';

export default function CreateProductPage() {
  const createProduct = async (formData: FormData) => {
    'use server';

    const title = formData.get('title') as string;
    const price = formData.get('price') as string;
    const description = formData.get('description') as string;
    await addProduct(title, parseInt(price), description);
    redirect('/products-db');
  };

  return (
    <form action={createProduct} className="max-w-96 space-y-4 p-4">
      <label className="block">
        Title
        <input type="text" className="block w-full rounded border p-2 text-black" name="title" />
      </label>
      <label className="block">
        Price
        <input type="number" className="block w-full rounded border p-2 text-black" name="price" />
      </label>
      <label className="block">
        Description
        <textarea className="block w-full rounded border p-2 text-black" name="description" />
      </label>
      <Submit />
    </form>
  );
}
