import React from 'react';
import styles from './page.module.css';

function Layout({children}: {children: React.ReactNode}) {
  return (
    <div>
      <h1 className={styles.title}>Our works</h1>
      {children}
    </div>
  );
}

export default Layout;
