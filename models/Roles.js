const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('roles', {
    id_rol: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nombre_rol: {
      type: DataTypes.STRING(50)
    }
  }, {
    tableName: 'roles',
    timestamps: false
  });
};
