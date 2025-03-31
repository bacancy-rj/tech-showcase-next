import '@/styles/globals.css';
import React from 'react';
import type { Metadata } from 'next';
import { SideNavBar } from '@/components/ui/side-nav-bar';
import { ThemeProvider } from 'next-themes';
import { AddressBar } from '@/components/ui/address-bar';

export const metadata: Metadata = {
  metadataBase: new URL('https://tech-showcase-next.vercel.app/'),
  title: 'Next.js Tech Showcase',
  description:
    'The Tech Showcase is a demo project designed to illustrate the integration of a comprehensive modern web development tech stack.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className="overflow-y-scroll bg-gray-1100 bg-[url('/grid.svg')]">
        <ThemeProvider
          enableSystem={true}
          attribute='class'
          storageKey='theme'
          defaultTheme='system'
        >
          <SideNavBar />
          <div className='lg:pl-72'>
            <div className='mx-auto max-w-6xl space-y-8 px-2 pt-20 lg:px-8 lg:py-8'>
              <div className='rounded-lg dark:bg-vc-border-gradient p-px shadow-lg shadow-black/20'>
                <div className='rounded-lg dark:bg-black'>
                  <AddressBar />
                </div>
              </div>
              <div className='rounded-lg dark:bg-vc-border-gradient p-px shadow-lg shadow-black/20'>
                <div className='rounded-lg dark:bg-black p-3.5 lg:p-6'>{children}</div>
              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
