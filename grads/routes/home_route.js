// Graduates Router 

// #1 Create an instance of an express router
const express = require('express'),
    router = express.Router();

// #3 Imported Graduate Schema
const Graduate = require('../models/graduate');
    
    
    router.get('/', (req, res) => {
            res.status(200).render('index',
            {
                data: {
                    title: 'Grads'
                }
            })    
    })


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
    
    router.post('/', async (req, res) => {
        console.log(req.body)
        const newUser = new Graduate(req.body)
        try {
            console.log('Attempting post request.')
            const savedUser = newUser.save();
            res.status(201).json({
                message: `Successfuly added ${savedUser}`
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