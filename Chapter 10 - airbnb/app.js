
// External Module
const express = require('express');

//Local Module
const UserRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter")

const app = express();



app.use(express.urlencoded());
app.use(UserRouter);
app.use(hostRouter);



 


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
  
});