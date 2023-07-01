import React from 'react';
import styles from './page.module.css';
import {notFound} from 'next/navigation';
import {BlogPostCompact} from '@/components/blogPostCompact/BlogPostCompact';
import {BlogPost} from '@/types/types';

async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'no-store',
  });
  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

const Blog = async () => {
  const posts: BlogPost[] = await getPosts();

  return (
    <div className={styles.container}>
      {posts?.map((post) => {
        return <BlogPostCompact key={post.id} blogPost={post} />;
      })}
    </div>
  );
};

export default Blog;
