const { Puesto, Empresa } = require('../models');

exports.getAll = async (req, res) => {
  try {
    const puestos = await Puesto.findAll({ include: Empresa });
    res.json(puestos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener puestos' });
  }
};

exports.getById = async (req, res) => {
  try {
    const puesto = await Puesto.findByPk(req.params.id, { include: Empresa });
    if (!puesto) return res.status(404).json({ error: 'Puesto no encontrado' });
    res.json(puesto);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener puesto' });
  }
};

exports.create = async (req, res) => {
  try {
    const nuevo = await Puesto.create(req.body);
    res.status(201).json(nuevo);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear puesto' });
  }
};

exports.update = async (req, res) => {
  try {
    const puesto = await Puesto.findByPk(req.params.id);
    if (!puesto) return res.status(404).json({ error: 'Puesto no encontrado' });
    await puesto.update(req.body);
    res.json(puesto);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar puesto' });
  }
};

exports.delete = async (req, res) => {
  try {
    const puesto = await Puesto.findByPk(req.params.id);
    if (!puesto) return res.status(404).json({ error: 'Puesto no encontrado' });
    await puesto.destroy();
    res.json({ message: 'Puesto eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar puesto' });
  }
};
