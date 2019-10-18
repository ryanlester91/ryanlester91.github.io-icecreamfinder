
require('dotenv').config();
const express = require("express");
const app = express();

const mongoose = require("mongoose");
const morgan = require("morgan");


const routes = require("./server/routes");


//connecting to mongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/usericecreamtruck");
//let configDB = require("./config/database.js");

mongoose.Promise = global.Promise;
let db = mongoose.connection;

db.on("error", function(error){
	console.log("Mongoose Error: ", error);
});

db.once("open", function(){
	console.log("Mongoose connection successful.");
});




app.set("view-engine", "html");

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false}))
app.use(express.json());







// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
  }
  
  




app.use(routes);


app.listen(3000);



	
