const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('tipo_documento', {
    id_tipo_documento: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    nombre_documento: {
      type: DataTypes.STRING(50)
    }
  }, {
    tableName: 'tipo_documento',
    timestamps: false
  });
};
