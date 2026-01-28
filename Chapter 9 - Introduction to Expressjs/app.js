

// External Modules
const express = require('express');


// Local Modules
const requestHandler = require('./User')

const app = express();

// Adding Middleware
// app.use((req, res, next) => {
//   console.log("Came in first middleware", req.url, req.method);
//   next();
// });


// app.use((req, res, next) => {
//   console.log("Came in Second middleware", req.url, req.method);
//   res.send("<p>Welcome to complete coding Nodejs series</p>")
  
// });

app.post('/sumbit-details', (req, res, next) => {
  console.log("Second Middleware", req.url, req.method);
  res.send("<p>Welcome to submit Details Page</p>");
  
})

app.use('/', (req, res, next) => {
  console.log("Second Middleware", req.url, req.method);
  res.send("<p>Welcome to complete Coding</p>");
  
})




const PORT = 3003;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
  
});