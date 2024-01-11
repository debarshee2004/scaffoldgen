import express from "express";
import mongoose from "mongoose";

//Creating schema
const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true
    },
    name : {
        type:String,
        required:true,
        unique:true
    },
    email : {
        type:String,
        required:true,
        unique:true
    },
    password : {
        type:String,
        required:true,
        select:false
    },
    profileURL : {
        type : String
    },
    bio : {
        type : String,
        default : '-'
    },
    createdAt : {
        type: Date,
        default : Date.now
    }
})

//Creating collection
export const users = mongoose.model("BlogUser",userSchema)