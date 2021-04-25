import api from 'config/api';

export const authLogIn = (
  username: string,
  password: string
) => {
  return api.get(`auth`);
};