export default async function Docs({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug = [] } = await params;
  return <div>Docs for {slug.join('-')}</div>;
}
