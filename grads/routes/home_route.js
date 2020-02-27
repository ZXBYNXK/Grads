
// Graduates Router 

// #1 Create an instance of an express router
// Think of this sort of as a sub router.
// And the main router is allready decleared in the 'server.js' file.
const express = require('express'),
    router = express.Router();

// #3 Imported Graduate Schema
// This is required in order to perform CRUD (Create Read Update Delete) operations 
// on collections and or documents in Mongoose Database.
// A collection is an array of documents.
// [ {..Document..}, {..Document..} ]' 
// A document is a clone of your set Mongoose Schema
// Documents can also contain sub documents as well.
const Graduate = require('../models/graduate');
    
// # 
    router.get('/', (req, res) => {
            res.status(200).render('index')    
    })

// #
    router.get('/all', async (req, res) =>{
        try {
            const allGraduates = await Graduate.find()
            res.status(200).json(allGraduates)
        }
        catch (err) {
            res.status(500).render('errors',
            {
                error: '500 Server error.'
            })       
        }
    })

// #    
    router.post('/', async (req, res) => {
        console.log(req.body)
        const newUser = new Graduate(req.body)
        try {
            console.log('Attempting post request.')
            const savedUser = newUser.save();
            res.status(201).json({
                message: `Thank you ${req.body.firstname}!`
            })
        }
        catch (error) {
            res.status(401).json({
                message: 'Please fill out the required feilds'
            })
        }
    })

//#2 Export the router to server.js
module.exports = router;