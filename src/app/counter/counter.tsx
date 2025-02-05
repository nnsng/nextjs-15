'use client';

import { useState } from 'react';

export function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={() => setCounter((x) => x + 1)}>Increase</button>
    </div>
  );
}
