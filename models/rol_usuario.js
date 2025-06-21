const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('rol_usuario', {
    id_rol_usuario: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    id_usuario: {
      type: DataTypes.INTEGER
    },
    id_rol: {
      type: DataTypes.INTEGER
    }
  }, {
    tableName: 'rol_usuario',
    timestamps: false
  });
};
