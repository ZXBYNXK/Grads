// Home Router

// #1 Create an instance of an express router
// Think of this sort of as a sub router.
// And the main router is allready decleared in the 'server.js' file.
const express = require("express"),
  router = express.Router();

// #3 Imported Graduate Schema
// This is required in order to perform CRUD (Create Read Update Delete) operations
// on collections and or documents in Mongoose Database.
// A collection is an array of documents.
// [ {..Document..}, {..Document..} ]'
// A document is a clone of your set Mongoose Schema
// Documents can also contain sub documents as well.
const Graduate = require("../models/graduate");

// #4 Created a GET route for 'http://localhost:port/api/home' (Root)
// This route handler renders the 'index.pug' file in the views directory,
// when the client accesses the page 'http:localhost:port/api/home'
// it should show the index.pug page rendered to the DOM.
router.get("/", (req, res) => {
  res.status(200).render("index");
});

// #6 Create a GET route 'http:/localhost:port/api/home/all'
// so the client can get all graduates back in an array when
// this resource is accessed.
// This is useful when you want to display and interact with data
// on the frontend.
router.get("/all", async (req, res) => {
  try {
    const allGraduates = await Graduate.find();
    res.status(200).json(allGraduates);
  } catch (err) {
    res.status(500).render("errors", {
      error: {
        message: "500 Server error."
      }
      });
  }
});

// #5 Create a post route for new graduates.
// In this route the client will send a HTTP POST request
// to this endpoint and a new graduate should be saved
// to the database. If not then the catch block should
// execute its response.
router.post("/", async (req, res) => {
  let {
    firstname,
    email,
    lastname,
    avatar,
    education,
    jobtitle,
    about
  } = req.body;

  email = email.toLowerCase();
  
  
  const request = {
    avatar,
    firstname,
    lastname,
    email,
    about,
    education,
    jobtitle
  };
  const newUser = new Graduate(request);
    console.log(newUser)
  try {
    console.log("Attempting post request.");
    const savedUser = await newUser.save();
    console.log(savedUser);
    res.status(201).json({
      message: `Thank you ${req.body.firstname}!`
    });
  } catch (error) {
    res.status(401).json({
      message: "Please fill out the required feilds"
    });
  }
});
router.use( (req, res) => {
  res.redirect("/api/home")
})
//#2 Export the router to server.js
module.exports = router;
