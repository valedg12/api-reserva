const Reserva = require('../models/Reserva');

// Crear una nueva reserva

const crearReserva = async (req, res) => {
    try { 
        const { nombreCliente, cancha, fecha, horaInicio, horaFin} = req.body;

        // Validar que no haya una reserva existente para la misma cancha, fecha y hora
        const reservaExistente = await Reserva.findOne({
            cancha: cancha,
            fecha: fecha,
            horaInicio: horaInicio
        });

        // Si existe una reserva, cortamos el proceso y le avisamos al cliente
        if (reservaExistente) {
            return res.status(400).json({
                mensaje: 'Ya existe una reserva para esa cancha, fecha y hora. Por favor elige otro horario o cancha.'
            });
        }
        // Si no hay conflictos, creamos la reserva

        const nuevaReserva = new Reserva({
            nombreCliente,
            cancha,
            fecha,
            horaInicio,
            horaFin
        });

        // Guardamos la reserva en la base de datos
        const reservaGuardada = await nuevaReserva.save();

        // Respondemos con la reserva creada
        res.status(201).json(reservaGuardada);

    } catch (error) {
        console.error(`Error al crear la reserva: ${error.message}`);
        res.status(500).json({
            mensaje: 'Ocurrió un error al crear la reserva. Por favor intenta nuevamente.'
        });
    }
};
const obtenerReservas = async (req, res) => {
    try {
        // El método .find() sin nada adentro trae TODOS los documentos de la colección
        const reservas = await Reserva.find();
        res.status(200).json(reservas);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener las reservas', error: error.message });
    }
};


const actualizarReserva = async (req, res) => {
    try {

        const { id } = req.params;

        const reservaActualizada = await Reserva.findByIdAndUpdate(id, req.body, { new: true });

        if (!reservaActualizada) {
            return res.status(404).json({ mensaje: 'No se encontró ninguna reserva con ese ID' });
        }

        res.status(200).json(reservaActualizada);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al actualizar la reserva', error: error.message });
    }
};


const eliminarReserva = async (req, res) => {
    try {
        const { id } = req.params;

        const reservaEliminada = await Reserva.findByIdAndDelete(id);

        if (!reservaEliminada) {
            return res.status(404).json({ mensaje: 'No se encontró la reserva para eliminar' });
        }

        res.status(200).json({ 
            mensaje: '¡Reserva eliminada con éxito! La cancha vuelve a estar libre.',
            reserva: reservaEliminada 
        });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar la reserva', error: error.message });
    }
};
module.exports = { crearReserva, obtenerReservas, actualizarReserva, eliminarReserva };  
