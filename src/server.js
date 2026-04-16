const express = require('express');
const app = express();

// Ruta principal
app.get('/', (req, res) => {
  res.json({
    message: 'Roshell DevOps Hub funcionando correctamente',
    status: 'OK'
  });
});

module.exports = app;

// Solo ejecuta el servidor si no está en test
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
  });
}