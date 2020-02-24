//Graduate Schema

    // # 1 Import mongoose then create a mongoose schema.
    const mongoose = require('mongoose'),
        GraduateSchema = new mongoose.Schema({
          
          
            avatar: {
                type: String,
                default: 'https://bit.ly/2wzdL2x'
            },
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
            jobtitle: {
                type: String,
                default: 'N/A'
            }
            
        });

    module.exports = mongoose.model('Graduate', GraduateSchema)
