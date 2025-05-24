const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Empresa = sequelize.define('Empresa', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descripcion: {
      type: DataTypes.TEXT
    },
    industria: {
      type: DataTypes.STRING
    },
    sitioWeb: {
      type: DataTypes.STRING
    },
    tamano: {
      type: DataTypes.STRING
    },
    ubicacion: {
      type: DataTypes.STRING
    }
  });

  return Empresa;
};
