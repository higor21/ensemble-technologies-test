import api from "config/api";
import { PostProps, FeedProps } from "shared/types";

export const getPosts = (
  startSeq: number,
  limit: number,
  order: string
): Promise<FeedProps> => {
  return api.get(`feed?startSeq=${startSeq}&limit=${limit}&order=${order}`);
};

export const addPost = (body: PostProps): Promise<{ seq: number }> =>
  api.post("feed", body);
