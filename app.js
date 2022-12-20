const cors = require('cors');
const express = require("express");
const profileController = require("./controllers/profileController");
const recipeController = require('./controllers/recipeController');

const app = express();

app.use(cors());
app.use(express.json());


app.use('/profiles', profileController);
app.use('/recipes', recipeController);

app.get('/', (req, res) => {
    res.send(`Welcome to A Little Pepper!!`)
});

app.get('*', (req, res) => {
    res.status(404).send("Page not found :(")
});

module.exports = app;
