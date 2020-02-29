// Graduates Router 

const express = require('express'),
    router = express.Router(),
    Graduate = require('../models/graduate');

    router.get('/:id', async (req, res) => {    
        try{
        const graduate = await Graduate.findById(req.params.id);
        res.status(200).render('graduate',
        {
            graduate: {
                name: `${graduate.firstname} ${graduate.lastname}`,
                avatar: graduate.avatar,
                about: graduate.about,
                education: graduate.education,
                email: graduate.email,
                jobtitle: graduate.jobtitle
            } 
        })
        } 
        catch(err) {
            res.status(404).render('errors', {
                error: {
                    messge: "Error 404 Not found." 
                }
            })
        }
    })

    
module.exports = router;