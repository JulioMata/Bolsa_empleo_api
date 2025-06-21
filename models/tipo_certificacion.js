const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('tipo_certificacion', {
    id_tipo_certificacion: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    nombre_tipo: {
      type: DataTypes.STRING(100)
    }
  }, {
    tableName: 'tipo_certificacion',
    timestamps: false
  });
};
