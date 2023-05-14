const express = require('express');
const app = express();
const cors = require('cors');
const showsController = require("./controllers/showsController");


app.use(express.json());
app.use(cors());


app.use("/shows", showsController);

app.get('/', (req, res) => {
    res.send('Welcome to Flix');
});

app.get('*', (req, res) => {
    res.status(404).send('Page not found');
});

module.exports = app;