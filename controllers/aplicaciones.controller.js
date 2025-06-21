const { UsuarioPuesto, Usuario, Puesto } = require('../models');

exports.getAll = async (req, res) => {
  try {
    const data = await UsuarioPuesto.findAll({ include: [Usuario, Puesto] });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener aplicaciones' });
  }
};

exports.getById = async (req, res) => {
  try {
    const app = await UsuarioPuesto.findByPk(req.params.id, { include: [Usuario, Puesto] });
    if (!app) return res.status(404).json({ error: 'Aplicación no encontrada' });
    res.json(app);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener aplicación' });
  }
};

exports.create = async (req, res) => {
  try {
    const nueva = await UsuarioPuesto.create(req.body);
    res.status(201).json(nueva);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear aplicación' });
  }
};

exports.delete = async (req, res) => {
  try {
    const app = await UsuarioPuesto.findByPk(req.params.id);
    if (!app) return res.status(404).json({ error: 'Aplicación no encontrada' });
    await app.destroy();
    res.json({ message: 'Aplicación eliminada' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar aplicación' });
  }
};
