const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('certificaciones', {
    id_certificacion: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    id_usuario: {
      type: DataTypes.INTEGER
    },
    nombre_certificacion: {
      type: DataTypes.STRING(255)
    },
    id_tipo_certificacion: {
      type: DataTypes.INTEGER
    },
    codigo_certificacion: {
      type: DataTypes.STRING(50)
    },
    institucion: {
      type: DataTypes.STRING(255)
    },
    fecha_obtencion: {
      type: DataTypes.DATE
    }
  }, {
    tableName: 'certificaciones',
    timestamps: false
  });
};
