const mongoose = require('mongoose');

const reservaSchema = new mongoose.Schema({
    nombreCliente: {
        type: String,
        required: [true, 'El nombre del cliente es obligatorio']
    },
    cancha: {
        type: String,
        required: [true, 'Especificar la cancha es obligatoria'],
        enum: ['Cancha 1', 'Cancha 2', 'Cancha 3','Cancha 4', 'Cancha 5', 'Cancha 6' ] // Opciones de canchas disponibles

    },
    fecha: {
        type: Date,
        required: [true, 'La fecha de la reserva es obligatoria']
    },
    horaInicio: {
        type: String,
        required: [true, 'La hora de inicio es obligatoria']
    },
    horaFin: {
        type: String,
        required: [true, 'La hora de finalización es obligatoria']
    },
    estado: {
        type: String,
        enum: ['Pendiente', 'Confirmada', 'Cancelada'],
        default: 'Confirmada'
    }
}, {
    timestamps: true // Agrega campos createdAt y updatedAt automáticamente 

});

module.exports = mongoose.model('Reserva', reservaSchema);