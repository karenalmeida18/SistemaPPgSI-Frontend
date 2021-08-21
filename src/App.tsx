import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Theme from './styles/theme';

import Routes from './routes';
import { Menu } from './components';

const App: React.FC = () => (
  <ThemeProvider theme={Theme}>
    <Router>
      <Menu />
      <Routes />
    </Router>
    <GlobalStyle />
  </ThemeProvider>
);

export default App;
