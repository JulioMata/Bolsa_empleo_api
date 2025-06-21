const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('publicaciones', {
    id_publicacion: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    id_usuario: {
      type: DataTypes.INTEGER
    },
    titulo: {
      type: DataTypes.STRING(255)
    },
    id_tipo_publicacion: {
      type: DataTypes.INTEGER
    },
    lugar_publicacion: {
      type: DataTypes.STRING(255)
    },
    fecha_publicacion: {
      type: DataTypes.DATE
    },
    id_puesto: {
      type: DataTypes.INTEGER
    }
  }, {
    tableName: 'publicaciones',
    timestamps: false
  });
};
