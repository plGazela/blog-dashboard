import { BookOpenText } from 'lucide-react';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/">
      <div className='flex items-center'>
        <BookOpenText size={48} className='mr-2' />
        <h1 className='text-2xl font-bold'>My blog</h1>
      </div>
    </Link>
  );
}