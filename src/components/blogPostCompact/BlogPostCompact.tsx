import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {IPost} from '@/types/types';

export const BlogPostCompact = ({blogPost}: {blogPost: IPost}) => {
  return (
    <Link href={`/blog/${blogPost._id}`} className='flex items-center gap-[50px]'>
      <div>
        <Image
          src={blogPost.image}
          alt=''
          width={400}
          height={250}
          className='object-cover'
        />
      </div>
      <div>
        <h2 className='text-4xl mb-[10px]'>{blogPost.title}</h2>
        <p className='text-base text-[#ccc]'>{blogPost.desc}</p>
      </div>
    </Link>
  );
};
