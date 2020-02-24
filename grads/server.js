// Server.js
// Import files and setup mongoose & express server to lisiten on a port.
// - And set up view engine Will be using 'Pug'


// Path module
// #4 Add Node Core module 'Path' to set the 'views' directory for pug.
const path = require('path');

//Imports
// #1 Import express node package
const express = require("express");

// #2 Import mongoose node package
const mongoose = require("mongoose");

// #3 This creates an instance of an express app -> The root of your server that handles all routes, requests and responses.
const app = express();

// #8 load Enviroment Variables from the export command you set.
const PORT = process.env.PORT,
    DB = process.env.DB;


// # Import routes from the 'routes' directory and add them as middleware.
const homeRoute = require("./routes/home_route"),
  graduatesRoute = require("./routes/graduates_route");

// # Add Express's JSON parser that parses incoming requests to JSON.
app.use(express.json());


// #5 Set the express view engine to pug
app.set("view engine", "pug");

// #6 Set the path for express view engine to a directory containing the views 'publi/views' and 
// the pug node package should now be watching the 'public/views' directory  
app.set("views", path.join(__dirname, 'public/views'));

// #8 Set middleware to watch the public directory as static so you can include all your static files that
// are used on the front end. 
app.use(express.static("public"))

// # Redirect to 'api/home' if url is requested at the root "/" route.
app.get("/", (req, res) => {
    res.redirect('api/home')
})

// # 
app.use("/api/home", homeRoute);

// #
app.use("/api/graduates", graduatesRoute);

// #
mongoose.connect(DB,
    {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true},
    () => {
    console.log(`Connected to ${DB}... `)
})

// #
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}... `)
})









