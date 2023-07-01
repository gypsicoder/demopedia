import React from 'react';
import styles from './BlogPostCompact.module.css';
import Link from 'next/link';
import Image from 'next/image';
import {BlogPost} from '@/types/types';

export const BlogPostCompact = ({blogPost}: {blogPost: BlogPost}) => {
  return (
    <Link href={`/blog/${blogPost.id}`} className={styles.link}>
      <div className={styles.imageContent}>
        <Image
          src={
            'https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg'
          }
          alt=''
          width={400}
          height={250}
          className={styles.image}
        />
      </div>
      <div className={styles.textContent}>
        <h2 className={styles.title}>{blogPost.title}</h2>
        <p className={styles.description}>{blogPost.body}</p>
      </div>
    </Link>
  );
};
