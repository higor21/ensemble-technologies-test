import { createSlice } from '@reduxjs/toolkit';

interface IState {
  username: string;
  authToken: string | null;
  loading: boolean;
}

const initialState: IState = {
  username: "", 
  authToken: null,
  loading: false,
};

const authSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {
    setLoading: (state, { payload }): IState => ({
      ...state,
      loading: payload,
    }),
    setAuthToken: (state, { payload }): IState => ({
      ...state,
      authToken: payload,
    }),
    setUsername: (state, { payload }): IState => ({
      ...state,
      username: payload,
    }),
    clear: (): IState => initialState,
  },
});

export const { actions, reducer } = authSlice;
export const {
  setLoading,
  setAuthToken,
  setUsername,
  clear,
} = actions;
export default reducer;
