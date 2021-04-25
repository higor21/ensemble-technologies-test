import { createSlice } from '@reduxjs/toolkit';
import { PostResProps } from 'shared/types';

export const DEFAULT_PAGE_NUMBER = 1;
export const DEFAULT_PAGE_SIZE = 7;

interface IState {
  redirectToList: boolean;
  posts: PostResProps[] | null;
  loading: boolean;
}

const initialState: IState = {
  redirectToList: false,
  posts: null,
  loading: false,
};

const feedSlice = createSlice({
  initialState,
  name: 'feed',
  reducers: {
    setPosts: (state, { payload }): IState => ({
      ...state,
      posts: payload,
    }),
    setLoading: (state, { payload }): IState => ({
      ...state,
      loading: payload,
    }),
    setRedirectToList: (state, { payload }): IState => ({
      ...state,
      redirectToList: payload,
    }),
    clear: (): IState => initialState,
  },
});

export const { actions, reducer } = feedSlice;
export const {
  setLoading,
  setRedirectToList,
  setPosts,
  clear,
} = actions;
export default reducer;
