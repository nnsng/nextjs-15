'use client';

import { createProduct, type FormState } from '@/actions/products';
import { useActionState } from 'react';

export default function CreateProductPage() {
  const initialState: FormState = {
    errors: {},
  };

  const [state, formAction, isPending] = useActionState(createProduct, initialState);

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
