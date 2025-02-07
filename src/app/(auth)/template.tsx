'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
  { name: 'Login', href: '/login' },
  { name: 'Register', href: '/register' },
];

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const [input, setInput] = useState('');

  return (
    <div>
      <h1>Auth Template</h1>

      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />

      <nav>
        <ul className="flex gap-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  key={link.href}
                  href={link.href}
                  className={isActive ? 'font-bold' : 'text-blue-600'}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {children}
    </div>
  );
}
