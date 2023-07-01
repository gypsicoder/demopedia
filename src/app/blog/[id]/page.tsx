import React from 'react';
import Image from 'next/image';
import {Metadata, ResolvingMetadata} from 'next';
import {notFound} from 'next/navigation';

import styles from './page.module.css';
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
  const post = await getPost(params.id);

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
