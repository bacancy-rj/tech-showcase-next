import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export default function UserCardSkeleton() {
  return (
    <Card className='h-full'>
      <CardHeader className='pb-2'>
        <div className='flex items-center gap-4'>
          <Skeleton className='h-10 w-10 rounded-full' />
          <Skeleton className='h-6 w-32' />
        </div>
      </CardHeader>
      <CardContent>
        <Skeleton className='h-4 w-40 mb-2' />
        <Skeleton className='h-4 w-48 mb-2' />
        <Skeleton className='h-4 w-32 mb-2' />
        <Skeleton className='h-4 w-36' />
      </CardContent>
    </Card>
  );
}
