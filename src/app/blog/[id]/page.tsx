import React from 'react';
import Image from 'next/image';
import {Metadata, ResolvingMetadata} from 'next';
import {notFound} from 'next/navigation';

import {IPost} from '@/types/types';
import {API_END_POINT} from '@/app/configs/config';

type Props = {
  params: {id: string};
  searchParams: {[key: string]: string | string[] | undefined};
};

const getPost = async (postId: string) => {
  const url = `${API_END_POINT}/posts/${postId}`;
  console.log({postId, url});
  const res = await fetch(url);
  if (!res.ok) {
    return notFound();
  }
  const post = await res.json();
  return post;
};

export async function generateMetadata(
  {params}: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;

  const post: IPost = await getPost(id);
  return {
    title: post.title,
    description: post.desc,
  };
}

const BlogPost = async ({params, searchParams}: Props) => {
  const post: IPost = await getPost(params.id);

  return (
    <div className='flex flex-col gap-[40px]'>
      <div className='flex flex-row w-full gap-[5px]'>
        <div className='flex flex-1 flex-col justify-between'>
          <h1 className='text-4xl'>{post?.title}</h1>
          <p className='text-base text-[#ccc]'>{post?.desc}</p>
          <div className='flex items-center gap-[10px]'>
            <Image
              alt=''
              src={post?.image}
              width={40}
              height={40}
              className='rounded-full relative object-cover'
            />
            <span className='text-base font-medium'>{post?.username}</span>
          </div>
        </div>
        <div className='flex-1 relative h-[250px]'>
          {(post?.image?.length || 0) > 0 && (
            <Image
              src={post!.image}
              alt=''
              fill={true}
              className='object-cover'
            />
          )}
        </div>
      </div>
      <div className='text-sm text-[#ccc]'>{post?.content}</div>
    </div>
  );
};

export default BlogPost;
