import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Dynamic Routing',
  description: 'Users profile page with dynamic routing',
};

export default function UsersLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <div className='max-w-7xl mx-auto'>{children}</div>
    </section>
  );
}
