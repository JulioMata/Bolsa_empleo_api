const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Postulacion = sequelize.define('Postulacion', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    estado: {
      type: DataTypes.ENUM(
        'pendiente',
        'revisado',
        'aceptado',
        'rechazado'
      ),
      defaultValue: 'pendiente'
    },
    mensaje: {
      type: DataTypes.TEXT
    },
    cvUrl: {
      type: DataTypes.STRING
    }
  });

  return Postulacion;
};
