import React from 'react';
import {notFound} from 'next/navigation';
import {Metadata, ResolvingMetadata} from 'next';

import {items} from './data';
import {PortfolioItem} from '@/components/portfolioItem/PortfolioItem';
import {IPortfolioItem} from '@/types/types';

type Props = {
  params: {category: string};
  searchParams: {[key: string]: string | string[] | undefined};
};

const getData = (category: string) => {
  const data = items[category];
  if (!data) return notFound();
  return data;
};

export async function generateMetadata(
  {params}: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const {category} = params;
  return {
    title: `Demopedia portfolio items: ${category}`,
    description: `Portfolio items of ${category}`,
  };
}

const Category = async ({params}: Props) => {
  const data = getData(params.category);

  return (
    <div className='flex flex-col'>
      <h1 className='text-5xl bg-olivedrab'>{params.category || 'Unknown'}</h1>
      {data.map((portfolioItem: IPortfolioItem) => {
        return (
          <PortfolioItem item={portfolioItem} key={`${portfolioItem.id}`} />
        );
      })}
    </div>
  );
};

export default Category;
