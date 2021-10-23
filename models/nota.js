import mongoose, {Schema} from 'mongoose';
const Schema = mongoose.Schema;

const notaSchema = new Schema({
    nombre: {type: String, required: [true, 'Obligatorioa']},
    descripcion: String,
    usuarioId: String,
    date: {type: Date, default: DateNow},
    activo: {type: Boolean, default: true}
});

const Nota = mongoose.model('Nota', notaSchema);
export default Nota;
