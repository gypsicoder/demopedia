import React from 'react';
import styles from './BlogPostCompact.module.css';
import Link from 'next/link';
import Image from 'next/image';
import {IPost} from '@/types/types';

export const BlogPostCompact = ({blogPost}: {blogPost: IPost}) => {
  return (
    <Link href={`/blog/${blogPost._id}`} className={styles.link}>
      <div className={styles.imageContent}>
        <Image
          src={blogPost.image}
          alt=''
          width={400}
          height={250}
          className={styles.image}
        />
      </div>
      <div className={styles.textContent}>
        <h2 className={styles.title}>{blogPost.title}</h2>
        <p className={styles.description}>{blogPost.desc}</p>
      </div>
    </Link>
  );
};
