import React from 'react';
import styles from './Footer.module.css';
import Image from 'next/image';

function Footer() {
  return (
    <div className={styles.container}>
      <div>All rights reserved ©2023 Demopedia.</div>
      <div className={styles.social}>
        <Image
          src={'/facebook.png'}
          width={20}
          height={20}
          alt='facebook account'
          className={styles.icon}
        />
        <Image
          src={'/instagram.png'}
          width={20}
          height={20}
          alt='instagram account'
          className={styles.icon}
        />
        <Image
          src={'/twitter.png'}
          width={20}
          height={20}
          alt='twitter account'
          className={styles.icon}
        />
        <Image
          src={'/youtube.png'}
          width={20}
          height={20}
          alt='youtube account'
          className={styles.icon}
        />
      </div>
    </div>
  );
}

export default Footer;
