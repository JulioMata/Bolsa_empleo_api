const { sequelize, Usuario, Empresa, Experiencia, Formacion, Certificacion, Habilidad,
  UsuarioHabilidad, Idioma, UsuarioIdioma, Publicacion, Puesto, UsuarioPuesto,
  Mensaje, Genero, TipoDocumento, Modalidad, NivelHabilidad, NivelIdioma, 
  TipoCertificacion, TipoPublicacion,CategoriaHabilidad } = require('./models');

(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Conectado correctamente a la base de datos.');

    // Crear tablas
    await sequelize.sync({ force: true });
    console.log('🛠️ Tablas creadas automáticamente con Sequelize.');

    // Inserciones de catálogos estáticos

await Genero.bulkCreate([
  { id_genero: 1, nombre_genero: 'Masculino' },
  { id_genero: 2, nombre_genero: 'Femenino' },
  { id_genero: 3, nombre_genero: 'Otro' }
]);

await TipoDocumento.bulkCreate([
  { id_tipo_documento: 1, nombre_documento: 'DUI' },
  { id_tipo_documento: 2, nombre_documento: 'Pasaporte' },
  { id_tipo_documento: 3, nombre_documento: 'Carné de Residencia' }
]);

await Modalidad.bulkCreate([
  { id_modalidad: 1, nombre_modalidad: 'Presencial' },
  { id_modalidad: 2, nombre_modalidad: 'Remoto' },
  { id_modalidad: 3, nombre_modalidad: 'Híbrido' }
]);

await NivelHabilidad.bulkCreate([
  { id_nivel_habilidad: 1, nombre_nivel: 'Básico' },
  { id_nivel_habilidad: 2, nombre_nivel: 'Intermedio' },
  { id_nivel_habilidad: 3, nombre_nivel: 'Avanzado' }
]);

await NivelIdioma.bulkCreate([
  { id_nivel_idioma: 1, descripcion: 'Básico' },
  { id_nivel_idioma: 2, descripcion: 'Intermedio' },
  { id_nivel_idioma: 3, descripcion: 'Avanzado' },
  { id_nivel_idioma: 4, descripcion: 'Nativo' }
]);

await TipoCertificacion.bulkCreate([
  { id_tipo_certificacion: 1, nombre_tipo: 'Técnica' },
  { id_tipo_certificacion: 2, nombre_tipo: 'Universitaria' },
  { id_tipo_certificacion: 3, nombre_tipo: 'Internacional' }
]);

await TipoPublicacion.bulkCreate([
  { id_tipo_publicacion: 1, nombre_tipo: 'Oferta' },
  { id_tipo_publicacion: 2, nombre_tipo: 'Recomendación' }
]);

await CategoriaHabilidad.bulkCreate([
  { id_categoria_habilidad: 1, nombre_categoria: 'Tecnología' },
  { id_categoria_habilidad: 2, nombre_categoria: 'Comunicación' },
  { id_categoria_habilidad: 3, nombre_categoria: 'Gestión' }
]);

console.log('✅ Catálogos estáticos insertados correctamente.');


    // Insertar usuario
    const user = await Usuario.create({
      nombres: 'Carlos',
      apellidos: 'Hernández',
      id_genero: 1,
      fecha_nacimiento: '1995-06-15',
      id_tipo_documento: 1,
      numero_documento: '123456789',
      nit: '0614-123456-101-3',
      nup: '1234567890',
      direccion: 'San Salvador',
      telefono: '7777-7777',
      correo_electronico: 'carlos@example.com',
      password_hash: '123456'
    });

    // Insertar empresa
    const empresa = await Empresa.create({
      id_usuario: user.id_usuario,
      nombre_empresa: 'Tech Solutions',
      descripcion: 'Empresa de desarrollo web',
      ubicacion: 'San Salvador',
      telefono_empresa: '2222-3333',
      contacto: 'info@tech.com'
    });

    // Insertar experiencia laboral
    await Experiencia.create({
      id_usuario: user.id_usuario,
      puesto: 'Desarrollador Web',
      empresa: 'Empresa X',
      periodo_inicio: '2021-01-01',
      funciones: 'Desarrollar aplicaciones fullstack',
      contacto_empresa: 'rrhh@empresax.com'
    });

    // Insertar formación académica
    await Formacion.create({
      id_usuario: user.id_usuario,
      institucion: 'Universidad Nacional',
      titulo_obtenido: 'Ingeniería en Sistemas',
      periodo_inicio: '2015-01-01',
      periodo_fin: '2020-01-01'
    });

    // Insertar certificación
    await Certificacion.create({
      id_usuario: user.id_usuario,
      nombre_certificacion: 'Scrum Master',
      id_tipo_certificacion: 1, // Asume que esta clave existe o ignórala si es opcional
      codigo_certificacion: 'SM-001',
      institucion: 'Scrum.org',
      fecha_obtencion: '2022-05-10'
    });
    // Insertar habilidad y relacionarla con usuario
const habilidad = await Habilidad.create({
  nombre_habilidad: 'JavaScript',
  id_categoria_habilidad: 1
});
await UsuarioHabilidad.create({
  id_usuario: user.id_usuario,
  id_habilidad: habilidad.id_habilidad,
  id_nivel_habilidad: 2
});

// Insertar idioma y relacionarlo con usuario
const idioma = await Idioma.create({
  nombre_idioma: 'Inglés'
});
await UsuarioIdioma.create({
  id_usuario: user.id_usuario,
  id_idioma: idioma.id_idioma,
  id_nivel_lectura: 3,
  id_nivel_escritura: 3,
  id_nivel_conversacion: 2
});
// Insertar puesto de trabajo
const puesto = await Puesto.create({
  id_empresa: empresa.id_empresa,
  nombre_puesto: 'Frontend Developer',
  descripcion: 'Desarrollo de interfaces en React.js',
  requisitos: 'Experiencia previa',
  conocimientos_requeridos: 'React, HTML, CSS, JavaScript',
  perfil_academico: 'Graduado en Ingeniería en Sistemas',
  habilidades_requeridas: 'Trabajo en equipo, responsabilidad',
  experiencia_requerida: '2 años en frontend',
  rango_salarial: '$1200 - $1500',
  ubicacion: 'San Salvador',
  id_modalidad: 1 // Puedes insertar NULL si aún no defines modalidades
});

// Insertar publicación
await Publicacion.create({
  id_usuario: user.id_usuario,
  titulo: 'Se busca Frontend Developer',
  id_tipo_publicacion: 1, // Puedes usar NULL o ignorarlo
  lugar_publicacion: 'LinkedIn',
  fecha_publicacion: new Date(),
  id_puesto: puesto.id_puesto
});

// Insertar aplicación
await UsuarioPuesto.create({
  id_usuario: user.id_usuario,
  id_puesto: puesto.id_puesto,
  fecha_aplicacion: new Date(),
  estado: 'Pendiente'
});

// Insertar mensaje
await Mensaje.create({
  id_empresa: empresa.id_empresa,
  id_usuario: user.id_usuario,
  id_puesto: puesto.id_puesto,
  contenido: 'Gracias por aplicar. Revisaremos tu perfil.',
  fecha_envio: new Date()
});

console.log('✅ Puesto, publicación, aplicación y mensaje insertados correctamente.');


    console.log('✅ Datos de experiencia, formación y certificación insertados.');

    // Consultar usuario con relaciones
    const resultado = await Usuario.findAll({
      include: [Empresa, Experiencia, Formacion, Certificacion, 
        {
        model: Habilidad, through: { attributes: [] } // Oculta la tabla intermedia en la respuesta
        },
    {
      model: Idioma,
      through: { attributes: [] }
    },
     Publicacion,
    {
      model: Puesto,
      through: { attributes: [] }
    }
]});

    console.log(JSON.stringify(resultado, null, 2));

  } catch (error) {
    console.error('❌ Error al ejecutar:', error);
  } finally {
    await sequelize.close();
  }
})();
