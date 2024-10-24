import { IUserAuth } from '../types';
import authReducer, { setAuth, setAuthClose } from './auth.reducer';

describe('authReducer', () => { 
    it('verificando que el estado se setee correctamente', () => {
        const userAuth = {
            loggued: true,
            name: 'John Doe',
            numberDocument: '1234567890',
            numberCellPhone: '123-456-7890',
            lastName: 'Doe',
            birthDay: '01-01-1990',
        };

        const newState = authReducer({ loggued: false, name: "" } as IUserAuth, setAuth(userAuth));
        expect(newState).toEqual(userAuth);
    });
    it('limpiando estado de usuario: [loggued]', () => {
        const state: IUserAuth = {
            loggued: true,
            name: 'John Doe',
            numberDocument: '1234567890',
            numberCellPhone: '123-456-7890',
            lastName: 'Doe',
            birthDay: '01-01-1990',
        };
        const newState = authReducer(state, setAuthClose());
        expect(newState.loggued).toEqual(false);
    });
});
