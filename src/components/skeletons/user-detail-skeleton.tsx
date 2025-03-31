import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Separator } from '@/components/ui/separator';

export function UserDetailSkeleton() {
  return (
    <div className=''>
      <Skeleton className='h-10 w-32 mb-6' />

      <Card>
        <CardContent className='p-6'>
          <div className='flex items-center mb-6'>
            <Skeleton className='h-16 w-16 mr-4 rounded-full' />
            <div>
              <Skeleton className='h-8 w-[200px] mb-2' />
              <Skeleton className='h-4 w-[150px]' />
            </div>
          </div>

          <Separator className='my-6' />

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
              <Skeleton className='h-6 w-[180px] mb-4' />
              {Array(3)
                .fill(0)
                .map((_, index) => (
                  <Skeleton key={index} className='h-5 w-full mb-2' />
                ))}
            </div>

            <div>
              <Skeleton className='h-6 w-[120px] mb-4' />
              {Array(4)
                .fill(0)
                .map((_, index) => (
                  <Skeleton key={index} className='h-5 w-full mb-2' />
                ))}
            </div>
          </div>

          <div className='mt-6'>
            <Separator className='my-6' />
            <Skeleton className='h-6 w-[220px] mb-4' />
            {Array(3)
              .fill(0)
              .map((_, index) => (
                <Skeleton key={index} className='h-5 w-full mb-2' />
              ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
