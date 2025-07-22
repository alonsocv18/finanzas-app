const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const db = require('../../config/database')

// Controlador para el registro de usuarios
const register = async (req, res) => {
  try {
    const { name, email, password } = req.body

    // Validaciones del servidor
    if (!name || !email || !password) {
      return res.status(400).json({
        message: 'Todos los campos son requeridos',
      })
    }

    if (password.length < 6) {
      return res.status(400).json({
        message: 'La contraseña debe tener al menos 6 caracteres',
      })
    }

    // Verificar si el email ya existe
    const existingUser = await User.findByEmail(email)
    if (existingUser) {
      return res.status(400).json({
        message: 'Este correo electrónico ya está registrado',
      })
    }

    // Encriptar la contraseña
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Crear nuevo usuario
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    })

    // Generar token JWT
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '24h',
    })

    // Responder exitosamente
    res.status(201).json({
      message: 'Usuario registrado exitosamente',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    })
  } catch (error) {
    console.error('Error detallado en registro:', error.message, error.stack)
    res.status(500).json({
      message: `Error al registrar el usuario: ${error.message}`,
    })
  }
}

// Controlador para el login de usuarios
const login = async (req, res) => {
  try {
    const { email, password } = req.body

    // Validaciones
    if (!email || !password) {
      return res.status(400).json({
        message: 'Email y contraseña son requeridos',
      })
    }

    // Buscar usuario
    const user = await User.findByEmail(email)
    if (!user) {
      return res.status(401).json({
        message: 'Credenciales inválidas',
      })
    }

    // Verificar contraseña
    const validPassword = await bcrypt.compare(password, user.password)
    if (!validPassword) {
      return res.status(401).json({
        message: 'Credenciales inválidas',
      })
    }

    // Generar token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '24h',
    })

    // Responder exitosamente
    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    })
  } catch (error) {
    console.error('Error en login:', error)
    res.status(500).json({
      message: 'Error al iniciar sesión',
    })
  }
}

module.exports = {
  register,
  login,
}
