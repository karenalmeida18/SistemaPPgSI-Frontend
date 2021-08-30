import { TOKEN_ADMIN, TOKEN_ADVISOR, TOKEN_STUDENT } from '../services/auth';

interface UserTokenParam {
    token: string,
    user: {
      name: string,
      user_type: keyof typeof tokenKeyByType,
      usp_code: string,
    },
}

export const tokenKeyByType = {
  student: TOKEN_STUDENT,
  advisor: TOKEN_ADVISOR,
  ccp: TOKEN_ADMIN,
};

export const setUserToken = ({ user, token }: UserTokenParam) => {
  const { user_type: userType } = user || {};
  const tokenKey = tokenKeyByType[userType] || null;
  if (tokenKey) {
    localStorage.setItem(tokenKey, token);
    localStorage.setItem('user', JSON.stringify(user));
  }
};
