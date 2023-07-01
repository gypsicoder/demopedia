'use client';
import React, {FormEvent, useState} from 'react';

import styles from './page.module.css';
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
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type='text'
          placeholder='Username'
          className={styles.input}
          required
        />
        <input
          type='email'
          placeholder='Email'
          className={styles.input}
          required
        />
        <input
          type='password'
          placeholder='Password'
          className={styles.input}
          required
        />
        <button className={styles.button}>Register</button>
        {error && 'Something went wrong!'}
      </form>
      <Link href={'/dashboard/login'}>Login with existing account</Link>
    </div>
  );
};

export default Register;
