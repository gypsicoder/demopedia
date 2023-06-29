import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';

function Portfolio() {
  return (
    <div className={styles.container}>
      <h3 className={styles.selectTitle}>Choose a gallery</h3>
      <div className={styles.items}>
        <Link className={styles.item} href={'/portfolio/illustrations'}>
          <span className={styles.itemTitle}>Illustrations</span>
        </Link>
        <Link className={styles.item} href={'/portfolio/websites'}>
          <span className={styles.itemTitle}>Websites</span>
        </Link>
        <Link className={styles.item} href={'/portfolio/applications'}>
          <span className={styles.itemTitle}>Applications</span>
        </Link>
      </div>
    </div>
  );
}

export default Portfolio;
