import React from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ThemeProvider as MUIThemeProvider } from '@material-ui/styles';

import Theme from './theme';

const styles: React.FC = ({ children }) => (
  <SCThemeProvider theme={Theme}>
    <MUIThemeProvider theme={Theme}>
      {children}
    </MUIThemeProvider>
  </SCThemeProvider>
);

export default styles;
