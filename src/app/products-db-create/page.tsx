'use client';

// import { Submit } from '@/components/submit';
import { addProduct } from '@/prisma-db';
import { redirect } from 'next/navigation';
import { useActionState } from 'react';

type Errors = {
  title?: string;
  price?: string;
  description?: string;
};

type FormState = {
  errors: Errors;
};

export default function CreateProductPage() {
  const initialState: FormState = {
    errors: {},
  };

  const [state, formAction, isPending] = useActionState(createProduct, initialState);

  const createProduct = async (formData: FormData) => {
    'use server';

    const title = formData.get('title') as string;
    const price = formData.get('price') as string;
    const description = formData.get('description') as string;

    const errors: Errors = {};
    if (!title) errors.title = 'Title is required';
    if (!price) errors.price = 'Price is required';
    if (!description) errors.description = 'Description is required';

    if (Object.keys(errors).length > 0) {
      return { errors };
    }

    await addProduct(title, parseInt(price), description);
    redirect('/products-db');
  };

  return (
    <form action={formAction} className="max-w-96 space-y-4 p-4">
      <div>
        <label className="block">
          Title
          <input type="text" className="block w-full rounded border p-2 text-black" name="title" />
        </label>
        {state.errors.title && <p className="text-red-500">{state.errors.title}</p>}
      </div>

      <div>
        <label className="block">
          Price
          <input
            type="number"
            className="block w-full rounded border p-2 text-black"
            name="price"
          />
        </label>
        {state.errors.price && <p className="text-red-500">{state.errors.price}</p>}
      </div>

      <div>
        <label className="block">
          Description
          <textarea className="block w-full rounded border p-2 text-black" name="description" />
        </label>
        {state.errors.description && <p className="text-red-500">{state.errors.description}</p>}
      </div>

      {/* <Submit /> */}
      <button
        type="submit"
        className="block w-full rounded border-none bg-blue-500 p-2 text-white disabled:bg-gray-500"
        disabled={isPending}
      >
        Submit
      </button>
    </form>
  );
}
