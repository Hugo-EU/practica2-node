const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const cantanteRoutes = require('./routes/Controlador');
app.use('/api', cantanteRoutes);

app.get('/', (req, res) => {
    res.send('¡Bienvenido a tu aplicación Node.js!');
});

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'db4free.net',
    port: 3306,
    user: 'jcarlos',
    password: 'Jcarl0sJcarl0s',
    database: 'iesdaw'
});

connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conexión exitosa a la base de datos MySQL');
});

module.exports = connection;
