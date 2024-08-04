import {IPortfolioItem} from '@/types/types';
import React from 'react';
import UrlButton from '../urlButton/UrlButton';
import Image from 'next/image';

export const PortfolioItem = ({item}: {item: IPortfolioItem}) => {
  return (
    <div className='flex gap-[50px] mt-[50px] mb-[100px] [&:nth-child(2n+1)]:flex-row-reverse'>
      <div className='flex flex-col flex-1 justify-center gap-[20px]'>
        <h2 className='text-4xl'>{item.title}</h2>
        <p className='text-base'>{item.desc}</p>
        <UrlButton text='See More' url='#' />
      </div>
      <div className='flex relative h-[500px]'>
        <Image src={item.image} alt='' fill={true} className='object-cover' />
      </div>
    </div>
  );
};
