export default function ComplexDashboardLayout({
  children,
  users,
  revenue,
  notifications,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      {children}

      <div className="flex gap-4">
        <div className="flex flex-1 flex-col gap-4">
          <div className="flex-1">{users}</div>
          <div className="flex-1">{revenue}</div>
        </div>

        <div className="flex-1">{notifications}</div>
      </div>
    </div>
  );
}
