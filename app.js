import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import history from 'connect-history-api-fallback';
import mongoose from 'mongoose';

const app = express();
const uri = 'mongodb://localhost:27017/lmnode'
const options = {
    userNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}

// Conexión a MongoDB
mongoose.connect(uri, options, () => {
    console.log('Conexión con MongoDB exitosa');
}, err => {
    err;
});

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.send('Hola Mundo desde la consola');
});

app.set('puerto', process.env.PORT || 3000);

app.listen(app.get('puerto'), function() {
    console.log('Puerto escuchando', app.get('puerto'));
});
