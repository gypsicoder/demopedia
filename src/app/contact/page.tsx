import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import UrlButton from '@/components/urlButton/UrlButton';

export const metadata = {
  title: 'Demopedia Contact Page',
  description:
    'This is the contact page of Demopedia which is a website showcasing projects and blog posts developed in NextJS 13',
};

function Contact() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{"Let's Keep in Touch"}</h1>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <Image
            src={'/contact.png'}
            fill={true}
            alt=''
            className={styles.image}
          />
        </div>
        <form action='' className={styles.form}>
          <input type='text' className={styles.textInput} placeholder='Name' />
          <input
            type='email'
            className={styles.textInput}
            placeholder='Email'
          />
          <textarea
            name='message'
            id='message'
            placeholder='Message'
            cols={30}
            rows={10}
            className={styles.textArea}
          ></textarea>
          <UrlButton url='#' text='Send' />
        </form>
      </div>
    </div>
  );
}

export default Contact;
