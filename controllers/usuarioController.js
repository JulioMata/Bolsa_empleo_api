const { Usuario } = require('../models');

exports.getUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id, {
      attributes: { exclude: ['password'] }
    });

    if (!usuario) {
      return res.status(404).json({
        error: 'Usuario no encontrado'
      });
    }

    res.json(usuario);
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

exports.updateUsuario = async (req, res) => {
  try {
    const [updated] = await Usuario.update(req.body, {
      where: { id: req.params.id },
      individualHooks: true // Para ejecutar hooks como beforeUpdate
    });

    if (!updated) {
      return res.status(404).json({
        error: 'Usuario no encontrado'
      });
    }

    const usuario = await Usuario.findByPk(req.params.id, {
      attributes: { exclude: ['password'] }
    });

    res.json(usuario);
  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
};

exports.deleteUsuario = async (req, res) => {
  try {
    const deleted = await Usuario.destroy({
      where: { id: req.params.id }
    });

    if (!deleted) {
      return res.status(404).json({
        error: 'Usuario no encontrado'
      });
    }

    res.status(204).json();
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};
