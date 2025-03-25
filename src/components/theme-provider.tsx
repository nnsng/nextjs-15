'use client';

import { createContext, use, type PropsWithChildren } from 'react';

type Theme = {
  colors: {
    primary: string;
    secondary: string;
  };
};

const defaultTheme: Theme = {
  colors: {
    primary: 'red',
    secondary: 'blue',
  },
};

const ThemeContext = createContext<Theme>(defaultTheme);

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  return <ThemeContext value={defaultTheme}>{children}</ThemeContext>;
};

export const useTheme = () => use(ThemeContext);
