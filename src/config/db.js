const mongoose = require('mongoose');

const conectarDB = async () => {
    try {
        // Intentamos conectar usando la URL secreta de nuestro .env
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`🗄️ Base de datos MongoDB conectada: ${conn.connection.host}`);
    } catch (error) {
        console.error(`❌ Error al conectar la base de datos: ${error.message}`);
        process.exit(1); // Si falla la DB, apagamos el servidor por seguridad
    }
};

module.exports = conectarDB;