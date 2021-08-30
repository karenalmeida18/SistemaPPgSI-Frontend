import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Theme from './styles/theme';

import Routes from './routes';
import { Menu } from './components';

import AppProvider from './contexts/AppContext';

const App: React.FC = () => (
  <AppProvider>
    <ThemeProvider theme={Theme}>
      <Router>
        <Menu />
        <Routes />
      </Router>
      <GlobalStyle />
    </ThemeProvider>
  </AppProvider>
);

export default App;
