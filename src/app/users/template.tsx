'use client';
// This is a client component
import { Boundary } from '@/components/ui/boundary';
import React from 'react';
import { useSearchParams } from 'next/navigation';

export default function Template({ children }: { children: React.ReactNode }) {
  // to extract username from the URL query parameters
  const searchParams = useSearchParams();

  return <Boundary labels={[searchParams.get('userName') ?? 'User Profiles']}>{children}</Boundary>;
}
