import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Theme from './styles/theme';

const App: React.FC = () => (
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
  </ThemeProvider>
);

export default App;
