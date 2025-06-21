const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('categoria_habilidad', {
    id_categoria_habilidad: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    nombre_categoria: {
      type: DataTypes.STRING(100)
    }
  }, {
    tableName: 'categoria_habilidad',
    timestamps: false
  });
};
