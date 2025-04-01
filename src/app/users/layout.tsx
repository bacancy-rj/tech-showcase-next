import { Boundary } from '@/components/ui/boundary';
import { Metadata } from 'next';
import React, { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Dynamic Routing',
  description: 'Users profile page with dynamic routing',
};

export default function UsersLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<Boundary labels={['User Profiles']}>Loading...</Boundary>}>
      {children}
    </Suspense>
  );
}
