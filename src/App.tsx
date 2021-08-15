import React from 'react';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';

const App: React.FC = () => (
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
  </ThemeProvider>
)

export default App
