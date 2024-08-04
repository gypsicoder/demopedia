'use client';
import React, {useContext} from 'react';

import {ThemeContext} from '@/contexts/ThemeContext';

export const DarkModeToggle = () => {
  const {theme, toggleTheme} = useContext(ThemeContext);

  return (
    <div className='flex justify-between items-center relative w-[42px] h-[24px] p-[2px] border-[1.5px] border-olivedrab rounded-[30px] cursor-pointer' onClick={toggleTheme}>
      <div className='text-xs'>🌙</div>
      <div className='text-xs'>🔆</div>
      <div
        className='w-[15px] h-[15px] rounded-full bg-olivedrab absolute'
        style={theme === 'dark' ? {right: '2px'} : {left: '2px'}}
      />
    </div>
  );
};
