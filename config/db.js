const { Sequelize } = require('sequelize');
require('dotenv').config();

// Configuración básica sin autenticación inmediata
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false
  }
);

// Función para probar conexión (se llamará manualmente)
const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexión a MySQL establecida');
    return true;
  } catch (error) {
    console.error('❌ Error de conexión:', error);
    return false;
  }
};

module.exports = {
  sequelize,
  testConnection
};