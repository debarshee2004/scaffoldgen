const mongoose = require("mongoose")

const connectDB = () => {
    // Connect mongoDB database
    // Replace the MongoDB connection URI with your own
    mongoose.connect('mongodb://127.0.0.1:27017',{
        dbName : 'testDB'
    })
    .then((resp)=>{
        // Success message for connecting with mongoDB
        console.log(`Database Connected at ${resp.connection.host}`)
    })
    .catch((err)=>{console.log(err)}) // Error message for not conneting mongoDB
}

module.exports = connectDB