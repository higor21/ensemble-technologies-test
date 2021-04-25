import { createSlice } from '@reduxjs/toolkit';

interface IState {
  authToken: string | null;
  loading: boolean;
}

const initialState: IState = {
  authToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoidGVzdDEiLCJpYXQiOjE2MTkzNjA5OTksImV4cCI6MTYxOTM2NDU5OX0.rKEAuKaaHTrg5k9ouQ4kZW7iL4vfrTjHlGoYqanVVJA",
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
