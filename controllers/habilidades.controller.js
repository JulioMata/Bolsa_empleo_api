const { Habilidad } = require('../models');

exports.getAll = async (req, res) => {
  try {
    const data = await Habilidad.findAll();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener habilidades' });
  }
};

exports.getById = async (req, res) => {
  try {
    const habilidad = await Habilidad.findByPk(req.params.id);
    if (!habilidad) return res.status(404).json({ error: 'No encontrada' });
    res.json(habilidad);
  } catch (error) {
    res.status(500).json({ error: 'Error al buscar habilidad' });
  }
};

exports.create = async (req, res) => {
  try {
    const nueva = await Habilidad.create(req.body);
    res.status(201).json(nueva);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear habilidad' });
  }
};

exports.update = async (req, res) => {
  try {
    const habilidad = await Habilidad.findByPk(req.params.id);
    if (!habilidad) return res.status(404).json({ error: 'No encontrada' });
    await habilidad.update(req.body);
    res.json(habilidad);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar habilidad' });
  }
};

exports.delete = async (req, res) => {
  try {
    const habilidad = await Habilidad.findByPk(req.params.id);
    if (!habilidad) return res.status(404).json({ error: 'No encontrada' });
    await habilidad.destroy();
    res.json({ message: 'Habilidad eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar habilidad' });
  }
};
