'use client';
import React from 'react';
import useSWR from 'swr';

const Dashboard = () => {
  const fetcher = async (
    input: RequestInfo,
    init?: RequestInit
  ): Promise<any> => {
    const res = await fetch(input, init);
    return res.json();
  };

  const {data, error, isLoading} = useSWR(
    'https://jsonplaceholder.typicode.com/posts',
    fetcher
  );

  console.log({data});

  return <div>Dashboard Page</div>;
};

export default Dashboard;
