import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "users",
        required : true
    },
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    imageURL : {
        type : String,
        required : true
    },
    editorsPick : {
        type : Boolean,
        default : false
    },
    createdAt : {
        type : Date,
        default : Date.now
    }
})

export const blogs = mongoose.model("blogs",blogSchema)