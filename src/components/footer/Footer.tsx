import React from 'react';

import Image from 'next/image';

function Footer() {
  return (
    <div className='flex justify-between items-center h-[50px] text-sm'>
      <div>All rights reserved ©2023 Demopedia.</div>
      <div className='flex items-center gap-[10px]'>
        <Image
          src={'/facebook.png'}
          width={20}
          height={20}
          alt='facebook account'
          className='cursor-pointer'
        />
        <Image
          src={'/instagram.png'}
          width={20}
          height={20}
          alt='instagram account'
          className='cursor-pointer'
        />
        <Image
          src={'/twitter.png'}
          width={20}
          height={20}
          alt='twitter account'
          className='cursor-pointer'
        />
        <Image
          src={'/youtube.png'}
          width={20}
          height={20}
          alt='youtube account'
          className='cursor-pointer'
        />
      </div>
    </div>
  );
}

export default Footer;
