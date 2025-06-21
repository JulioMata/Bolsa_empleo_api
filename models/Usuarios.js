const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('usuarios', {
    id_usuario: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nombres: {
      type: DataTypes.STRING(100)
    },
    apellidos: {
      type: DataTypes.STRING(100)
    },
    id_genero: {
      type: DataTypes.INTEGER
    },
    fecha_nacimiento: {
      type: DataTypes.DATE
    },
    id_tipo_documento: {
      type: DataTypes.INTEGER
    },
    numero_documento: {
      type: DataTypes.STRING(20),
      unique: true
    },
    nit: {
      type: DataTypes.STRING(20),
      unique: true,
      allowNull: true
    },
    nup: {
      type: DataTypes.STRING(20),
      unique: true,
      allowNull: true
    },
    direccion: {
      type: DataTypes.TEXT
    },
    telefono: {
      type: DataTypes.STRING(15)
    },
    correo_electronico: {
      type: DataTypes.STRING(100),
      unique: true
    },
    redes_sociales: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    password_hash: {
      type: DataTypes.STRING(255)
    }
  }, {
    tableName: 'usuarios',
    timestamps: false
  });
};
