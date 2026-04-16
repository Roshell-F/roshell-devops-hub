const request = require('supertest');
const app = require('../src/server');

describe('GET /api/status', () => {
  it('Debe devolver información del sistema', async () => {
    const res = await request(app).get('/api/status');

    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('Running');
    expect(res.body).toHaveProperty('cpu');
    expect(res.body).toHaveProperty('memory');
    expect(res.body).toHaveProperty('requests');
  });
});