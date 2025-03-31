'use client';

import { sideBarItemList, type Item } from '@/lib/side-bar-item-list';
import { NextLogoDark } from '@/components/ui/next-logo';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import { useState } from 'react';
import { ThemeModeToggle } from '@/components/ui/theme-mode-toggle';

export function SideNavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <div className='fixed top-0 z-10 flex w-full flex-col border-b dark:border-gray-800 dark:bg-black lg:bottom-0 lg:z-auto lg:w-72 lg:border-b-0 lg:border-r lg:dark:border-gray-800'>
      <div className='flex h-14 items-center px-4 py-4 lg:h-auto'>
        <Link href='/' className='group flex w-full items-center gap-x-2.5' onClick={close}>
          <div className='h-7 w-7 rounded-full'>
            <NextLogoDark />
          </div>

          <h3 className='font-semibold tracking-wide dark:text-gray-400 group-hover:dark:text-gray-50'>
            Next.js Tech Showcase
          </h3>
        </Link>
      </div>
      <div className='lg:hidden absolute right-28 top-0 flex h-14 items-center'>
        <ThemeModeToggle />
      </div>
      <button
        type='button'
        className='group absolute right-0 top-0 flex h-14 items-center gap-x-2 px-4 lg:hidden'
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className='font-medium text-gray-400 group-hover:text-black dark:group-hover:text-white'>
          Menu
        </div>
        {isOpen ? (
          <XMarkIcon className='block w-6 text-gray-400' />
        ) : (
          <Bars3Icon className='block w-6 text-gray-400' />
        )}
      </button>

      <div
        className={`${clsx('overflow-y-auto lg:static lg:block', {
          'fixed inset-x-0 bottom-0 top-14 mt-px bg-white dark:bg-black': isOpen,
          hidden: !isOpen,
        })}`}
      >
        <nav className='space-y-6 px-2 pb-24 pt-5'>
          {sideBarItemList.map((section) => {
            return (
              <div key={section.name}>
                <div className='mb-2 px-3 text-xs font-bold uppercase tracking-wider dark:text-gray-400/80'>
                  <div>{section.name}</div>
                </div>

                <div className='space-y-1'>
                  {section.items.map((item) => (
                    <SideNavBarItem key={item.slug} item={item} close={close} />
                  ))}
                </div>
              </div>
            );
          })}
        </nav>
      </div>
      <div className='absolute bottom-4 right-6 hidden lg:block'>
        <ThemeModeToggle />
      </div>
    </div>
  );
}

function SideNavBarItem({ item, close }: { item: Item; close: () => false | void }) {
  const segment = useSelectedLayoutSegment();
  const isActive = item.slug === segment;

  return (
    <Link
      onClick={close}
      href={`/${item.slug}`}
      className={clsx('block rounded-md px-3 py-2 text-sm font-medium hover:text-gray-600', {
        'text-gray-600 hover:bg-gray-600 hover:text-white': !isActive,
        'text-black dark:text-white': isActive,
      })}
    >
      {item.name}
    </Link>
  );
}
