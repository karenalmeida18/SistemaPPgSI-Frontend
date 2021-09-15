import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './styles/global';
import ThemeMain from './styles/themeMain';

import Routes from './routes';
import { AppBar } from './components';

import AppProvider from './contexts/AppContext';

const App: React.FC = () => (
  <AppProvider>
    <ThemeMain>
      <Router>
        <AppBar />
        <Routes />
      </Router>
      <GlobalStyle />
    </ThemeMain>
  </AppProvider>
);

export default App;
