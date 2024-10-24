export interface IQuote {
    numberDocument: string;
    numberCellPhone: string;
}

export interface IFormAuth extends IQuote {
    isPrivacyPolicy: boolean;
    isCommunicationPolicy: boolean;
}


export interface IUserValues {
    name: string;
    lastName: string;
    birthDay: string;
}
