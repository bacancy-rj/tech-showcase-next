'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export function AddressBar() {
  const pathname = usePathname();
  const [currentUrl, setCurrentUrl] = useState<Location | null>(null);

  useEffect(() => {
    // Check if the code is running on the client side
    if (process) {
      // Access the current page URL using window.location
      setCurrentUrl(window.location);
    }
  }, []);

  return (
    <div className='flex items-center gap-x-2 p-3.5 lg:px-5 lg:py-3'>
      <div className='dark:text-gray-600'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-4'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path
            fillRule='evenodd'
            d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z'
            clipRule='evenodd'
          />
        </svg>
      </div>
      <div className='flex gap-x-1 text-sm font-medium'>
        <div>
          <span className='px-2 dark:text-gray-400'>{currentUrl?.hostname ?? ''}</span>
        </div>
        {pathname ? (
          <>
            <span className='dark:text-gray-600'>/</span>
            {pathname
              .split('/')
              .slice(1)
              .filter((segment) => segment !== '')
              .map((segment) => {
                return (
                  <React.Fragment key={segment}>
                    <span>
                      <span
                        key={segment}
                        className='animate-[highlight_1s_ease-in-out_1] rounded-full px-1.5 py-0.5 dark:text-gray-100'
                      >
                        {segment}
                      </span>
                    </span>

                    <span className='dark:text-gray-600'>/</span>
                  </React.Fragment>
                );
              })}
          </>
        ) : null}
      </div>
    </div>
  );
}
