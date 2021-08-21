import { createContext, ReactNode } from 'react';

interface AppContextData {

}

interface AppContextProps{
  children: ReactNode;
}

export const AppContext = createContext({} as AppContextData);

// eslint-disable-next-line arrow-body-style
export const AppProvider = ({ children }: AppContextProps) => {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <AppContext.Provider value={{}}>
      {children}
    </AppContext.Provider>
  );
};
