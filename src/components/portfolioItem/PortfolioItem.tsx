import {IPortfolioItem} from '@/types/types';
import React from 'react';
import UrlButton from '../urlButton/UrlButton';
import styles from './PortfolioItem.module.css';
import Image from 'next/image';

export const PortfolioItem = ({item}: {item: IPortfolioItem}) => {
  return (
    <div className={styles.content}>
      <div className={styles.textContent}>
        <h2 className={styles.title}>{item.title}</h2>
        <p className={styles.description}>{item.desc}</p>
        <UrlButton text='See More' url='#' />
      </div>
      <div className={styles.imageContent}>
        <Image src={item.image} alt='' fill={true} className={styles.image} />
      </div>
    </div>
  );
};
