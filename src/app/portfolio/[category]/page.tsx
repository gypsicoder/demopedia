'use client';
import React from 'react';
import styles from './page.module.css';
import {useParams} from 'next/navigation';
import Image from 'next/image';
import UrlButton from '@/components/urlButton/UrlButton';

function Category() {
  const params = useParams();
  console.log({params});

  return (
    <div className={styles.container}>
      <h1 className={styles.categoryTitle}>{params.category || 'Unknown'}</h1>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h2 className={styles.title}>Test Title</h2>
          <p className={styles.description}>Description</p>
          <UrlButton text='See More' url='#' />
        </div>
        <div className={styles.imageContent}>
          <Image
            src={
              'https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg'
            }
            alt=''
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h2 className={styles.title}>Test Title</h2>
          <p className={styles.description}>Description</p>
          <UrlButton text='See More' url='#' />
        </div>
        <div className={styles.imageContent}>
          <Image
            src={
              'https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg'
            }
            alt=''
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
}

export default Category;
