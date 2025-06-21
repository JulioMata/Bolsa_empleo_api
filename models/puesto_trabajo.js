const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('puesto_trabajo', {
    id_puesto: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    id_empresa: {
      type: DataTypes.INTEGER
    },
    nombre_puesto: {
      type: DataTypes.STRING(255)
    },
    descripcion: {
      type: DataTypes.TEXT
    },
    requisitos: {
      type: DataTypes.TEXT
    },
    conocimientos_requeridos: {
      type: DataTypes.TEXT
    },
    perfil_academico: {
      type: DataTypes.TEXT
    },
    habilidades_requeridas: {
      type: DataTypes.TEXT
    },
    experiencia_requerida: {
      type: DataTypes.TEXT
    },
    rango_salarial: {
      type: DataTypes.STRING(50)
    },
    ubicacion: {
      type: DataTypes.TEXT
    },
    id_modalidad: {
      type: DataTypes.INTEGER
    }
  }, {
    tableName: 'puesto_trabajo',
    timestamps: false
  });
};
