const request = require('supertest');
const app = require('./app');  

describe('GET /hello', () => {
    it('should return "Hello, World!" when no name is provided', async () => {
        const res = await request(app).get('/hello');
        expect(res.statusCode).toEqual(200);
        expect(res.body.greeting).toEqual('Hello, World!');
    });

    it('should return a personalized greeting when name is provided', async () => {
        const res = await request(app).get('/hello?name=Roaa');
        expect(res.statusCode).toEqual(200);
        expect(res.body.greeting).toEqual('Hello, Roaa');
    });
});

describe('GET /info', () => {
    it('should return server info and headers', async () => {
        const res = await request(app).get('/info');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('time');
        expect(res.body).toHaveProperty('client_address');
        expect(res.body).toHaveProperty('host_name');
        expect(res.body).toHaveProperty('headers');
    });
});
