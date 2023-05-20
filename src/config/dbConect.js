import mongoose from "mongoose";



mongoose.connect("mongodb+srv://administrador:admin1234S@atividadefinaldpw.lv59khc.mongodb.net/AtividadeFinalDPW");

let db = mongoose.connection;

export default db;