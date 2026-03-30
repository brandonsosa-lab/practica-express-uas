const express = require('express');
const app = express();
const port = 3000;

// Ruta base
app.get('/', (req, res) => {
  res.send('API de Brandon Sosa funcionando');
});

// NUEVO: Endpoint /usuario
app.get('/usuario', (req, res) => {
  const usuario = {
    id: 1,
    nombre: 'Brandon Everardo Escamilla Sosa',
    rol: 'Estudiante de Informática UAS',
    semestre: '6to'
  };

  // Regresa el objeto en formato JSON
  res.json(usuario);
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});