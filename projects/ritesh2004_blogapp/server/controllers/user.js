import { users } from "../models/users.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import ErrorHandler from "../middlewares/err.js"

export const getAllusers = async (req, res, next) => {
    try {
        const usersCollection = await users.find({})
        res.status(200).json({
            success: true,
            users: usersCollection
        })
    } catch (error) {
        next(new ErrorHandler(error))
    }
}

export const login = async (req, res, next) => {
    const { email, password } = req.body;
    const isData = email && password
    try {
        if (!isData) {
            return next(new ErrorHandler("Insufficient Data", 400))
        }
        const user = await users.findOne({ email }).select("+password");
        if (!user) {
            return next(new ErrorHandler("User not registered", 401))
        }
        const isMatched = await bcrypt.compare(password,user.password)
        if (!isMatched) {
            return next(new ErrorHandler("Invalid Password", 401))
        }
        const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET)
        res
            .cookie("token", token, {
                httpOnly: true,
                maxAge : 60 * 24 * 7 * 60 * 1000,
                sameSite : process.env.NODE_ENV === "Development" ? "lax" : "none",
                secure : process.env.NODE_ENV === "Development" ? false : true
            })
            .status(200).json({
                success: true,
                message: "Logged in successfully"
            })
    } catch (error) {
        next(new ErrorHandler(error))
    }
}

export const createUser = async (req, res, next) => {
    const { name, email, password,username,profileURL,bio } = req.body
    const isData = name && email && password
    try {
        if (!isData) {
            return next(new ErrorHandler("Insufficient Data", 400))
        }
        let user = await users.findOne({ email })
        if (user) {
        res.header('Access-Control-Allow-Origin',"*")
            return res.status(405).json({
                success: false,
                message: "User already exists"
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        user = await users.create({
            username,
            name,
            password: hashedPassword,
            email,
            profileURL,
            bio
        })

        const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET)
        res
            .cookie("token", token, {
                httpOnly: true,
                maxAge : 60 * 24 * 7 * 60 * 1000,
                sameSite : process.env.NODE_ENV === "Development" ? "lax" : "none",
                secure : process.env.NODE_ENV === "Development" ? false : true
            })
            .status(200).json({
                success: true,
                message: "User registered successfully"
            })
    } catch (error) {
        next(new ErrorHandler(error))
    }
}

export const getUser = async (req, res, next) => {
    const { id } = req.params;
    try {
        const user = await users.findById(id)
        res.json({
            success: true,
            user
        })
    } catch (error) {
        return next(new ErrorHandler(error))
    }
}

export const getMe = (req, res) => {
    res.json({
        success: true,
        user: req.user
    })
}

export const logout = (req, res) => {
    res.cookie("token", "", {
        httpOnly: true,
        maxAge: new Date(Date.now()),
        sameSite : process.env.NODE_ENV === "Development" ? "lax" : "none",
        secure : process.env.NODE_ENV === "Development" ? false : true
    }).json({
        success: true,
        message: "Logged out"
    })
}

export const updateUser = async (req,res,next) => {
    const { bio } = req.body;
    const { id } = req.params;
    try {
        const resp = await users.findByIdAndUpdate(id,{
            bio
        })
        res.json({
            success : true,
            message : "Profile updated"
        })
    } catch (error) {
        return next(new ErrorHandler(error))
    }
}