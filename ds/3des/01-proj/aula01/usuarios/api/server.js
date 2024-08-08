require('dotenv').config();
const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 3000;

const rotes = require('./src/routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(rotes);

app.listen(PORT, () => { console.log("API de OSs respondendo na porta " + PORT) });