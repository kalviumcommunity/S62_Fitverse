if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({
      path: "./config/.env",
    });
  }
  

  const express=require("express");
  const connectDB = require("./DB/database.js");
  // const { connectDB } = require("./DB/db.js");
  const app = express();
  const PORT = process.env.PORT || 8080;
  
  app.get('/ping',(req,res) =>{
    return res.send('pong')
})
  const server = app.listen(PORT, () => {
    // connectDatabase();
    connectDB();
    console.log(
      `Server is running in port: ${PORT}, link: http://localhost:${PORT}`
    );
  });