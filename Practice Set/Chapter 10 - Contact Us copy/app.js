// Core Module
const path = require("path");

// External Module
const express = require("express");

// Local Module
const rootDir = require("./utils/pathUtil");
const homeRoute = require('./routes/homeRoutes');
const contactRoute = require('./routes/contactRoutes');

const app = express();

app.use(express.urlencoded());

app.use(homeRoute);
app.use(contactRoute);

app.use((req, res, next) => {
  res.sendFile(Path.join(rootDir, 'views', '404.html'));
});

const PORT = 3003;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
  
});