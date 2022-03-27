import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

export const CustomThemeProvider: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
