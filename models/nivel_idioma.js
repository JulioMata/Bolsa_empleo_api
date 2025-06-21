const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('nivel_idioma', {
    id_nivel_idioma: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    descripcion: {
      type: DataTypes.STRING(50)
    }
  }, {
    tableName: 'nivel_idioma',
    timestamps: false
  });
};
