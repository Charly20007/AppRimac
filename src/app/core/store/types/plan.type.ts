import { TCardSelect } from "../../../modules/dashboard/types";
import { IPlan } from "../../interfaces";

export interface IPlanValues extends IPlan {
    typeCard: TCardSelect;
}