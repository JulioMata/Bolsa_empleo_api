const {
  Genero,
  TipoDocumento,
  Modalidad,
  NivelHabilidad,
  NivelIdioma,
  TipoCertificacion,
  TipoPublicacion,
  CategoriaHabilidad
} = require('../models');

exports.getGeneros = async (req, res) => {
  try {
    const data = await Genero.findAll();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener géneros' });
  }
};

exports.getTiposDocumento = async (req, res) => {
  try {
    const data = await TipoDocumento.findAll();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener tipos de documento' });
  }
};

exports.getModalidades = async (req, res) => {
  try {
    const data = await Modalidad.findAll();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener modalidades' });
  }
};

exports.getNivelesHabilidad = async (req, res) => {
  try {
    const data = await NivelHabilidad.findAll();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener niveles de habilidad' });
  }
};

exports.getNivelesIdioma = async (req, res) => {
  try {
    const data = await NivelIdioma.findAll();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener niveles de idioma' });
  }
};

exports.getTiposCertificacion = async (req, res) => {
  try {
    const data = await TipoCertificacion.findAll();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener tipos de certificación' });
  }
};

exports.getTiposPublicacion = async (req, res) => {
  try {
    const data = await TipoPublicacion.findAll();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener tipos de publicación' });
  }
};

exports.getCategoriasHabilidad = async (req, res) => {
  try {
    const data = await CategoriaHabilidad.findAll();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener categorías de habilidad' });
  }
};
