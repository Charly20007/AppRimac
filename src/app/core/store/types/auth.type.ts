import { IQuote, IUserValues } from "../../interfaces";

export interface IUserAuth extends IUserValues, IQuote {
    loggued?: boolean; 
}