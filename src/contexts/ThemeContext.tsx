'use client';

import React, {createContext, useState} from 'react';
import {Theme} from '@/types/types';

interface ThemeContextState {
  theme: Theme;
  toggleTheme: () => void;
}

const defaultThemeContextState: ThemeContextState = {
  theme: 'dark',
  toggleTheme: () => {},
};

export const ThemeContext = createContext(defaultThemeContextState);

export const ThemeProvider = ({children}: {children: React.ReactNode}) => {
  const [theme, setTheme] = useState<Theme>('dark');

  const toggleTheme = () => {
    setTheme((previousTheme) => (previousTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className={`theme ${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
