const express = require('express');
const app = express();

// Servir archivos estáticos desde la carpeta raíz de tu proyecto
app.use(express.static(__dirname));

app.listen(8080, () => {
    console.log('Servidor corriendo en http://localhost:8080');
});
