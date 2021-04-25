import { AppDispatch } from "store/store";
import { actions as authActions } from "./slice";
import {} from "services/auth";

const { setLoading } = authActions;

const logInThunk = (username: string, password: string) => async (
  dispatch: AppDispatch
) => {
  try {
  } catch (res) {}
};

export { logInThunk as logIn };
