import React from 'react';
import styles from './urlbutton.module.css';
import Link from 'next/link';

function UrlButton({text, url}: {text: string; url: string}) {
  return (
    <Link href={url}>
      <button className={styles.container}>{text}</button>
    </Link>
  );
}

export default UrlButton;
