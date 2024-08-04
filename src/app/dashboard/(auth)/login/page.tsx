'use client';
import React, {FormEvent, Suspense, useEffect, useState} from 'react';
import {signIn, useSession} from 'next-auth/react';
import {useRouter, useSearchParams} from 'next/navigation';
import Link from 'next/link';

const Login = () => {
  const session = useSession();
  const router = useRouter();
  const params = useSearchParams();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    setError(params.get('error') || '');
    setSuccess(params.get('success') || '');
  }, [params]);

  if (session.status === 'loading') {
    return <p>Loading...</p>;
  }

  if (session.status === 'authenticated') {
    router?.push('/dashboard');
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value;

    signIn('credentials', {email, password});
  };

  return (
    <div className='flex flex-col justify-center items-center gap-[20px]'>
        <h1 className='text-[#bbb]'>{success ? success : 'Welcome Back'}</h1>
        <h2 className='text-[20px] mb-[30px] text-[#bbb]'>Please sign in to see the dashboard.</h2>
        <form onSubmit={handleSubmit} className='flex flex-col gap-[20px] w-[300px]'>
          <input
            type='email'
            placeholder='Email'
            className='p-[10px] bg-transparent border-[2px] border-[#ccc] rounded-[5px] text-[#bbb] text-[20px] font-bold'
            required
          />
          <input
            type='password'
            placeholder='Password'
            className='p-[10px] bg-transparent border-[2px] border-[#ccc] rounded-[5px] text-[#bbb] text-[20px] font-bold'
            required
          />
          <button className='w-[300px] p-[20px] border-none rounded-[5px] cursor-pointer bg-olivedrab hover:bg-[#49b07d] text-[#fff] font-bold'>Login</button>
          {error && error}
        </form>
        <button
          onClick={() => {
            signIn('google');
          }}
          className='w-[300px] p-[20px] border-none rounded-[5px] cursor-pointer bg-olivedrab hover:bg-[#49b07d] text-[#fff] font-bold bg-[rgba(228,97,50,0.72)] hover:bg-[rgba(228, 97, 50, 0.803)]'
        >
          Login with Google
        </button>
        <span className='text-[#bbb]'>- OR -</span>
        <Link className='underline text-[#7d7c7c] hover:text-[rgb(61, 61, 61)]' href='/dashboard/register'>
          Create new account
        </Link>
      </div>
  );
};

const LoginPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Login />
    </Suspense>
  )
}

export default LoginPage;