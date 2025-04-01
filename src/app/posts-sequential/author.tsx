import { setTimeout } from 'timers/promises';

type Author = {
  id: number;
  name: string;
};

export default async function Author({ userId }: { userId: number }) {
  await setTimeout(2000);
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  const author: Author = await response.json();

  return (
    <p className="text-gray-700">
      Author: <span className="font-bold">{author.name}</span>
    </p>
  );
}
