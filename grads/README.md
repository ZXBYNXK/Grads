# 🎓Grads

<pre>
Development Process  
Last Updated: 2/28/20
</pre>

## Sections:

1. [Installation & set up of express mongoose and pug](#1-setup-project-structure-and-installing-dependencies)

2. [Nodejs setup for Express, Mongoose, Pug & Enviroment Variable](#2-nodejs-setup-for-express-mongoose-pug-and-enviroment-variables)

3. [Setup routes and middlewares required for the main server file](#3-setup-routes-and-middlewares-required-for-the-main-server-file)

4. [Create a Mongoose schema for new graduates](#4-create-a-mongoose-schema-for-new-graduates)

5. [Create pug files for the frontend in the views directory](#5-create-pug-files-for-the-frontend-in-the-views-directory)

6. [Create Stylesheet and JavaScript files in the public directory.](#6-create-stylesheet-and-javaScript-files-in-the-public-directory)

7. [Create the route handlers and endpoints to home page](#7-create-the-route-handlers-and-endpoints-for-the-home-page)

8. [Building the front end layout](#8-building-the-frontend-layout)

## Under the hood:

A Full stack application using Express Mongoose Pug and Nodejs.
Create various route endpoints to to interact with Express.
Save users to the Mongoose Database using the npm package mongoose.
(no mongoose is not made by MongoDB, but ontop of the MongoDB Drivers). <bre>
Form sign up features and sending the data to the back end via HTTP Requests -> (GET, POST, PUT, DELETE)
&nbsp;
&nbsp;

<hr>

## 1. Setup project structure and installing dependencies

<hr>

### // Initialize a package.json file

### // Command

### // npm init -y

### // Install Express

### // Command

### // npm i expres### s

### // Install Mongoose

### // Command

### // npm i mongoo### se

### // Install pug

### // Command

### // npm i pug <b### r>

### // Create a server.js, app.js or index.js file (Main server file)

### // Commands

### // Visual Studio### Code: code server.js

### // touch server.js -> Then open in editor

### // Create a public directory (Static files)

### //Command

### // mkdir publi### c

### // Create a views directory (for pug files)

### // Command

### // mkdir views

### // Create a routes directory

### // Command

### // mkdir routes

### // Create a models directory (mkdir models).

### // Commmand

### // mkdir models

### // Open server.js

&nbsp;
&nbsp;

<hr>

## 2. Nodejs setup for Express Mongoose Pug and Enviroment Variables

<hr>

### // Import express from node_modules

### // #1 in [server.js](https://github.com/DariusRain/Grads/blob/master/grads/server.js)

```javascript
const express = require("express");
```

### // Import mongoose from node_modules

### // #2 in [server.js](https://github.com/DariusRain/Grads/blob/master/grads/server.js)

```javascript
const mongoose = require("mongoose");
```

### // Create an instance of an express application

### // #3 in [server.js](https://github.com/DariusRain/Grads/blob/master/grads/server.js)

```javascript
const app = express();
```

### // Import the path core module

### // #4 in [server.js](https://github.com/DariusRain/Grads/blob/master/grads/server.js)

```javascript
const path = require("path");
```

### // Set the view engine for express to pug

### // #5 in [server.js](https://github.com/DariusRain/Grads/blob/master/grads/server.js)

```javascript
app.set("views", path.join(__dirname, "views"));
```

### // Set the express view-engine to pug

### // #6 in in [server.js](https://github.com/DariusRain/Grads/blob/master/grads/server.js)

```javascript
app.set("view engine", "pug");
```

### // Use the express.static() for the public directory.

### // #7 in [server.js](https://github.com/DariusRain/Grads/blob/master/grads/server.js)

```javascript
app.use(express.static("public"));
```

### // Create a bash script outside of the project, a quick tool to set enviroment variables.

### // Commands

### // nano ../bash/### set_enviroment_development.sh

```bash
    #!/bin/bash
    export DB=yourDatabaseConnectionStringHere
    export PORT=setPort
    export NODE_ENV=development
    echo 'Set the enviroment to development'
```

### // Ctrl + s (Save)

### // Ctrl + x (Exit)

### // . ../bash/set_enviro### ment_development.sh

### // The '.' states the current directory you are### in & the path to the bash script you want to execute

### // Should see message from the script that it is set to a specific enviroment.

### // Now assign the enviroment variables value using 'process.env'

### // #8 in [server.js](https://github.com/DariusRain/Grads/blob/master/grads/server.js)

```javascript
const PORT = process.env.PORT,
  DB = process.env.DB;
```

### // Now use the above values to connect to cloud or local database & set server to listen on a port.

### // #12 - #13 in [server.js](https://github.com/DariusRain/Grads/blob/master/grads/server.js)

```javascript
mongoose.connect(
  DB,
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true },
  () => {
    console.log(`Connected to ${DB}... `);
  }
);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}... `);
});
```

&nbsp;
&nbsp;

<hr>

## 3. Setup routes and middlewares required for the main server file

<hr>

### // Create a home route

### // Commands

### // Visual Studio### Code: code routes/home_route.js

### // touch routes/home_route.js

### // Write to 'home_route.js' and create an instance of an express router to be exported

### // #1 in [routes/home_route.js](https://github.com/DariusRain/Grads/blob/master/grads/routes/home_route.js)

```javascript
const express = require("express"),
  router = express.Router();
```

### // Export that router, then now available for import in any nodejs file.

### // #2 in [routes/home_route.js](https://github.com/DariusRain/Grads/blob/master/grads/routes/home_route.js)

```javascript
module.exports = router;
```

### // Then import and use that router as middleware in the server.js file

### // #9 & #10 in [server.js](https://github.com/DariusRain/Grads/blob/master/grads/server.js)

```javascript
const homeRoute = require("./routes/home_route"),
  graduatesRoute = require("./routes/graduates_route");

app.use("/api/home", homeRoute);
app.use("/api/graduates", graduatesRoute);
```

### // Use built-in express middleware called express.json() so incoming requests can be parsed.

### // #11 in [server.js](https://github.com/DariusRain/Grads/blob/master/grads/server.js)

```javascript
app.use(express.json());
```

&nbsp;
&nbsp;

<hr>

## 4. Create a Mongoose schema for new graduates

<hr>

### // Create graduate.js file in the models directory

### // Commands

### // Visusal Studi### o Code: code models/graduate.js

### // touch models/graduate.js (Then open it)

### // Import mongoose and use mongoose.Schema() syntax to make a schema

### // #1 in [models/graduate.js](https://github.com/DariusRain/Grads/blob/master/grads/models/graduate.js)

```javascript
const mongoose = require("mongoose"),
  GraduateSchema = new mongoose.Schema({
    avatar: {
      type: String,
      default: "https:### //bit.ly/2wzdL2x"
    },###
    firstname: {
      type: String,
      required: true
    },
    lastname: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    about: {
      type: String,
      default: "N/A",
      min: 10
    },
    education: {
      type: String,
      default: "N/A",
      min: 5
    },
    jobtitle: {
      type: String,
      min: 1,
      default: "N/A"
    }
  });
```

### // Export the schema with the mognoose.model() syntax

### // #2 in [models/graduate.js](https://github.com/DariusRain/Grads/blob/master/grads/models/graduate.js)

```javascript
module.exports = mongoose.model("Graduate", GraduateSchema);
```

### // Import the model in routes/home_route.js

### // #3 in [routes/home_route.js](https://github.com/DariusRain/Grads/blob/master/grads/routes/home_route.js)

```javascript
const Graduate = require("../models/graduate");
```

&nbsp;
&nbsp;

<hr>

## 5. Create pug files for the frontend in the views directory

<hr>

### // Create a index.pug file

### // Commands

### // touch or code### views/index.pug

### // Create a graduate.pug file

### // Commands

### // touch or code### views/graduate.pug

### // Create a errors.pug file

### // Commands

### // touch or code### views/errors.pug

### // See [views/](https://github.com/DariusRain/Grads/blob/master/grads/views)

###

&nbsp;
&nbsp;

<hr>

## 6. Create Stylesheet and JavaScript files in the public directory

<hr>

### // Add a script.js and stylesheet.css file in public directory

### //Commands

### // touch or cod### e public/script.js

### // touch or code public/stylesheet.css

### // See [public/script.js](https://github.com/DariusRain/Grads/blob/master/grads/public/index.js") & [public/stylesheet.css](https://github.com/DariusRain/Grads/blob/master/grads/public/styles.css)

&nbsp;
&nbsp;

<hr>

## 7. Create the route handlers and endpoints for the home page

<hr>

### // Open [routes/home_route.js](https://github.com/DariusRain/Grads/blob/master/grads/routes/home_route.js)

###

### // Create a GET route for the root route for the '/api/home' endpoint and have it render index.pug

### // See #4 in [routes/home_route.js](https://github.com/DariusRain/Grads/blob/master/grads/routes/home_route.js)

```javascript
router.get("/", (req, res) => {
  res.status(200).render("index");
});
```

### // Create a POST route to the same endpoint '/api/home' for new graduates.

### // See #5 in [routes/home_route.js](https://github.com/DariusRain/Grads/blob/master/grads/routes/home_route.js)

```javascript
router.post("/", async (req, res) => {
  const newUser = new Graduate(req.body);
  try {
    console.log("Attempting post request.");
    const savedUser = await newUser.save();
    res.status(201).json({
      message: `Thank you ${req.body.firstname}!`
    });
  } catch (error) {
    res.status(401).json({
      message: "Please fill out the required feilds"
    });
  }
});
```

### // Create a GET route with an extended endpoint 'api/home/all'.

### // See #6 in [routes/home_route.js](https://github.com/DariusRain/Grads/blob/master/grads/routes/home_route.js)

```javascript
router.get("/all", async (req, res) => {
  try {
    const allGraduates = await Graduate.find();
    res.status(200).json(allGraduates);
  } catch (err) {
    res.status(500).render("errors", {
      error: "500 Server error."
    });
  }
});
```

&nbsp;
&nbsp;

<hr>

## 8. Building the frontend layout

<hr>

### // Initial set up for any html doc - open index.pug in editor (Pug ~ Landing Page)

### // See #1 - #4 in [views/index.pug](https://github.com/DariusRain/Grads/blob/master/grads/views/index.pug)

###

### // Import public static files to index.pug: [public/script.js](https://github.com/DariusRain/Grads/blob/master/grads/public/index.js") & [public/stylesheet.css](https://github.com/DariusRain/Grads/blob/master/grads/public/styles.css)

### // See #5 in [views/index.pug](https://github.com/DariusRain/Grads/blob/master/grads/views/index.pug)

###
