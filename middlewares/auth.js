const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/auth');
const { Usuario } = require('../models');

exports.auth = async (req, res, next) => {
  try {
    // 1) Obtener token y verificar que existe
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      return res.status(401).json({
        error: 'Por favor inicia sesión para acceder'
      });
    }

    // 2) Verificar token
    const decoded = jwt.verify(token, jwtSecret);

    // 3) Verificar que el usuario aún existe
    const currentUser = await Usuario.findByPk(decoded.id);
    if (!currentUser) {
      return res.status(401).json({
        error: 'El usuario ya no existe'
      });
    }

    // 4) Acceso concedido
    req.usuario = currentUser;
    next();
  } catch (error) {
    res.status(401).json({
      error: 'Por favor inicia sesión para acceder'
    });
  }
};

exports.esEmpresa = (req, res, next) => {
  if (req.usuario.tipo !== 'empresa') {
    return res.status(403).json({
      error: 'Acceso denegado. Solo para empresas'
    });
  }
  next();
};

exports.esCandidato = (req, res, next) => {
  if (req.usuario.tipo !== 'candidato') {
    return res.status(403).json({
      error: 'Acceso denegado. Solo para candidatos'
    });
  }
  next();
};
