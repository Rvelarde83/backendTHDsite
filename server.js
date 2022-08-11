//Dependencies
require("dotenv").config();


const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");

// DB Config
require("./db/db");

//Routers
const showsRouter = require("./routes/shows");


//Middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/static", express.static("static")) 
app.use(cors());
app.use(morgan('dev'))



//Model

app.use("/shows/", showsRouter);
// app.get("/", (req, res) => {
//   res.send("Hello Blackeye Coffee!");
// });



//Listen

const PORT = process.env.PORT|| 3000
app.listen(PORT, () => console.log(`You're on port ${PORT}`));
