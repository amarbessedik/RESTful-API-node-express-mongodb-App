const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config({path: './config.env'});


//Routes
app.get('/', (req, res) => {
   res.send('Hello from server!');
});

//Server Listening
PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{console.log('Server listening for ' + PORT)});