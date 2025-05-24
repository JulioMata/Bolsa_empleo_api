const { DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');
const { jwtSecret, jwtExpiresIn } = require('../config/auth');
const jwt = require('jsonwebtoken');

module.exports = (sequelize) => {
  const Usuario = sequelize.define('Usuario', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tipo: {
      type: DataTypes.ENUM('candidato', 'empresa'),
      allowNull: false
    },
    habilidades: {
      type: DataTypes.TEXT,
      get() {
        const value = this.getDataValue('habilidades');
        return value ? JSON.parse(value) : [];
      },
      set(value) {
        this.setDataValue('habilidades', JSON.stringify(value));
      }
    },
    experiencia: {
      type: DataTypes.TEXT
    }
  }, {
    hooks: {
      beforeSave: async (usuario) => {
        if (usuario.changed('password')) {
          usuario.password = await bcrypt.hash(usuario.password, 10);
        }
      }
    }
  });

  // Método para comparar contraseñas
  Usuario.prototype.validarPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
  };

  // Método para generar JWT
  Usuario.prototype.generarToken = function() {
    return jwt.sign({ id: this.id }, jwtSecret, {
      expiresIn: jwtExpiresIn
    });
  };

  return Usuario;
};
