import { createContext, ReactNode, useState } from 'react';
import { setUserToken, tokenKeyByType } from '../utils/auth';

interface DataState {
  user: {
    id: number,
    name: string,
    user_type: keyof typeof tokenKeyByType,
    usp_code: string,
    course : string,
    advisor : string,
    email : string,
    lattes : string,
    lattes_date : string,
  },
  token: string
}

interface SignInParams {
  user: {
    id: number,
    name: string,
    user_type: keyof typeof tokenKeyByType,
    usp_code: string,
    course : string,
    advisor : string,
    email : string,
    lattes : string,
    lattes_date : string,
  },
  token: string
}

interface AuthContextData {
  userLogged: {
    id: number,
    name: string,
    user_type: keyof typeof tokenKeyByType,
    usp_code: string,
    course : string,
    advisor : string,
    email : string,
    lattes : string,
    lattes_date : string,
  },
  signIn(params: SignInParams): void,
  signOut(): void,
  updateUser(user: User): void
}

interface AuthContextProps{
  children: ReactNode;
}

interface User {
  id: number,
  name: string,
  user_type: keyof typeof tokenKeyByType,
  usp_code: string,
  course : string,
  advisor : string,
  email : string,
  lattes : string,
  lattes_date : string
}

export const AuthContext = createContext({} as AuthContextData);

export const AuthProvider = ({ children }: AuthContextProps) => {
  const [data, setData] = useState<DataState>(() => {
    const userString = localStorage.getItem('user');
    const user = userString && JSON.parse(userString);
    const { user_type } = user || {};
    const token = localStorage.getItem(tokenKeyByType[user_type as keyof typeof tokenKeyByType]);

    if (token) return { user, token };

    return {} as DataState;
  });

  const signIn = ({ user, token }: SignInParams) => {
    // function to save user and token in local storage
    setUserToken({ user, token });
    // update state to save user logged in context provider
    setData({ user, token });
  };

  const updateUser = (user: User) => {
    localStorage.setItem('user', JSON.stringify(user));
    const { token } = data;
    setData({ user, token });
  };

  const signOut = () => {
    localStorage.removeItem('user');
    localStorage.removeItem(tokenKeyByType[data.user.user_type]);
    setData({} as DataState);
  };

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <AuthContext.Provider value={{
      userLogged: data.user, signIn, signOut, updateUser,
    }}
    >
      {children}
    </AuthContext.Provider>
  );
};
