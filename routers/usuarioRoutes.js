const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const { auth } = require('../middlewares/auth');

router.get('/:id', auth, usuarioController.getUsuario);
router.put('/:id', auth, usuarioController.updateUsuario);
router.delete('/:id', auth, usuarioController.deleteUsuario);

module.exports = router;
