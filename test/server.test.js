const request = require('supertest');
const app = require('../src/server');

describe('GET /', () => {
  it('Debe devolver status 200 y mensaje correcto', async () => {
    const res = await request(app).get('/');
    
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Roshell DevOps Hub funcionando correctamente');
  });
});