'use client';
import {useSession} from 'next-auth/react';
import {useRouter} from 'next/navigation';
import React from 'react';
import useSWR from 'swr';

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();

  if (session.status === 'loading') {
    return <p>Loading...</p>;
  }

  if (session.status === 'unauthenticated') {
    router?.push('/dashboard/login');
  }

  // const fetcher = async (
  //   input: RequestInfo,
  //   init?: RequestInit
  // ): Promise<any> => {
  //   const res = await fetch(input, init);
  //   return res.json();
  // };

  // const {data, error, isLoading} = useSWR(
  //   'https://jsonplaceholder.typicode.com/posts',
  //   fetcher
  // );

  // console.log({data});

  if (session.status === 'authenticated') {
    return <div>Dashboard Page</div>;
  }
};

export default Dashboard;
