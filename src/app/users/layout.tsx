import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Dynamic Routing',
  description: 'Users profile page with dynamic routing',
};

export default function UsersLayout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
