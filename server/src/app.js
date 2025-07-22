const express = require('express')
const cors = require('cors')
require('dotenv').config()

const authRoutes = require('./api/routes/authRoutes')

const app = express()

// Middleware
app.use(cors()) // Esto permite peticiones desde el frontend
app.use(express.json()) // Para parsear JSON en el body

// Rutas
app.use('/api/auth', authRoutes)

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ message: 'Something broke!' })
})

module.exports = app
