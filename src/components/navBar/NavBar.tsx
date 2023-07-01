import Link from 'next/link';
import React from 'react';
import {links} from './links';
import styles from './NavBar.module.css';
import {DarkModeToggle} from '../darkModeToggle/DarkModeToggle';

function NavBar() {
  return (
    <div className={styles.container}>
      <Link href={'/'} className={styles.logo}>
        Demopedia
      </Link>
      <div className={styles.links}>
        <DarkModeToggle />
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default NavBar;
