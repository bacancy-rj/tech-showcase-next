import React from 'react';

export default function UsersLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <div className='max-w-7xl mx-auto'>{children}</div>
    </section>
  );
}
