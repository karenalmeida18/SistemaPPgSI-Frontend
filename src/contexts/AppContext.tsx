import React from 'react';

import { AuthProvider } from './AuthContext';

/* interface AppContextData {

}

interface AppContextProps{
  children: ReactNode;
} */

// export const AppContext = createContext({} as AppContextData);

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    {children}
  </AuthProvider>
);

export default AppProvider;
