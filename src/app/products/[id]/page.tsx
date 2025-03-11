export const dynamicParams = false;

export function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }];
}

export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <div>
      <h1>Product {id}</h1>
      <p>{new Date().toLocaleTimeString()}</p>
    </div>
  );
}
