import mongoose from "mongoose";

const usuarioSchema = mongoose.Schema(
    {
        id:{type: String},
        nome: {type: String, requered: true},
        senha: {type: String, required: true}
    },
    {
        versionKey: false
    }
);

const usuario = mongoose.model('usuario');

export default usuario;