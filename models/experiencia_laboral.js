const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('experiencia_laboral', {
    id_experiencia: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    id_usuario: {
      type: DataTypes.INTEGER
    },
    puesto: {
      type: DataTypes.STRING(100)
    },
    empresa: {
      type: DataTypes.STRING(255)
    },
    periodo_inicio: {
      type: DataTypes.DATE
    },
    periodo_fin: {
      type: DataTypes.DATE,
      allowNull: true
    },
    funciones: {
      type: DataTypes.TEXT
    },
    contacto_empresa: {
      type: DataTypes.STRING(100)
    }
  }, {
    tableName: 'experiencia_laboral',
    timestamps: false
  });
};
