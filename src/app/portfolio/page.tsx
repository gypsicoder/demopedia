import React from 'react';
import Link from 'next/link';

function Portfolio() {
  return (
    <div className='flex flex-col'>
      <h3 className='my-[20px]'>Choose a gallery</h3>
      <div className='flex flex-row gap-[50px]'>
        <Link className='border-[5px] border-[#ccc] rounded-[5px] relative w-[300px] h-[400px] bg-cover bg-[url("/illustration.png")]' href={'/portfolio/illustrations'}>
          <span className='absolute right-[10px] bottom-[10px] text-[30px] font-bold'>Illustrations</span>
        </Link>
        <Link className='border-[5px] border-[#ccc] rounded-[5px] relative w-[300px] h-[400px] bg-cover bg-[url("/websites.jpg")]' href={'/portfolio/websites'}>
          <span className='absolute right-[10px] bottom-[10px] text-[30px] font-bold'>Websites</span>
        </Link>
        <Link className='border-[5px] border-[#ccc] rounded-[5px] relative w-[300px] h-[400px] bg-cover bg-[url("/apps.jpg")]' href={'/portfolio/applications'}>
          <span className='absolute right-[10px] bottom-[10px] text-[30px] font-bold'>Applications</span>
        </Link>
      </div>
    </div>
  );
}

export default Portfolio;
