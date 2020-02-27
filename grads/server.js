// Server.js

// Path module
// #4 Add Node Core module 'Path' to set the 'views' directory for pug.
const path = require('path');

//Imports
// #1 Import express
const express = require("express");

// #2 Import mongoose
const mongoose = require("mongoose");

// #3 This creates an instance of an express app 
// The 'app' variable represents the heart of your application it handles all routes, requests, responses, -
// - and modifacations you may set using various methods is containes.
const app = express();

// #8 load Enviroment Variables from the bash script execution.
// This is required to secure strings you DO NOT want anybody to see
// Commonly server info, database info, and keys for encryption & signing.
// Can be used for other things probably as well.
const PORT = process.env.PORT,
    DB = process.env.DB;


// #9 Import routes from the 'routes' directory and add them as middleware
// This is done for clean code purposes and you will see in ES.
const homeRoute = require("./routes/home_route"),
  graduatesRoute = require("./routes/graduates_route");

// #11 Add Express's JSON parser that parses incoming requests to JSON.
// This is required in order for your application to understand requests being sent in JSON from the client side.
// Otherwise the JSON being sent is just gibberish to the express application and it will likely throw errors in the console.
app.use(express.json());


// #5 Set the path for express view engine to a directory containing the views 'views/' then 
// pug should now be watching the 'public/views' directory.
// You do not need to import the pug package in any javascript file it runs as a CLI (Command Line Interface) on the backend,
// and express sends the rendered html to the client when a GET request is made to one of routes of this application.  
app.set("views", path.join(__dirname, 'views'));


// #6 Set the express view engine to pug
// This is refering to your app settings table see -> (http://expressjs.com/en/4x/api.html#app.settings.table)
// This sets the default view engine for your application. 
app.set("view engine", "pug");


// #7 Set middleware to watch the public directory 
// This middleware is based on npm 'serve-static' package see -> (http://expressjs.com/en/resources/middleware/serve-static.html)
// static so you can include all your static files that are used on the front end. 
app.use(express.static("public"))

// #6 Redirect to 'api/home' if url is requested at the root "/" route.
app.get("/", (req, res) => {
    res.redirect('api/home')
})

// # 10 Add imported route instance and connect it as a middleware 
// This is the equivalent of adding an anonymous funciton as a parameter like in #6
// It is more recomended to do it this way for obvious reasons. (Clean code) 
app.use("/api/home", homeRoute);
app.use("/api/graduates", graduatesRoute);

// # 12 Mongoose connection
// This is required in order to connect and access mongoose databse.
mongoose.connect(DB,
    {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true},
    () => {
    console.log(`Connected to ${DB}... `)
})

// # 13 Set server to listen on port.
// This is required for your server to run as a host service in the background.
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}... `)
})









