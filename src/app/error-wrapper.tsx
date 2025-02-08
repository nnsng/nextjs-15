'use client';

import { useState } from 'react';

interface WrapperProps {
  children: React.ReactNode;
}

const ErrorSimulator = ({ message = 'An error occurred' }: { message?: string }) => {
  const [error, setError] = useState(false);

  if (error) throw new Error(message);

  return (
    <button
      title="Simulate an error"
      className="rounded bg-red-950 p-1 text-sm leading-none font-semibold text-red-500 transition hover:bg-red-900"
      onClick={() => setError(true)}
    >
      Simulate Error
    </button>
  );
};

export const ErrorWrapper = ({ children }: WrapperProps) => {
  return (
    <div className="relative mt-8 flex flex-col rounded-lg border border-gray-300 p-4">
      <div className="absolute top-0 left-4 -translate-y-1/2">
        <ErrorSimulator message="Simulated error in root layout" />
      </div>
      {children}
    </div>
  );
};
