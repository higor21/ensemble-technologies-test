import { createSlice } from '@reduxjs/toolkit';
import { PostResProps } from 'shared/types';

export const DEFAULT_LIMIT = 100;

interface IState {
  count: number;
  posts: PostResProps[] | null;
  loading: boolean;    
  sendBtnLoading: boolean;    
}

const initialState: IState = {
  count: 0,
  posts: null,
  loading: false,
  sendBtnLoading: false,
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
    setSendBtnLoading: (state, { payload }): IState => ({
      ...state,
      sendBtnLoading: payload,
    }),
    clear: (): IState => initialState,
  },
});

export const { actions, reducer } = feedSlice;
export const {
  setLoading,
  setSendBtnLoading,
  setPosts,
  clear,
} = actions;
export default reducer;
