const express = require('express');
const UserRouter = express.Router();


UserRouter.get("/", (req, res, next) => {

  res.send(
    `<h1>Welcome to airbnb</h1>
     <a href="/host/add-home">Add Home</a>
    `);
})


module.exports = UserRouter;