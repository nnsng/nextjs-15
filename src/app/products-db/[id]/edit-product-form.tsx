'use client';

import { editProduct, type FormState } from '@/actions/products';
import type { Product } from '@/app/products-db/page';
import { useActionState } from 'react';

export function EditProductForm({ product }: { product: Product }) {
  const initialState: FormState = {
    errors: {},
  };

  const editProductWithId = editProduct.bind(null, product.id);
  const [state, formAction, isPending] = useActionState(editProductWithId, initialState);

  return (
    <form action={formAction} className="max-w-96 space-y-4 p-4">
      <div>
        <label className="block">
          Title
          <input
            type="text"
            className="block w-full rounded border p-2 text-black"
            name="title"
            defaultValue={product.title}
          />
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
            defaultValue={product.price}
          />
        </label>
        {state.errors.price && <p className="text-red-500">{state.errors.price}</p>}
      </div>

      <div>
        <label className="block">
          Description
          <textarea
            className="block w-full rounded border p-2 text-black"
            name="description"
            defaultValue={product.description ?? ''}
          />
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
