
const express = require('express');
const dotenv = require('dotenv');
const { Pool } = require('pg');

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

pool.connect()
  .then(() => console.log('✅ Conectado a la base de datos PostgreSQL'))
  .catch(err => console.error('❌ Error de conexión a la base de datos', err));

app.get('/', (req, res) => {
  res.send('ZB Control API está funcionando 🚀');
});

app.listen(port, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${port}`);
});
