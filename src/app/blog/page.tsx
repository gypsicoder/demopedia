import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';
import UrlButton from '@/components/urlButton/UrlButton';

function Blog() {
  return (
    <div className={styles.container}>
      <Link href={'/blog/blogId1'} className={styles.link}>
        <div className={styles.imageContent}>
          <Image
            src={
              'https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg'
            }
            alt=''
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.textContent}>
          <h2 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
          <p className={styles.description}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
            vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate
            ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet
            fugiat tenetur?
          </p>
        </div>
      </Link>
      <Link href={'/blog/blogId2'} className={styles.link}>
        <div className={styles.imageContent}>
          <Image
            src={
              'https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg'
            }
            alt=''
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.textContent}>
          <h2 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
          <p className={styles.description}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
            vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate
            ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet
            fugiat tenetur?
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Blog;
