const functions = require('firebase-functions');
const axios = require('axios');

// Configura un proxy para las solicitudes SSR
exports.ssrProxy = functions.https.onRequest(async (req, res) => {
    try {
        // Hacer la solicitud al servidor en Railway
        const response = await axios.get('https://backend-ganttflow-production.up.railway.app/api' + req.url);
        // Devolver la respuesta del servidor en Railway
        res.status(response.status).send(response.data);
    } catch (error) {
        // Manejar errores
        res.status(500).send(error);
    }
});
