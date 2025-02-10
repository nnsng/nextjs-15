export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full min-h-20 flex-col items-center justify-center rounded border border-gray-600">
      {children}
    </div>
  );
}
