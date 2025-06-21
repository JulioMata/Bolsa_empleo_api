const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('idiomas', {
    id_idioma: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nombre_idioma: {
      type: DataTypes.STRING(100)
    }
  }, {
    tableName: 'idiomas',
    timestamps: false
  });
};
