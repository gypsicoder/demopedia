'use client';
import React, {FormEvent, useState} from 'react';

import Link from 'next/link';
import {API_END_POINT} from '@/app/configs/config';
import {useRouter} from 'next/navigation';

const Register = () => {
  const [error, setError] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);
    const name = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const email = (e.currentTarget.elements[1] as HTMLInputElement).value;
    const password = (e.currentTarget.elements[2] as HTMLInputElement).value;

    try {
      const res = await fetch(`${API_END_POINT}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      res.status === 201 &&
        router.push('/dashboard/login?success=Account has been created');
    } catch (error) {
      console.log('Error while registering');
      console.log({error});
      setError(true);
    }
  };

  return (
    <div className='flex flex-col gap-[20px] justify-center items-center'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-[20px] w-[300px]'>
        <input
          type='text'
          placeholder='Username'
          className='p-[10px] bg-transparent border-[2px] border-[#ccc] rounded-[5px] text-[#bbb] text-[20px] font-bold'
          required
        />
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
        <button className='w-[300px] p-[20px] border-none rounded-[5px] cursor-pointer bg-olivedrab hover:bg-[#49b07d] text-[#fff] font-bold bg-[rgba(228,97,50,0.72)] hover:bg-[rgba(228, 97, 50, 0.803)]'>Register</button>
        {error && 'Something went wrong!'}
      </form>
      <Link href={'/dashboard/login'}>Login with existing account</Link>
    </div>
  );
};

export default Register;
