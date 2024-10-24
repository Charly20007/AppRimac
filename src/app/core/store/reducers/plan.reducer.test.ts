import { IPlanValues } from '../types';
import planReducer, { setPlan, setRemovePlan } from './plan.reducer';

describe('planReducer', () => {
    it('verificando que el estado se setee correctamente', () => {
        const userAuth: IPlanValues = {
            typeCard: "for-me",
            name: 'Carlos',
            price: 12,
            description: [],
            age: 12
        };

        const newState = planReducer({} as IPlanValues, setPlan(userAuth));
        expect(newState.name).toEqual("Carlos");
    });
    it('limpiando estado del plan seleccionado: [loggued]', () => {
        const state: IPlanValues = {
            typeCard: "for-me",
            name: 'Plan casa',
            price: 12,
            description: [],
            age: 12
        };
        const newState = planReducer(state, setRemovePlan());
        expect(newState.name).toEqual("");
    });
});
