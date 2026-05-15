const express = require('express');
const router = express.Router();

const { crearReserva, obtenerReservas, actualizarReserva, eliminarReserva } = require('../controllers/reservaController');


router.post('/', crearReserva);
router.get('/', obtenerReservas);
router.put('/:id', actualizarReserva);
router.delete('/:id', eliminarReserva);

module.exports = router;