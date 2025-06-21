const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('formacion_academica', {
    id_formacion: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    id_usuario: {
      type: DataTypes.INTEGER
    },
    institucion: {
      type: DataTypes.STRING(255)
    },
    titulo_obtenido: {
      type: DataTypes.STRING(255)
    },
    periodo_inicio: {
      type: DataTypes.DATE
    },
    periodo_fin: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'formacion_academica',
    timestamps: false
  });
};
