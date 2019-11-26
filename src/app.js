const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const dateFormat = require('dateformat');

const app = express();

// Conexion a base de datos
mongoose.connect('mongodb://localhost/crud-mongo', { useNewUrlParser: true,   useCreateIndex: true,   useFindAndModify: true,   useUnifiedTopology: true })
//mongoose.connect('mongodb+srv://manuel:Hola1Mundo@cluster0-wzm0q.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true,   useCreateIndex: true,   useFindAndModify: true,   useUnifiedTopology: true })
  .then(db => console.log('Base de datos: \x1b[32m%s\x1b[0m','online'))
  .catch(err => console.log(err));

// Importar las rutas
const indexRoutes = require('./routes/index');

// Configuraciones
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))

// routes
app.use('/', indexRoutes);

app.listen(app.get('port'), () => {
  console.log('Express server corriendo en el puesto 3000: \x1b[32m%s\x1b[0m','online');
});
