'use client';
import React, {useContext} from 'react';
import styles from './DarkmodeToggle.module.css';
import {ThemeContext} from '@/contexts/ThemeContext';

export const DarkModeToggle = () => {
  const {theme, toggleTheme} = useContext(ThemeContext);

  return (
    <div className={styles.container} onClick={toggleTheme}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div
        className={styles.greenCircle}
        style={theme === 'dark' ? {right: '2px'} : {left: '2px'}}
      />
    </div>
  );
};
