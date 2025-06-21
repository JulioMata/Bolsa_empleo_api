const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('empresas', {
    id_empresa: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      unique: true
    },
    nombre_empresa: {
      type: DataTypes.STRING(255)
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ubicacion: {
      type: DataTypes.TEXT
    },
    sitio_web: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    telefono_empresa: {
      type: DataTypes.STRING(15)
    },
    contacto: {
      type: DataTypes.STRING(100)
    }
  }, {
    tableName: 'empresas',
    timestamps: false
  });
};
