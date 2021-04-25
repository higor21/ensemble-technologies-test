import { AppDispatch } from "store/store";
import { actions as feedActions } from "./slice";
import { getPosts } from "services/feed";
import { PostProps } from "shared/types";
import { toast } from "react-toastify";

const { setLoading, setPosts } = feedActions;

const getPostsThunk = (
  startSeq: number = 1,
  limit: number = 5,
  order: string = "asc"
) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading(true));
    const { posts } = await getPosts(startSeq, limit, order);
    dispatch(setPosts(posts))
    dispatch(setLoading(false));
  } catch (res) {}
};

const addPostThunk = (post: PostProps) => async (dispatch: AppDispatch) => {
  try {
  } catch (res) {}
};

export { getPostsThunk as getPosts, addPostThunk as addPost };
