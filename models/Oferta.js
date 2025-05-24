const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Oferta = sequelize.define('Oferta', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    salario: {
      type: DataTypes.STRING
    },
    ubicacion: {
      type: DataTypes.STRING
    },
    tipoContrato: {
      type: DataTypes.ENUM(
        'tiempo_completo',
        'medio_tiempo',
        'freelance',
        'practicas'
      )
    },
    requisitos: {
      type: DataTypes.TEXT,
      get() {
        const value = this.getDataValue('requisitos');
        return value ? JSON.parse(value) : [];
      },
      set(value) {
        this.setDataValue('requisitos', JSON.stringify(value));
      }
    },
    estado: {
      type: DataTypes.ENUM('abierta', 'cerrada'),
      defaultValue: 'abierta'
    }
  });

  return Oferta;
};
