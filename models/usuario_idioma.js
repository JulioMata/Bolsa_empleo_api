const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('usuario_idioma', {
    id_usuario_idioma: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    id_usuario: {
      type: DataTypes.INTEGER
    },
    id_idioma: {
      type: DataTypes.INTEGER
    },
    id_nivel_lectura: {
      type: DataTypes.INTEGER
    },
    id_nivel_escritura: {
      type: DataTypes.INTEGER
    },
    id_nivel_conversacion: {
      type: DataTypes.INTEGER
    }
  }, {
    tableName: 'usuario_idioma',
    timestamps: false
  });
};
