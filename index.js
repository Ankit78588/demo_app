const express = require('express');
const PORT = 4000;

const app = express();




app.get('/', function() {
    res.status(200).send('Welcome to Homepage!!');
})





app.listen(4000, function(){
    console.log('Server Started!');
})