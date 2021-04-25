import api from 'config/api';
import { LogInProps } from 'shared/types';

export const authLogIn = (
  body: LogInProps
): Promise<{ authToken: string }> => {
  return api.post(`auth`, body);
};