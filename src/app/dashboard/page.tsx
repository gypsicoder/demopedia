'use client';
import {useSession} from 'next-auth/react';
import {useRouter} from 'next/navigation';
import React, {FormEvent} from 'react';
import useSWR from 'swr';
import {API_END_POINT} from '../configs/config';
import styles from './page.module.css';
import Image from 'next/image';
import {IPost} from '@/types/types';

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();

  const fetcher = async (
    input: RequestInfo,
    init?: RequestInit
  ): Promise<any> => {
    const res = await fetch(input, init);
    return res.json();
  };

  const {data, mutate, error, isLoading} = useSWR(
    `${API_END_POINT}/posts?username=${session?.data?.user?.name || ''}`,
    fetcher
  );

  if (session.status === 'loading') {
    return <p>Loading...</p>;
  }

  if (session.status === 'unauthenticated') {
    router?.push('/dashboard/login');
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const title = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const desc = (e.currentTarget.elements[1] as HTMLInputElement).value;
    const image = (e.currentTarget.elements[2] as HTMLInputElement).value;
    const content = (e.currentTarget.elements[3] as HTMLInputElement).value;

    try {
      await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
          title,
          desc,
          image,
          content,
          username: session?.data?.user?.name,
        }),
      });
      mutate();
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });
      mutate();
    } catch (err) {
      console.log(err);
    }
  };

  if (session.status === 'authenticated') {
    return (
      <div className={styles.container}>
        <div className={styles.posts}>
          {isLoading
            ? 'loading'
            : data?.map((post: IPost) => (
                <div className={styles.post} key={post._id}>
                  <div className={styles.imgContainer}>
                    <Image src={post.image} alt='' width={200} height={100} />
                  </div>
                  <h2 className={styles.postTitle}>{post.title}</h2>
                  <span
                    className={styles.delete}
                    onClick={() => handleDelete(post._id)}
                  >
                    X
                  </span>
                </div>
              ))}
        </div>
        <form className={styles.new} onSubmit={handleSubmit}>
          <h1>Add New Post</h1>
          <input type='text' placeholder='Title' className={styles.input} />
          <input type='text' placeholder='Desc' className={styles.input} />
          <input type='text' placeholder='Image' className={styles.input} />
          <textarea
            placeholder='Content'
            className={styles.textArea}
            cols={30}
            rows={10}
          ></textarea>
          <button className={styles.button}>Send</button>
        </form>
      </div>
    );
  }
};

export default Dashboard;
