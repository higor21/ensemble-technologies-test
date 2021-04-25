import { createSlice } from '@reduxjs/toolkit';
import { PostResProps } from 'shared/types';

export const DEFAULT_PAGE_NUMBER = 1;
export const DEFAULT_PAGE_SIZE = 7;

interface IState {
  posts: PostResProps[] | null;
  loading: boolean;
}

const initialState: IState = {
  posts: null,
  loading: false,
};

const feedSlice = createSlice({
  initialState,
  name: 'feed',
  reducers: {
    setPosts: (state, { payload }): IState => ({
      ...state,
      ...payload,
    }),
    setLoading: (state, { payload }): IState => ({
      ...state,
      loading: payload,
    }),
    clear: (): IState => initialState,
  },
});

export const { actions, reducer } = feedSlice;
export const {
  setLoading,
  setPosts,
  clear,
} = actions;
export default reducer;
