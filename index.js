const express = require('express');
const pool = require('./db'); // Importante: esto llama a tu archivo db.js
const app = express();

app.get('/', (req, res) => {
  res.send('API conectada a PostgreSQL');
});

// PRUEBA DE CONEXIÓN
pool.connect()
  .then(() => {
    console.log('Conexión exitosa a PostgreSQL - Brandon Sosa');
  })
  .catch((err) => {
    console.error('Error de conexión', err);
  });

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});