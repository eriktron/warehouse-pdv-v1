const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const { logErrors, ormErrorHandler, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const whitelist = ['http://localhost:8080', 'https://myapp.co', 'http://localhost:5173'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  }
}
//back de como estaba cors: app.use(cors(options));
app.use(cors(options)); //esto habilita cors para todas las solicitudes


app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

routerApi(app);

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

//Puerto en el que corre el servidor
app.listen(port, () => {
  console.log('Mi puerto warehouse-pdv-copi1 es el ' +  port);
});
