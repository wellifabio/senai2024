//Dependências - Frameworks
const express = require("express");
const cors = require("cors");
const routes = require("./src/routes");

//Configurações de saída - FrontEnd
const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);

//Teste e porta no console
app.listen(3000, () => {
    console.log("API respondendo na porta 3000");
});