const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('bolsa_empleo', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});

// Requiere los modelos generados
const Usuario = require('./models/Usuarios')(sequelize);
const Empresa = require('./models/Empresas')(sequelize);

// Puedes definir relaciones si no fueron mapeadas
Usuario.hasOne(Empresa, { foreignKey: 'id_usuario' });

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión a MySQL exitosa.');

    const datos = await Usuario.findAll({ include: Empresa });
    console.log(JSON.stringify(datos, null, 2));
  } catch (error) {
    console.error('Error al conectar a la BD:', error);
  }
})();
