const app = require("./app")
const connectDB = require("./database")

// Connect with mongoDB
connectDB()

// Starting app at port no - 4000
app.listen(4000,()=>{
    console.log("Server working at http://localhost:4000")
})