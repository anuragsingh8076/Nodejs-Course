
// Core Modules
const http = require('http');

// External Modules
const express = require('express');


// Local Modules
const requestHandler = require('./User')

const app = express();

// Adding Middleware
app.use((req, res, next) => {
  console.log("Came in first middleware", req.url, req.method);
  next();
});


app.use((req, res, next) => {
  console.log("Came in Second middleware", req.url, req.method);
  
});




const server = http.createServer(app);


const PORT = 3003;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
  
});