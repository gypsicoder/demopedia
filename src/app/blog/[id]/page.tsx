'use client';
import React from 'react';
import Image from 'next/image';

import styles from './page.module.css';
import {notFound, useParams} from 'next/navigation';
import {BlogPost} from '@/types/types';

async function getPost(postId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      cache: 'no-store',
    }
  );
  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

const BlogPost = async ({}: {}) => {
  const params = useParams();

  const post: BlogPost = await getPost(params?.id);

  return (
    <div className={styles.container}>
      <div className={styles.topContent}>
        <div className={styles.infoContainer}>
          <h1 className={styles.title}>{post?.title}</h1>
          <p className={styles.description}>{post?.body}</p>
          <div className={styles.userInfo}>
            <Image
              alt=''
              src={'https://randomuser.me/api/portraits/women/13.jpg'}
              width={40}
              height={40}
              className={styles.userAvatar}
            />
            <span className={styles.userName}>Gessy Catherine</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={
              'https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg'
            }
            alt=''
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.bottomContent}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae
        dolor, optio voluptatibus magnam iure esse tempora beatae. A suscipit
        eos. Animi quibusdam cum omnis officiis voluptatum quo ea eveniet? Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae dolor,
        optio voluptatibus magnam iure esse tempora beatae, a suscipit eos.
        Animi quibusdam cum omnis officiis
        <br />
        <br />
        voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
        esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis officiis
        voluptatum quo ea eveniet?
      </div>
    </div>
  );
};

export default BlogPost;
