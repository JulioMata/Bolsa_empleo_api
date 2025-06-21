const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('permiso_rol', {
    id_permiso_rol: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    id_rol: {
      type: DataTypes.INTEGER
    },
    id_permiso: {
      type: DataTypes.INTEGER
    }
  }, {
    tableName: 'permiso_rol',
    timestamps: false
  });
};
