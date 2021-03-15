require('dotenv').config();

const express = require('express');
const app = express();
const routes = require('./routes');
const cors = require('cors');
const jwt = require("jsonwebtoken");
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const corsOptions = {
    origin: ['http://localhost:3000'],
    methods: "GET,POST,PUT,DELETE",
    credentials: true, //allows session cookies to be sent back and forth
    optionsSuccessStatus: 200 //legacy browsers
  }

app.use(cors(corsOptions));
app.use(bodyParser.json());

const verifyToken = (req, res, next) => {
  console.log("verify token")
    let token = req.headers['authorization'];
    // if(token){
    //     token = token.substring(7) //remove string Bearer from the token
    // }

    // jwt.verify(token, process.env.JWT_SECRET, (err, decodedUser) => {
    //     if(err || !decodedUser){
    //         return res.status(401).send(`ERROR: ${err}`);
    //     }
    //     req.user = decodedUser;//set the decoded payload to req object as the user information(username, id)
    //     console.log("in verify token");
    //     console.log(decodedUser);
    //     next();// for control to go to the next line of code
    // })
}

// app.use('/auth', routes.auth);
app.use('/game', routes.game);
app.use('/user', routes.user);

app.listen(process.env.PORT, () => {
  console.log("I am listening")
})
