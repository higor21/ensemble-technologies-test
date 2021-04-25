import { createSlice } from '@reduxjs/toolkit';

interface IState {
  authToken: string | null;
  loading: boolean;
}

const initialState: IState = {
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
    clear: (): IState => initialState,
  },
});

export const { actions, reducer } = authSlice;
export const {
  setLoading,
  setAuthToken,
  clear,
} = actions;
export default reducer;
