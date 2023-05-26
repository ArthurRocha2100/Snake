import mongoose from "mongoose";

mongoose.connect("mongodb+srv://administrador:u9oZmc5jncPxyvoo@dbatividadefinal.2zzyraf.mongodb.net/?retryWrites=true&w=majority");

let db = mongoose.connection;

export default db;