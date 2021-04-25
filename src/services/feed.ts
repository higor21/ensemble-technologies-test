import api from 'config/api';
import { PostProps } from 'shared/types';

export const getPosts = (
  startSeq: number,
  limit: number,
  order: string
) => {
  return api.get(`feed?____`);
};

export const addPost = (body: PostProps) => api.post('feed', body);
