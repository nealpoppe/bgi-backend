const express = require('express');
const app = express();
const routes = require('./routes');
const cors = require('cors');

const corsOptions = {
    origin: ['http://localhost:3000'],
    methods: "GET,POST,PUT,DELETE",
    credentials: true, //allows session cookies to be sent back and forth
    optionsSuccessStatus: 200 //legacy browsers
  }

app.use(cors(corsOptions))

app.use('/game', routes.game);

app.listen(3001, () => {
  console.log("I am listening")
})
