// Importar este paquete jest-fetch-mock para simular fetch
import fetchMock from 'jest-fetch-mock';
import { getUserValue, CREDENTIALS_ERRORS } from './auth.service';
import { API_URL } from '../../../core/constants';

describe('getUserValue service', () => {
    beforeEach(() => {
        fetchMock.resetMocks();
    });

    it('retorna los datos del usuario cuando las credenciales son correctas', async () => {
        // Configura fetchMock para simular una respuesta exitosa
        const user = {
            name: "Rocío",
            lastName: "Miranda Díaz",
            birthDay: "02-04-1990"
        };
        const options = { url: `${API_URL}/api/user.json`, };
        fetchMock.mockResponseOnce(JSON.stringify(user), options);
        const userValues = await getUserValue(); 
        expect(userValues.name).toBe(user.name);
        expect(userValues.lastName).toBe(user.lastName);
    });

    it('retorna error - el documento es incorrecto', async () => {
        const userValues = getUserValue();
        await expect(userValues).rejects.toThrow(CREDENTIALS_ERRORS.document)
    });

    it('retorna error - el numero de celular es incorrectro', async () => {
        const userValues = getUserValue();
        await expect(userValues).rejects.toThrow(CREDENTIALS_ERRORS.phone)
    });
});
