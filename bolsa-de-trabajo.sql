CREATE TABLE [usuarios] (
  [id_usuario] int PRIMARY KEY IDENTITY(1, 1),
  [nombres] varchar(100),
  [apellidos] varchar(100),
  [id_genero] int,
  [fecha_nacimiento] date,
  [id_tipo_documento] int,
  [numero_documento] varchar(20) UNIQUE,
  [nit] varchar(20) UNIQUE,
  [nup] varchar(20) UNIQUE,
  [direccion] text,
  [telefono] varchar(15),
  [correo_electronico] varchar(100) UNIQUE,
  [redes_sociales] text,
  [password_hash] varchar(255)
)
GO

CREATE TABLE [roles] (
  [id_rol] int PRIMARY KEY IDENTITY(1, 1),
  [nombre_rol] varchar(50)
)
GO

CREATE TABLE [permisos] (
  [id_permiso] int PRIMARY KEY IDENTITY(1, 1),
  [nombre_permiso] varchar(100)
)
GO

CREATE TABLE [rol_usuario] (
  [id_rol_usuario] int PRIMARY KEY IDENTITY(1, 1),
  [id_usuario] int,
  [id_rol] int
)
GO

CREATE TABLE [permiso_rol] (
  [id_permiso_rol] int PRIMARY KEY IDENTITY(1, 1),
  [id_rol] int,
  [id_permiso] int
)
GO

CREATE TABLE [empresas] (
  [id_empresa] int PRIMARY KEY IDENTITY(1, 1),
  [id_usuario] int UNIQUE,
  [nombre_empresa] varchar(255),
  [descripcion] text,
  [ubicacion] text,
  [sitio_web] varchar(255),
  [telefono_empresa] varchar(15),
  [contacto] varchar(100)
)
GO

CREATE TABLE [experiencia_laboral] (
  [id_experiencia] int PRIMARY KEY IDENTITY(1, 1),
  [id_usuario] int,
  [puesto] varchar(100),
  [empresa] varchar(255),
  [periodo_inicio] date,
  [periodo_fin] date,
  [funciones] text,
  [contacto_empresa] varchar(100)
)
GO

CREATE TABLE [formacion_academica] (
  [id_formacion] int PRIMARY KEY IDENTITY(1, 1),
  [id_usuario] int,
  [institucion] varchar(255),
  [titulo_obtenido] varchar(255),
  [periodo_inicio] date,
  [periodo_fin] date
)
GO

CREATE TABLE [certificaciones] (
  [id_certificacion] int PRIMARY KEY IDENTITY(1, 1),
  [id_usuario] int,
  [nombre_certificacion] varchar(255),
  [id_tipo_certificacion] int,
  [codigo_certificacion] varchar(50),
  [institucion] varchar(255),
  [fecha_obtencion] date
)
GO

CREATE TABLE [habilidades] (
  [id_habilidad] int PRIMARY KEY IDENTITY(1, 1),
  [nombre_habilidad] varchar(100),
  [id_categoria_habilidad] int
)
GO

CREATE TABLE [usuario_habilidad] (
  [id_usuario_habilidad] int PRIMARY KEY IDENTITY(1, 1),
  [id_usuario] int,
  [id_habilidad] int,
  [id_nivel_habilidad] int
)
GO

CREATE TABLE [idiomas] (
  [id_idioma] int PRIMARY KEY IDENTITY(1, 1),
  [nombre_idioma] varchar(100)
)
GO

CREATE TABLE [usuario_idioma] (
  [id_usuario_idioma] int PRIMARY KEY IDENTITY(1, 1),
  [id_usuario] int,
  [id_idioma] int,
  [id_nivel_lectura] int,
  [id_nivel_escritura] int,
  [id_nivel_conversacion] int
)
GO

CREATE TABLE [publicaciones] (
  [id_publicacion] int PRIMARY KEY IDENTITY(1, 1),
  [id_usuario] int,
  [titulo] varchar(255),
  [id_tipo_publicacion] int,
  [lugar_publicacion] varchar(255),
  [fecha_publicacion] date,
  [id_puesto] int
)
GO

CREATE TABLE [puesto_trabajo] (
  [id_puesto] int PRIMARY KEY IDENTITY(1, 1),
  [id_empresa] int,
  [nombre_puesto] varchar(255),
  [descripcion] text,
  [requisitos] text,
  [conocimientos_requeridos] text,
  [perfil_academico] text,
  [habilidades_requeridas] text,
  [experiencia_requerida] text,
  [rango_salarial] varchar(50),
  [ubicacion] text,
  [id_modalidad] int
)
GO

CREATE TABLE [usuario_puesto] (
  [id_aplicacion] int PRIMARY KEY IDENTITY(1, 1),
  [id_usuario] int,
  [id_puesto] int,
  [fecha_aplicacion] datetime,
  [estado] text
)
GO

CREATE TABLE [mensaje] (
  [id_mensaje] int PRIMARY KEY IDENTITY(1, 1),
  [id_empresa] int,
  [id_usuario] int,
  [id_puesto] int,
  [contenido] text,
  [fecha_envio] datetime
)
GO

CREATE TABLE [tipo_documento] (
  [id_tipo_documento] int PRIMARY KEY,
  [nombre_documento] varchar(50)
)
GO

CREATE TABLE [genero] (
  [id_genero] int PRIMARY KEY,
  [nombre_genero] varchar(50)
)
GO

CREATE TABLE [tipo_certificacion] (
  [id_tipo_certificacion] int PRIMARY KEY,
  [nombre_tipo] varchar(100)
)
GO

CREATE TABLE [categoria_habilidad] (
  [id_categoria_habilidad] int PRIMARY KEY,
  [nombre_categoria] varchar(100)
)
GO

CREATE TABLE [nivel_habilidad] (
  [id_nivel_habilidad] int PRIMARY KEY,
  [nombre_nivel] varchar(50)
)
GO

CREATE TABLE [nivel_idioma] (
  [id_nivel_idioma] int PRIMARY KEY,
  [descripcion] varchar(50)
)
GO

CREATE TABLE [tipo_publicacion] (
  [id_tipo_publicacion] int PRIMARY KEY,
  [nombre_tipo] varchar(50)
)
GO

CREATE TABLE [modalidad_trabajo] (
  [id_modalidad] int PRIMARY KEY,
  [nombre_modalidad] varchar(50)
)
GO

EXEC sp_addextendedproperty
@name = N'Column_Description',
@value = 'nullable',
@level0type = N'Schema', @level0name = 'dbo',
@level1type = N'Table',  @level1name = 'usuarios',
@level2type = N'Column', @level2name = 'nit';
GO

EXEC sp_addextendedproperty
@name = N'Column_Description',
@value = 'nullable',
@level0type = N'Schema', @level0name = 'dbo',
@level1type = N'Table',  @level1name = 'usuarios',
@level2type = N'Column', @level2name = 'nup';
GO

EXEC sp_addextendedproperty
@name = N'Column_Description',
@value = 'nullable',
@level0type = N'Schema', @level0name = 'dbo',
@level1type = N'Table',  @level1name = 'usuarios',
@level2type = N'Column', @level2name = 'redes_sociales';
GO

EXEC sp_addextendedproperty
@name = N'Column_Description',
@value = 'nullable',
@level0type = N'Schema', @level0name = 'dbo',
@level1type = N'Table',  @level1name = 'empresas',
@level2type = N'Column', @level2name = 'descripcion';
GO

EXEC sp_addextendedproperty
@name = N'Column_Description',
@value = 'nullable',
@level0type = N'Schema', @level0name = 'dbo',
@level1type = N'Table',  @level1name = 'empresas',
@level2type = N'Column', @level2name = 'sitio_web';
GO

EXEC sp_addextendedproperty
@name = N'Column_Description',
@value = 'nullable',
@level0type = N'Schema', @level0name = 'dbo',
@level1type = N'Table',  @level1name = 'experiencia_laboral',
@level2type = N'Column', @level2name = 'periodo_fin';
GO

EXEC sp_addextendedproperty
@name = N'Column_Description',
@value = 'nullable',
@level0type = N'Schema', @level0name = 'dbo',
@level1type = N'Table',  @level1name = 'formacion_academica',
@level2type = N'Column', @level2name = 'periodo_fin';
GO

ALTER TABLE [usuarios] ADD FOREIGN KEY ([id_genero]) REFERENCES [genero] ([id_genero])
GO

ALTER TABLE [usuarios] ADD FOREIGN KEY ([id_tipo_documento]) REFERENCES [tipo_documento] ([id_tipo_documento])
GO

ALTER TABLE [rol_usuario] ADD FOREIGN KEY ([id_usuario]) REFERENCES [usuarios] ([id_usuario])
GO

ALTER TABLE [rol_usuario] ADD FOREIGN KEY ([id_rol]) REFERENCES [roles] ([id_rol])
GO

ALTER TABLE [permiso_rol] ADD FOREIGN KEY ([id_rol]) REFERENCES [roles] ([id_rol])
GO

ALTER TABLE [permiso_rol] ADD FOREIGN KEY ([id_permiso]) REFERENCES [permisos] ([id_permiso])
GO

ALTER TABLE [empresas] ADD FOREIGN KEY ([id_usuario]) REFERENCES [usuarios] ([id_usuario])
GO

ALTER TABLE [experiencia_laboral] ADD FOREIGN KEY ([id_usuario]) REFERENCES [usuarios] ([id_usuario])
GO

ALTER TABLE [formacion_academica] ADD FOREIGN KEY ([id_usuario]) REFERENCES [usuarios] ([id_usuario])
GO

ALTER TABLE [certificaciones] ADD FOREIGN KEY ([id_usuario]) REFERENCES [usuarios] ([id_usuario])
GO

ALTER TABLE [certificaciones] ADD FOREIGN KEY ([id_tipo_certificacion]) REFERENCES [tipo_certificacion] ([id_tipo_certificacion])
GO

ALTER TABLE [habilidades] ADD FOREIGN KEY ([id_categoria_habilidad]) REFERENCES [categoria_habilidad] ([id_categoria_habilidad])
GO

ALTER TABLE [usuario_habilidad] ADD FOREIGN KEY ([id_usuario]) REFERENCES [usuarios] ([id_usuario])
GO

ALTER TABLE [usuario_habilidad] ADD FOREIGN KEY ([id_habilidad]) REFERENCES [habilidades] ([id_habilidad])
GO

ALTER TABLE [usuario_habilidad] ADD FOREIGN KEY ([id_nivel_habilidad]) REFERENCES [nivel_habilidad] ([id_nivel_habilidad])
GO

ALTER TABLE [usuario_idioma] ADD FOREIGN KEY ([id_usuario]) REFERENCES [usuarios] ([id_usuario])
GO

ALTER TABLE [usuario_idioma] ADD FOREIGN KEY ([id_idioma]) REFERENCES [idiomas] ([id_idioma])
GO

ALTER TABLE [usuario_idioma] ADD FOREIGN KEY ([id_nivel_lectura]) REFERENCES [nivel_idioma] ([id_nivel_idioma])
GO

ALTER TABLE [usuario_idioma] ADD FOREIGN KEY ([id_nivel_escritura]) REFERENCES [nivel_idioma] ([id_nivel_idioma])
GO

ALTER TABLE [usuario_idioma] ADD FOREIGN KEY ([id_nivel_conversacion]) REFERENCES [nivel_idioma] ([id_nivel_idioma])
GO

ALTER TABLE [publicaciones] ADD FOREIGN KEY ([id_usuario]) REFERENCES [usuarios] ([id_usuario])
GO

ALTER TABLE [publicaciones] ADD FOREIGN KEY ([id_tipo_publicacion]) REFERENCES [tipo_publicacion] ([id_tipo_publicacion])
GO

ALTER TABLE [publicaciones] ADD FOREIGN KEY ([id_puesto]) REFERENCES [puesto_trabajo] ([id_puesto])
GO

ALTER TABLE [puesto_trabajo] ADD FOREIGN KEY ([id_empresa]) REFERENCES [empresas] ([id_empresa])
GO

ALTER TABLE [puesto_trabajo] ADD FOREIGN KEY ([id_modalidad]) REFERENCES [modalidad_trabajo] ([id_modalidad])
GO

ALTER TABLE [usuario_puesto] ADD FOREIGN KEY ([id_usuario]) REFERENCES [usuarios] ([id_usuario])
GO

ALTER TABLE [usuario_puesto] ADD FOREIGN KEY ([id_puesto]) REFERENCES [puesto_trabajo] ([id_puesto])
GO

ALTER TABLE [mensaje] ADD FOREIGN KEY ([id_empresa]) REFERENCES [empresas] ([id_empresa])
GO

ALTER TABLE [mensaje] ADD FOREIGN KEY ([id_usuario]) REFERENCES [usuarios] ([id_usuario])
GO

ALTER TABLE [mensaje] ADD FOREIGN KEY ([id_puesto]) REFERENCES [puesto_trabajo] ([id_puesto])
GO

ALTER TABLE [usuarios] ADD FOREIGN KEY ([nup]) REFERENCES [usuarios] ([redes_sociales])
GO
