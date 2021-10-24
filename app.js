import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import mongoose from 'mongoose';
const history = require('connect-history-api-fallback');

const app = express();
// const uri = 'mongodb://localhost:27017/lmnode'
const uri = 'mongodb+srv://ag:Oa17APQGKyCC8Xt8@cluster0.h2msz.mongodb.net/lmnode?retryWrites=true&w=majority';

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

// Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', require('./routes/nota'));

// Conexión a MongoDB
mongoose.connect(uri, options).then(() => {
    console.log('Conexión con MongoDB exitosa');
}, err => {
    console.log(err);
});

// Rutas
app.get('/', function(req, res) {
    res.send('Hola Mundo desde la consola');
});

app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), function() {
    console.log('Puerto escuchando', app.get('puerto'));
});
