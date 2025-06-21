const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('habilidades', {
    id_habilidad: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nombre_habilidad: {
      type: DataTypes.STRING(100)
    },
    id_categoria_habilidad: {
      type: DataTypes.INTEGER
    }
  }, {
    tableName: 'habilidades',
    timestamps: false
  });
};
