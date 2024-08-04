import React from 'react';
import Link from 'next/link';

function UrlButton({text, url}: {text: string; url: string}) {
  return (
    <Link href={url}>
      <button className='p-[20px] border-none rounded-[5px] cursor-pointer bg-olivedrab w-max text-white'>{text}</button>
    </Link>
  );
}

export default UrlButton;
