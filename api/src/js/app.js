import express from 'express';
import db from '../config/dbConect.js';
import routes from '../routes/index.js';



db.on("error", console.log.bind(console, "erro de conexão com banco de dados"));
db.once("open", () => {
    console.log("conexão com banco feita com sucesso");
});

const app = express();
app.use(express.json());
routes(app);

export default app