const request = require('supertest');

const app = require('../../src/app');
const { User } = require('../../src/app/models');
const truncate = require('../utils/truncate');

// describe seria uma especie de categoria dos testes
// it é a definição do que o teste está fazendo, o que ele está checando.
// expect é uma função global do jest, que informa o é esperado do teste.

describe('Authentication', () => {
    beforeEach(async () => {
        await truncate();
    });
    
    it('should authenticate with valid credentials', async () => {
        const user = await User.create({
            name: 'Diego',
            email: 'diego@rocketseat.com.br',
            password_hash: '123123',
        })

        const response = await request(app).post('/sessions').send({ email: user.email, password: '123456'});

        expect(response.status).toBe(200);
    });
});

// describe('Register', () => {
//     it('', () => {

//     });
// });
