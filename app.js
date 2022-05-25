const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const app = express();
app.use(bodyParser.json());



//app.get('/', (req, res) =>{
//   res.send("Hello World");
//});

///app.get('/players', (req, res) =>{
//    res.send('Players');
//});
const connectDB = require('./config/db');

//Configuracion ENV
dotenv.config({ path: './config/config.env' });

connectDB();

//Router
app.use('/', require('./routes/index'));


app.listen(3000);