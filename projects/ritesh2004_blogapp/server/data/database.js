import mongoose from "mongoose";

//Creating database

const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "myDB"
    })
        .then((resp) => {
            console.log(`Database connected at ${resp.connection.host}`)
        })
        .catch((e)=>console.log(e))
}


export default connectDB