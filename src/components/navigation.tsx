import { SignedIn, SignedOut, SignInButton, SignOutButton, SignUpButton } from '@clerk/nextjs';
import Link from 'next/link';

export function Navigation() {
  return (
    <nav className="border-b border-[var(--foreground)]/10 bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-semibold text-[var(--foreground)]">
              <Link href="/">Next.js App</Link>
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <SignedOut>
              <SignInButton>
                <button className="border border-neutral-300 px-2 py-1 text-sm dark:border-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-700">
                  Sign in
                </button>
              </SignInButton>

              <SignUpButton>
                <button className="border border-neutral-300 px-2 py-1 text-sm dark:border-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-700">
                  Sign up
                </button>
              </SignUpButton>
            </SignedOut>

            <SignedIn>
              <Link href="user-profile">Profile</Link>
              <SignOutButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
}
