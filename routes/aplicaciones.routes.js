const express = require('express');
const router = express.Router();
const controller = require('../controllers/aplicaciones.controller');

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.create);
router.delete('/:id', controller.delete);

module.exports = router;
