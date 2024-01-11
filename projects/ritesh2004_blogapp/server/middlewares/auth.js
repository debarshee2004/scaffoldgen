import jwt from "jsonwebtoken"
import { users } from "../models/users.js"
import ErrorHandler from "./err.js";

export const isAuthenticated = async (req,res,next) => {
    const { token } = req.cookies;
    // console.log(token)
    if (!token) {
        return res.status(404).json({
            message:"Login first"
        })
    }
    try {
        console.log(token)
        console.log(process.env.TOKEN_SECRET)
        const decoded = jwt.verify(token,process.env.TOKEN_SECRET)
        console.log(decoded)
        req.user = await users.findById(decoded._id)
        next() 
    } catch (error) {
        return next(new ErrorHandler(error))
    }
}