import Link from 'next/link';

export default function ProductList() {
  return (
    <div>
      <h1>Product List</h1>

      <ul>
        {new Array(5).fill(null).map((_, index) => (
          <li key={index}>
            <Link href={`/products/${index + 1}`}>Product {index + 1}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
