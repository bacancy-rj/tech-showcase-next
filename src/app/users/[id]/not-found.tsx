import Link from 'next/link';

export default function UserNotFound() {
  return (
    <div className='container mx-auto py-16 px-4 text-center'>
      <h1 className='text-3xl font-bold mb-4'>User Not Found</h1>
      <p className='mb-8'>The user you are looking for doesn't exist or has been removed.</p>
      <Link
        href='/users'
        className='bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md'
      >
        View All Users
      </Link>
    </div>
  );
}
