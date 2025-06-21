const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('tipo_publicacion', {
    id_tipo_publicacion: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    nombre_tipo: {
      type: DataTypes.STRING(50)
    }
  }, {
    tableName: 'tipo_publicacion',
    timestamps: false
  });
};
