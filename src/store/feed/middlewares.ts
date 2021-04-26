import { AppDispatch } from "store/store";
import { actions as feedActions, DEFAULT_LIMIT } from "./slice";
import { getPosts, addPost } from "services/feed";
import { PostProps } from "shared/types";
import { toast } from "react-toastify";

const { setLoading, setPosts, setSendBtnLoading } = feedActions;

const getPostsThunk = (
  startSeq: number = 1,
  limit: number = DEFAULT_LIMIT,
  order: string = "asc"
) => async (dispatch: AppDispatch) => {
  try {
    const { posts, count } = await getPosts(startSeq, limit, order);
    dispatch(setLoading(false));
    dispatch(setPosts({posts, count}));
  } catch (res) {}
};

const addPostThunk = (post: PostProps) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setSendBtnLoading(true));
    const { seq } = await addPost(post);
    toast.success(
      `The message was successfully registered. Its seq is ${seq}!`
    );
    dispatch(setSendBtnLoading(false));
  } catch (res) {}
};

export { getPostsThunk as getPosts, addPostThunk as addPost };
