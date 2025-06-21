const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('permisos', {
    id_permiso: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nombre_permiso: {
      type: DataTypes.STRING(100)
    }
  }, {
    tableName: 'permisos',
    timestamps: false
  });
};
