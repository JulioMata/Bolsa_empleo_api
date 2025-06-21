const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('mensaje', {
    id_mensaje: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    id_empresa: {
      type: DataTypes.INTEGER
    },
    id_usuario: {
      type: DataTypes.INTEGER
    },
    id_puesto: {
      type: DataTypes.INTEGER
    },
    contenido: {
      type: DataTypes.TEXT
    },
    fecha_envio: {
      type: DataTypes.DATE
    }
  }, {
    tableName: 'mensaje',
    timestamps: false
  });
};
