export const TOKEN_ADMIN = '@ppgsi/admin';
export const TOKEN_STUDENT = '@ppgsi/student';
export const TOKEN_ADVISOR = '@ppgsi/advisor';

export const isAdminAuthenticated = () => localStorage.getItem(TOKEN_ADMIN) !== null;
export const isStudentAuthenticated = () => localStorage.getItem(TOKEN_STUDENT) !== null;
export const isAdvisorAuthenticated = () => localStorage.getItem(TOKEN_ADVISOR) !== null;

export const getToken = () => {
  if (isAdminAuthenticated()) return localStorage.getItem(TOKEN_ADMIN);
  if (isStudentAuthenticated()) return localStorage.getItem(TOKEN_STUDENT);
  if (isAdvisorAuthenticated()) return localStorage.getItem(TOKEN_ADVISOR);
  return false;
};
