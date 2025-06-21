const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('usuario_habilidad', {
    id_usuario_habilidad: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    id_usuario: {
      type: DataTypes.INTEGER
    },
    id_habilidad: {
      type: DataTypes.INTEGER
    },
    id_nivel_habilidad: {
      type: DataTypes.INTEGER
    }
  }, {
    tableName: 'usuario_habilidad',
    timestamps: false
  });
};
