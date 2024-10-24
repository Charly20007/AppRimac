import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useDispatch } from "react-redux";
import { setPlan, setRemovePlan } from "../store/reducers";
import { IPlanValues } from "../store/types";

export const usePlanStore = () => {
  const dispatch = useDispatch();
  const plan = useSelector((state: RootState) => state.plan);

  const setNewPlan = (plan: IPlanValues) => dispatch(setPlan({ ...plan }));

  const setDeletePlan = () => dispatch(setRemovePlan());

  return { plan, setNewPlan, setDeletePlan };
};
