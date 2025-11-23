const request = require('supertest');
const app = require('../src/app'); 

describe('Testes da API', () => {
    

    it('GET /api/materiais deve retornar status 200 e uma lista', async () => {
        const response = await request(app).get('/api/materiais');
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });


    it('GET /api/ecopontos deve retornar status 200 e uma lista', async () => {
        const response = await request(app).get('/api/ecopontos');
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });
});