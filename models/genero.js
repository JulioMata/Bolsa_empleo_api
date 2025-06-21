const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('genero', {
    id_genero: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    nombre_genero: {
      type: DataTypes.STRING(50)
    }
  }, {
    tableName: 'genero',
    timestamps: false
  });
};
