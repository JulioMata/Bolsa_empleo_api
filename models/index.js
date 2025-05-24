const { Sequelize } = require('sequelize');
const sequelize = require('../config/db');
const Usuario = require('./Usuario')(sequelize);
const Empresa = require('./Empresa')(sequelize);
const Oferta = require('./Oferta')(sequelize);
const Postulacion = require('./Postulacion')(sequelize);
const Categoria = require('./Categoria')(sequelize);

// Inicializar modelos
Usuario.initModel(sequelize);
Empresa.initModel(sequelize);
Oferta.initModel(sequelize);
Postulacion.initModel(sequelize);
Categoria.initModel(sequelize);

// Establecer relaciones
Usuario.hasOne(Empresa, { foreignKey: 'usuarioId' });
Empresa.belongsTo(Usuario, { foreignKey: 'usuarioId' });

Empresa.hasMany(Oferta, { foreignKey: 'empresaId' });
Oferta.belongsTo(Empresa, { foreignKey: 'empresaId' });

Categoria.hasMany(Oferta, { foreignKey: 'categoriaId' });
Oferta.belongsTo(Categoria, { foreignKey: 'categoriaId' });

Usuario.hasMany(Postulacion, { foreignKey: 'candidatoId' });
Postulacion.belongsTo(Usuario, { foreignKey: 'candidatoId' });

Oferta.hasMany(Postulacion, { foreignKey: 'ofertaId' });
Postulacion.belongsTo(Oferta, { foreignKey: 'ofertaId' });

module.exports = {
  sequelize,
  Usuario,
  Empresa,
  Oferta,
  Postulacion,
  Categoria
};
