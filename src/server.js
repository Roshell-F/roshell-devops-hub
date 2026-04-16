const express = require('express');
const path = require('path');
const app = express();

let requests = 0;

function getRandom(min, max) {
  return (Math.random() * (max - min) + min).toFixed(2);
}

// ✅ PRIMERO define la API
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

// ✅ DESPUÉS los archivos estáticos
app.use(express.static(path.join(__dirname, '../public')));

// ✅ MUY IMPORTANTE: ruta fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
  });
}

module.exports = app;