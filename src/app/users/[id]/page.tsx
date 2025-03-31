import React, { Suspense } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { UserDetailSkeleton } from '@/components/skeletons/user-detail-skeleton';
import { PageProps } from '../../../../.next/types/app/page';

// Define User type
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
}

// Function to fetch user data by ID
async function getUserData(id: string): Promise<User> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    cache: 'no-store',
  });

  if (!response.ok) {
    notFound();
  }

  return response.json();
}

// User detail component to be wrapped in Suspense
async function UserDetail({ id }: { id: string }) {
  const user = await getUserData(id);

  return (
    <>
      <Button variant='outline' className='mb-6' asChild>
        <Link href='/users'>Back to Users</Link>
      </Button>

      <Card>
        <CardContent className='p-6'>
          <div className='flex items-center mb-6'>
            <Avatar className='h-16 w-16 mr-4 text-xl bg-primary'>
              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h1 className='text-2xl font-bold'>{user.name}</h1>
              <p className='text-muted-foreground'>@{user.username}</p>
            </div>
          </div>

          <Separator className='my-6' />

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
              <h2 className='text-xl font-semibold mb-4'>Contact Information</h2>
              <p className='mb-2'>
                <strong>Email:</strong> {user.email}
              </p>
              <p className='mb-2'>
                <strong>Phone:</strong> {user.phone}
              </p>
              <p className='mb-2'>
                <strong>Website:</strong> {user.website}
              </p>
            </div>

            <div>
              <h2 className='text-xl font-semibold mb-4'>Address</h2>
              <p className='mb-2'>
                <strong>Street:</strong> {user.address.street}
              </p>
              <p className='mb-2'>
                <strong>Suite:</strong> {user.address.suite}
              </p>
              <p className='mb-2'>
                <strong>City:</strong> {user.address.city}
              </p>
              <p className='mb-2'>
                <strong>Zipcode:</strong> {user.address.zipcode}
              </p>
            </div>
          </div>

          <div className='mt-6'>
            <Separator className='my-6' />
            <h2 className='text-xl font-semibold mb-4'>Company Information</h2>
            <p className='mb-2'>
              <strong>Company Name:</strong> {user.company.name}
            </p>
            <p className='mb-2'>
              <strong>Catch Phrase:</strong> {user.company.catchPhrase}
            </p>
            <p className='mb-2'>
              <strong>Business:</strong> {user.company.bs}
            </p>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

// Server component for rendering user details
export default async function UserDetailPage({ params }: PageProps) {
  // asynchronous access of `params.id`.
  const { id } = await params;

  return (
    <div className='p-6'>
      <Suspense fallback={<UserDetailSkeleton />}>
        <UserDetail id={id} />
      </Suspense>
    </div>
  );
}
