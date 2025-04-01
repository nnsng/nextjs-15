'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function CreateProduct() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('/react-form/api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, price, description }),
      });
      if (response.ok) {
        router.push('/products-db');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-96 space-y-4 p-4">
      <label className="block">
        Title
        <input
          type="text"
          className="block w-full rounded border p-2 text-black"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label className="block">
        Price
        <input
          type="number"
          className="block w-full rounded border p-2 text-black"
          name="price"
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>
      <label className="block">
        Description
        <textarea
          className="block w-full rounded border p-2 text-black"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <button
        type="submit"
        className="block w-full rounded border-none bg-blue-500 p-2 text-white disabled:bg-gray-500"
        disabled={loading}
      >
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}
