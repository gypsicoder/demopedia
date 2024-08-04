'use client';
import {useSession} from 'next-auth/react';
import {useRouter} from 'next/navigation';
import React, {FormEvent} from 'react';
import useSWR from 'swr';
import {API_END_POINT} from '../configs/config';
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
      <div className='flex gap-[100px]'>
        <div className='flex-1'>
          {isLoading
            ? 'loading'
            : data?.map((post: IPost) => (
                <div className='flex items-center justify-between my-[50px]' key={post._id}>
                  <div className='w-[200px] h-[100px] relative'>
                    <Image src={post.image} alt='' width={200} height={100} />
                  </div>
                  <h2>{post.title}</h2>
                  <span
                    className='cursor-pointer text-red-500'
                    onClick={() => handleDelete(post._id)}
                  >
                    X
                  </span>
                </div>
              ))}
        </div>
        <form className='flex flex-1 flex-col gap[20px]' onSubmit={handleSubmit}>
          <h1>Add New Post</h1>
          <input type='text' placeholder='Title' className='p-[10px] bg-transparent border-[2px] border-[#bbb] rounded-[3px] text-[#bbb] text-[20px] font-bold' />
          <input type='text' placeholder='Desc' className='p-[10px] bg-transparent border-[2px] border-[#bbb] rounded-[3px] text-[#bbb] text-[20px] font-bold' />
          <input type='text' placeholder='Image' className='p-[10px] bg-transparent border-[2px] border-[#bbb] rounded-[3px] text-[#bbb] text-[20px] font-bold' />
          <textarea
            placeholder='Content'
            className='p-[10px] bg-transparent border-[2px] border-[#bbb] rounded-[3px] text-[#bbb] text-[20px] font-bold'
            cols={30}
            rows={10}
          ></textarea>
          <button className='p-[20px] cursor-pointer bg-olivedrab border-none rounded-[5px] text-[#eee] font-bold'>Send</button>
        </form>
      </div>
    );
  }
};

export default Dashboard;
