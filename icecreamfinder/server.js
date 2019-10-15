// //currently:
// //defaults to login page with option to click link to redirect to register page 
// //redirects from register to login pages but the login page redirects to itself-- failureRedirect
if (process.env.NODE_ENV !=="production") {
	require("dotenv").config();
}

const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const passport = require("passport");
const flash  = require("express-flash");
const session = require("express-session");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const morgan = require("morgan");
//const MongoStore = require("connect-mongostore")(session);

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



const initializePassport = require("./passport-config")
initializePassport(
	passport, 
	//name => users.find(user => user.name === name),
	email => users.find(user => user.email === email),
	id => users.find(user => user.id === id)
)


app.set("view-engine", "ejs");
//app.set("trust proxy", 1);
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false}))
app.use(express.json());
app.use(flash());
app.use(session({
	secret: process.env.SESSION_SECRET,
	resave: false,
	saveUninitialized: false,
	cookie: { secure: true },
	//store: new MongoStore({
		//mongooseConnection: db
	//})
}));

const users=[] //just for the sake of practicing, inside app.post /register

app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride("_method"));




// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
  }
  
  // Send every request to the React app
  // Define any API routes before this runs
  /*app.get("*", function(req, res) {
	res.sendFile(path.join(__dirname, "./client/build"));
  });*/



//routes
//app(routes);
let User = require("./server/models/user");

app.get("/", checkAuthenticated, (req, res) => {
	res.render("index.ejs", { email: req.user.email })
});

app.get("/:email/:password", function(req, res) {
	let newUser = new User();
	newUser.local.email = req.params.email;
	newUser.local.password = req.params.password;
	console.log(newUser.local.username);
	console.log(newUser.local.password);
	newUser.save(function(err) {
		if(err) {
			throw err;
		}
	});
	res.send("Success!");
})

app.get("/login", checkNotAuthenticated, (req, res) => {
	res.render("login.ejs")
});
app.post("/login", checkNotAuthenticated, passport.authenticate("local", {
	successRedirect: "/",
	failureRedirect: "/login",
	failureFlash: true
}));

//app.post("/login", (req, res) => {
	//res.redirect("/");
//}); 

app.get("/register", checkNotAuthenticated, (req, res) => {
	res.render("register.ejs")
});

app.post("/register", checkNotAuthenticated, async (req, res) => {
	try {
		const hashedPassword = await bcrypt.hash(req.body.password, 10)
		users.push({
		id: Date.now().toString(),
		//name: req.body.name,
		email: req.body.email,
		password: hashedPassword 
	})
	res.redirect("/login")
	} catch {
	res.redirect("/register")	
	}
	console.log(users);
});

app.delete("/logout", (req, res) => {
	req.logOut(); //function automatically added by Passport program
	res.redirect("/login");
})

function checkAuthenticated(req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}
	res.redirect("/login");
}


function checkNotAuthenticated(req, res, next) {
	if (req.isAuthenticated()) {
		return res.redirect('/');
	}
	next();
	
}
app.listen(3000);




