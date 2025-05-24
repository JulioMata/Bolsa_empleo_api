const { Usuario } = require('../models');
const { generarToken } = require('../utils/auth');

exports.registro = async (req, res) => {
  try {
    const { nombre, email, password, tipo } = req.body;

    // Validar que el email no exista
    const usuarioExistente = await Usuario.findOne({ where: { email } });
    if (usuarioExistente) {
      return res.status(400).json({
        error: 'El email ya está registrado'
      });
    }

    // Crear usuario
    const usuario = await Usuario.create({
      nombre,
      email,
      password,
      tipo
    });

    // Generar token
    const token = usuario.generarToken();

    // No enviar la contraseña
    usuario.password = undefined;

    res.status(201).json({
      usuario,
      token
    });
  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1) Verificar si el usuario existe
    const usuario = await Usuario.findOne({ where: { email } });
    if (!usuario) {
      return res.status(401).json({
        error: 'Credenciales inválidas'
      });
    }

    // 2) Verificar contraseña
    const esValido = await usuario.validarPassword(password);
    if (!esValido) {
      return res.status(401).json({
        error: 'Credenciales inválidas'
      });
    }

    // 3) Generar token
    const token = usuario.generarToken();

    // 4) Enviar respuesta
    usuario.password = undefined;

    res.json({
      usuario,
      token
    });
  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
};

exports.getMe = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.usuario.id, {
      attributes: { exclude: ['password'] }
    });
    res.json(usuario);
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};