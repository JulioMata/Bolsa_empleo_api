const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('usuario_puesto', {
    id_aplicacion: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    id_usuario: {
      type: DataTypes.INTEGER
    },
    id_puesto: {
      type: DataTypes.INTEGER
    },
    fecha_aplicacion: {
      type: DataTypes.DATE
    },
    estado: {
      type: DataTypes.TEXT
    }
  }, {
    tableName: 'usuario_puesto',
    timestamps: false
  });
};
