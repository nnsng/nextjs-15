type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export default async function UsersServer() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await response.json();

  return (
    <div className="space-y-4">
      {users.map((user) => (
        <div key={user.id} className="rounded-md border border-gray-300 bg-white px-4 py-2">
          <h2 className="text-lg font-semibold">{user.name}</h2>
          <p className="text-gray-500">Username: {user.username}</p>
          <p className="text-gray-500">Email: {user.email}</p>
          <p className="text-gray-500">Phone: {user.phone}</p>
        </div>
      ))}
    </div>
  );
}
