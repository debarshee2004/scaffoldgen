const mongoose = require('mongoose')

// Defining user schema
const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    picture : {
        type : String,
        required : false
    }
})

// Making model for mongoDB
const users = mongoose.model('users',userSchema)

module.exports = users
