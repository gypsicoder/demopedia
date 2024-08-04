import React from 'react';
import {notFound} from 'next/navigation';
import {BlogPostCompact} from '@/components/blogPostCompact/BlogPostCompact';
import {IPost} from '@/types/types';
import {API_END_POINT} from '../configs/config';

async function getPosts() {
  const res = await fetch(`${API_END_POINT}/posts`, {
    cache: 'no-store',
  });
  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

const Blog = async () => {
  const posts: IPost[] = await getPosts();

  return (
    <div className='flex flex-col gap-[30px]'>
      {posts?.map((post) => {
        return <BlogPostCompact key={post._id} blogPost={post} />;
      })}
    </div>
  );
};

export default Blog;
