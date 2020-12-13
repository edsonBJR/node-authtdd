const request = require('supertest');

const app = require('../../src/app');
const { User } = require('../../src/app/models');
const bcrypt = require('bcryptjs');
const truncate = require('../utils/truncate');

describe('Authentication', () => {
    beforeEach(async () => {
        await truncate();
    });
    
    it('should encrypt user password', async () => {
        const user =  await User.create({ name: 'Diego', email: 'diego@rocketseat.com.br', password: '123456'});

        // const hash = await bcrypt.hash('123456', 8);

        const compareHash = await bcrypt.compare('123456', user.password_hash);
        expect(compareHash).toBe(true);
    });
});

