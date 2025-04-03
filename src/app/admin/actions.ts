'use server';

import { auth, clerkClient } from '@clerk/nextjs/server';
import { revalidatePath } from 'next/cache';
import type { Role } from '../../../types/globals';

export const setRole = async (formData: FormData) => {
  const { sessionClaims } = await auth();

  if (sessionClaims?.metadata?.role !== 'admin') {
    throw new Error('Unauthorized');
  }

  const client = await clerkClient();
  const id = formData.get('id') as string;
  const role = formData.get('role') as Role;

  try {
    await client.users.updateUser(id, {
      publicMetadata: { role },
    });
    revalidatePath('/admin');
  } catch (error) {
    throw new Error('Failed to set role');
  }
};

export const removeRole = async (formData: FormData) => {
  const { sessionClaims } = await auth();

  if (sessionClaims?.metadata?.role !== 'admin') {
    throw new Error('Unauthorized');
  }

  const client = await clerkClient();
  const id = formData.get('id') as string;

  try {
    await client.users.updateUser(id, {
      publicMetadata: { role: null },
    });
    revalidatePath('/admin');
  } catch (error) {
    throw new Error('Failed to remove role');
  }
};
