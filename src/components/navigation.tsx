import { SignInButton, SignOutButton } from '@clerk/nextjs';
import Link from 'next/link';

export function Navigation() {
  return (
    <nav className="border-b border-[var(--foreground)]/10 bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-semibold text-[var(--foreground)]">Next.js App</h1>
          </div>

          <div className="flex items-center gap-4">
            <SignInButton mode="modal" />
            <Link href="user-profile">Profile</Link>
            <SignOutButton />
          </div>
        </div>
      </div>
    </nav>
  );
}
