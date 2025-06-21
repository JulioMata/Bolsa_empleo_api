const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('nivel_habilidad', {
    id_nivel_habilidad: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    nombre_nivel: {
      type: DataTypes.STRING(50)
    }
  }, {
    tableName: 'nivel_habilidad',
    timestamps: false
  });
};
