require('dotenv').config(); 
const express = require('express');
const cors = require('cors');
const conectarDB = require('./src/config/db'); 


const reservaRoutes = require('./src/routes/reservaRoutes'); 

const app = express();

conectarDB();

app.use(cors());
app.use(express.json());


app.use('/api/reservas', reservaRoutes); 

app.get('/', (req, res) => {
    res.status(200).send('¡Servidor de reservas funcionando a la perfección! ');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor encendido y escuchando en el puerto ${PORT}`);
});