const express = require('express');
const path = require('path');

const app = express();

let pathToIndex = path.resolve(__dirname, '../client/index.html');

function sendFile(pathToIndex){}

app.use('/*',(request, response)=>{
    sendFile(pathToIndex);
});

module.exports = app;