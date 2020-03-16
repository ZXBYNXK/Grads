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
                jobtitle: graduate.jobtitle,
                contact: graduate.contact
            } 
        })
        } 
        catch  {
            res.status(404).render('errors', {
                error: {
                    message: "Error 404 Not found." 
                }
            })
        }
    })
    router.put('/:id', async (req, res) => {    
        try {
            const updateFeilds = await Graduate.findOneAndUpdate({"_id": req.params.id}, { $set: req.body }) 
            console.log(updateFeilds)
            res.status(201).json({
                message: "Updated"
            })
        } catch  {
            res.status(500).json({
                message: "Update Failed"
            })
        }
    })

    router.delete('/:id', async (req, res) => {
        try {
            const deleteGraduate = await Graduate.findByIdAndRemove(req.params.id);
            res.status(200).json({
                message: "Account has been deleted!"
            })
        } catch {
            res.status(404).json({
                message: "Could not find account!"
            })
        }
    })
    router.use( (req, res) => {
        res.redirect("/api/home")
    })
    
module.exports = router;