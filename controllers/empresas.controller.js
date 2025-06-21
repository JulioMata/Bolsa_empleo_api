const { Empresa, Usuario } = require('../models');

exports.getAll = async (req, res) => {
  try {
    const empresas = await Empresa.findAll({ include: Usuario });
    res.json(empresas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener empresas' });
  }
};

exports.getById = async (req, res) => {
  try {
    const empresa = await Empresa.findByPk(req.params.id, { include: Usuario });
    if (!empresa) return res.status(404).json({ error: 'Empresa no encontrada' });
    res.json(empresa);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener empresa' });
  }
};

exports.create = async (req, res) => {
  try {
    const nueva = await Empresa.create(req.body);
    res.status(201).json(nueva);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear empresa' });
  }
};

exports.update = async (req, res) => {
  try {
    const empresa = await Empresa.findByPk(req.params.id);
    if (!empresa) return res.status(404).json({ error: 'Empresa no encontrada' });
    await empresa.update(req.body);
    res.json(empresa);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar empresa' });
  }
};

exports.delete = async (req, res) => {
  try {
    const empresa = await Empresa.findByPk(req.params.id);
    if (!empresa) return res.status(404).json({ error: 'Empresa no encontrada' });
    await empresa.destroy();
    res.json({ message: 'Empresa eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar empresa' });
  }
};
