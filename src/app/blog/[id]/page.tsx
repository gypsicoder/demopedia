'use client';
import React, {useEffect, useState} from 'react';
import Image from 'next/image';

import styles from './page.module.css';
import {notFound, useParams} from 'next/navigation';
import {IPost} from '@/types/types';
import {API_END_POINT} from '@/app/configs/config';

const BlogPost = () => {
  const {id} = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState<IPost | null>(null);

  const getPost = async (postId: string) => {
    const url = `${API_END_POINT}/posts/${postId}`;
    console.log({postId, url});
    const res = await fetch(url);
    if (!res.ok) {
      setPost(null);
      setIsLoading(false);
    }
    const _post = await res.json();
    setPost(_post);
    setIsLoading(false);
  };

  useEffect(() => {
    if (!id) return;
    getPost(id);
  }, [id]);

  if (!post && !isLoading) return notFound();

  return (
    <div className={styles.container}>
      <div className={styles.topContent}>
        <div className={styles.infoContainer}>
          <h1 className={styles.title}>{post?.title}</h1>
          <p className={styles.description}>{post?.desc}</p>
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
          {(post?.image?.length || 0) > 0 && (
            <Image
              src={post!.image}
              alt=''
              fill={true}
              className={styles.image}
            />
          )}
        </div>
      </div>
      <div className={styles.bottomContent}>{post?.content}</div>
    </div>
  );
};

export default BlogPost;
