import React, { Suspense } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import UserCardSkeleton from '@/components/skeletons/user-card-skeleton';

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

// Server component to fetch and display users data during SSR
async function UsersList() {
  // Fetch data from the JSONPlaceholder API with error handling
  let users: User[] = [];
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    users = await response.json();
  } catch (error) {
    console.error('Failed to fetch users:', error);
  }

  return (
    <>
      {users.map((user) => (
        <Link href={`/users/${user.id}`} key={user.id} className='no-underline'>
          <Card className='h-full hover:shadow-lg transition-all duration-200 hover:-translate-y-1'>
            <CardHeader className='pb-2'>
              <div className='flex items-center gap-4'>
                <Avatar className='h-10 w-10 bg-primary'>
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h3 className='text-lg font-semibold'>{user.name}</h3>
              </div>
            </CardHeader>
            <CardContent>
              <p className='text-muted-foreground mb-2'>Username: {user.username}</p>
              <p className='text-sm mb-2'>Email: {user.email}</p>
              <p className='text-sm mb-2'>Phone: {user.phone}</p>
              <p className='text-sm'>Company: {user.company.name}</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </>
  );
}

// Skeleton loader component for the grid
function UsersGridSkeleton() {
  return (
    <>
      {[...Array(6)].map((_, index) => (
        <UserCardSkeleton key={index} />
      ))}
    </>
  );
}

// Main page component
export default function UsersPage() {
  return (
    <div className='p-6'>
      <h1 className='text-3xl font-bold mb-6'>User Profiles</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        <Suspense fallback={<UsersGridSkeleton />}>
          <UsersList />
        </Suspense>
      </div>
    </div>
  );
}
