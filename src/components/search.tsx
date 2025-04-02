import Form from 'next/form';

export function Search() {
  return (
    <Form action="/products-db" className="flex gap-4">
      <input
        type="text"
        name="query"
        placeholder="Search products..."
        className="rounded border border-gray-300 px-4 py-2"
      />
      <button type="submit" className="ml-2 rounded bg-blue-500 px-4 py-2 text-white">
        Search
      </button>
    </Form>
  );
}
