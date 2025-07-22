const { Pool } = require('pg')

const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'financeup',
  password: process.env.DB_PASSWORD || 'postgres',
  port: process.env.DB_PORT || 5432,
})

// Verificar la conexión
pool
  .connect()
  .then((client) => {
    console.log('Conexión a la base de datos establecida correctamente')
    client.release()
  })
  .catch((err) => {
    console.error('Error al conectar con la base de datos:', err.message)
  })

module.exports = {
  query: (text, params) => pool.query(text, params),
  pool,
}
