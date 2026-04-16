const request = require('supertest');
const app = require('../src/server');
app.get('/api/status', (req, res) => {
  requests++;

  res.json({
    system: "Roshell DevOps Control Panel",
    status: "Running",
    uptime: process.uptime(),
    requests: requests,
    cpu: getRandom(20, 80),
    memory: getRandom(30, 90),
    time: new Date().toLocaleTimeString()
  });
});

// 👇 DESPUÉS de la API
app.use(express.static(path.join(__dirname, '../public')));
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