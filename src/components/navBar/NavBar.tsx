'use client';
import Link from 'next/link';
import React from 'react';
import {links} from './links';
import {DarkModeToggle} from '../darkModeToggle/DarkModeToggle';
import {signOut, useSession} from 'next-auth/react';

function NavBar() {
  const session = useSession();

  return (
    <div className='flex h-[100px] justify-between items-center'>
      <Link href={'/'} className='text-[22px] font-bold text-olivedrab'>
        Demopedia
      </Link>
      <div className='flex items-center gap-[20px]'>
        <DarkModeToggle />
        {links.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
        {session.status === 'authenticated' && (
          <button className='p-[5px] border-none bg-olivedrab text-white cursor-pointer rounded-[3px]' onClick={() => signOut()}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
}

export default NavBar;
