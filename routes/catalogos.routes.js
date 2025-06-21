const express = require('express');
const router = express.Router();
const controller = require('../controllers/catalogos.controller');

router.get('/generos', controller.getGeneros);
router.get('/tipo-documento', controller.getTiposDocumento);
router.get('/modalidades', controller.getModalidades);
router.get('/niveles-habilidad', controller.getNivelesHabilidad);
router.get('/niveles-idioma', controller.getNivelesIdioma);
router.get('/tipo-certificacion', controller.getTiposCertificacion);
router.get('/tipo-publicacion', controller.getTiposPublicacion);
router.get('/categorias-habilidad', controller.getCategoriasHabilidad);

module.exports = router;
