import { AppDispatch } from "store/store";
import { actions as authActions } from "./slice";
import { authLogIn } from "services/auth";
import { toast } from "react-toastify";

const { setLoading, setAuthToken } = authActions;

const logInThunk = (username: string, password: string) => async (
  dispatch: AppDispatch
) => {
  try {
    dispatch(setLoading(true));
    const { authToken = null } = await authLogIn({username, password});
    dispatch(setAuthToken(authToken));
    dispatch(setLoading(false));
    toast.success(`Welcome to MSN Feed, ${username}!`);
  } catch (res) {}
};

export { logInThunk as logIn };
