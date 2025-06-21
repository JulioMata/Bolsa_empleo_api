const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('modalidad_trabajo', {
    id_modalidad: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    nombre_modalidad: {
      type: DataTypes.STRING(50)
    }
  }, {
    tableName: 'modalidad_trabajo',
    timestamps: false
  });
};
