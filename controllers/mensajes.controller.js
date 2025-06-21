const { Mensaje, Usuario, Empresa, Puesto } = require('../models');

exports.getAll = async (req, res) => {
  try {
    const mensajes = await Mensaje.findAll({ include: [Usuario, Empresa, Puesto] });
    res.json(mensajes);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener mensajes' });
  }
};

exports.create = async (req, res) => {
  try {
    const nuevo = await Mensaje.create(req.body);
    res.status(201).json(nuevo);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear mensaje' });
  }
};
