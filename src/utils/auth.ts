import { TOKEN_ADMIN, TOKEN_ADVISOR, TOKEN_STUDENT } from '../services/auth';

type userTokenParam = {
    userType: keyof typeof tokenKeyByType;
    token: string,
}

const tokenKeyByType = {
  student: TOKEN_STUDENT,
  advisor: TOKEN_ADVISOR,
  ccp: TOKEN_ADMIN,
};

export const setUserToken = ({ userType, token }: userTokenParam) => {
  const tokenKey = tokenKeyByType[userType] || null;
  if (tokenKey) localStorage.setItem(tokenKey, token);
};
