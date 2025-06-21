const { Sequelize } = require('sequelize');
const path = require('path');

// Configura tu conexión a MySQL
const sequelize = new Sequelize('bolsa_empleo', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});

// Importa los modelos
const Usuario = require('./Usuarios')(sequelize);
const Empresa = require('./Empresas')(sequelize);
const Rol = require('./Roles')(sequelize);
const Experiencia = require('./experiencia_laboral')(sequelize);
const Formacion = require('./formacion_academica')(sequelize);
const Certificacion = require('./certificaciones')(sequelize);
const Habilidad = require('./habilidades')(sequelize);
const UsuarioHabilidad = require('./usuario_habilidad')(sequelize);
const Idioma = require('./idiomas')(sequelize);
const UsuarioIdioma = require('./usuario_idioma')(sequelize);
const Publicacion = require('./publicaciones')(sequelize);
const Puesto = require('./puesto_trabajo')(sequelize);
const UsuarioPuesto = require('./usuario_puesto')(sequelize);
const Mensaje = require('./mensaje')(sequelize);
const Genero = require('./genero')(sequelize);
const TipoDocumento = require('./tipo_documento')(sequelize);
const Modalidad = require('./modalidad_trabajo')(sequelize);
const NivelHabilidad = require('./nivel_habilidad')(sequelize);
const NivelIdioma = require('./nivel_idioma')(sequelize);
const TipoCertificacion = require('./tipo_certificacion')(sequelize);
const TipoPublicacion = require('./tipo_publicacion')(sequelize);
const CategoriaHabilidad = require('./categoria_habilidad')(sequelize);

// Relaciones
// Un Usuario puede tener una Empresa (1 a 1)
Usuario.hasOne(Empresa, { foreignKey: 'id_usuario' });
Empresa.belongsTo(Usuario, { foreignKey: 'id_usuario' });

Usuario.hasMany(Experiencia, { foreignKey: 'id_usuario' });
Experiencia.belongsTo(Usuario, { foreignKey: 'id_usuario' });

Usuario.hasMany(Formacion, { foreignKey: 'id_usuario' });
Formacion.belongsTo(Usuario, { foreignKey: 'id_usuario' });

Usuario.hasMany(Certificacion, { foreignKey: 'id_usuario' });
Certificacion.belongsTo(Usuario, { foreignKey: 'id_usuario' });

Usuario.belongsToMany(Habilidad, {
  through: UsuarioHabilidad,
  foreignKey: 'id_usuario'
});
Habilidad.belongsToMany(Usuario, {
  through: UsuarioHabilidad,
  foreignKey: 'id_habilidad'
});

// Relaciones: idiomas
Usuario.belongsToMany(Idioma, {
  through: UsuarioIdioma,
  foreignKey: 'id_usuario'
});
Idioma.belongsToMany(Usuario, {
  through: UsuarioIdioma,
  foreignKey: 'id_idioma'
});
// Relaciones con puestos
Empresa.hasMany(Puesto, { foreignKey: 'id_empresa' });
Puesto.belongsTo(Empresa, { foreignKey: 'id_empresa' });

Usuario.belongsToMany(Puesto, {
  through: UsuarioPuesto,
  foreignKey: 'id_usuario'
});
Puesto.belongsToMany(Usuario, {
  through: UsuarioPuesto,
  foreignKey: 'id_puesto'
});

// Publicaciones
Usuario.hasMany(Publicacion, { foreignKey: 'id_usuario' });
Publicacion.belongsTo(Usuario, { foreignKey: 'id_usuario' });

Puesto.hasMany(Publicacion, { foreignKey: 'id_puesto' });
Publicacion.belongsTo(Puesto, { foreignKey: 'id_puesto' });

// Mensajes
Usuario.hasMany(Mensaje, { foreignKey: 'id_usuario' });
Mensaje.belongsTo(Usuario, { foreignKey: 'id_usuario' });

Empresa.hasMany(Mensaje, { foreignKey: 'id_empresa' });
Mensaje.belongsTo(Empresa, { foreignKey: 'id_empresa' });

Puesto.hasMany(Mensaje, { foreignKey: 'id_puesto' });
Mensaje.belongsTo(Puesto, { foreignKey: 'id_puesto' });
// Puedes agregar otras relaciones según las tablas:
// roles -> rol_usuario -> usuarios

module.exports = {
  sequelize,
  Usuario,
  Empresa,
  Rol,
  Experiencia,
  Formacion,
  Certificacion,
  Habilidad,
  UsuarioHabilidad,
  Idioma,
  UsuarioIdioma,
  Publicacion,
  Puesto,
  UsuarioPuesto,
  Mensaje,
  Genero,
  TipoDocumento,
  Modalidad,
  NivelHabilidad,
  NivelIdioma,
  TipoCertificacion,
  TipoPublicacion,
  CategoriaHabilidad
};
