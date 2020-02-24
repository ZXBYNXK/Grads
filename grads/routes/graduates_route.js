// Graduates Router 

const express = require('express'),
    router = express.Router();


    router.get('/', (req, res) => {
        res.status(200).render('graduate',
        {
            data: {
                title: 'Grads'
            } 
        })
    })

    
module.exports = router;