'use client';
import React from 'react';
import styles from './page.module.css';
import {notFound, useParams} from 'next/navigation';
import {items} from './data';
import {PortfolioItem} from '@/components/portfolioItem/PortfolioItem';
import {IPortfolioItem} from '@/types/types';

const getData = (category: string) => {
  const data = items[category];
  if (!data) return notFound();
  return data;
};

function Category() {
  const params = useParams();
  const data = getData(params.category);

  return (
    <div className={styles.container}>
      <h1 className={styles.categoryTitle}>{params.category || 'Unknown'}</h1>
      {data.map((portfolioItem: IPortfolioItem) => {
        return (
          <PortfolioItem item={portfolioItem} key={`${portfolioItem.id}`} />
        );
      })}
    </div>
  );
}

export default Category;
