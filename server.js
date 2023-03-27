//  ---------------- Use Node -------------------
// const http = require('http');
// const server = http.createServer((req,res)=>{res.end("Server simple funcionando al 100%"); });
// server.listen(3000)
// console.log('Server listen on port 3000');
//------------------- Use express ---------------
const express = require('express');
const app = express();

app.get('/', (req,res)=> res.send('Server Express simple funcionando al 100%'))

app.listen(3000);
console.log('Server listen on port 3000');