import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useDispatch } from "react-redux";
import { setAuth, setAuthClose } from "../store/reducers";
import { IUserAuth } from "../store/types";

export const useUserAuthStore = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth);

  const setUser = (user: IUserAuth) => dispatch(setAuth({ ...user }));

  const setRemovUser = () => dispatch(setAuthClose());

  return { user, setUser, setRemovUser };
};
