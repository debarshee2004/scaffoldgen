import ErrorHandler from "../middlewares/err.js";
import { blogs } from "../models/blogs.js";

export const getAllblogs = async (req, res, next) => {
    try {
        const allBlogs = await blogs.find({})
        res.status(200).json({
            success: true,
            blog: allBlogs
        })
    } catch (error) {
        next(new ErrorHandler(error))
    }
}

export const getMyblogs = async (req, res, next) => {
    try {
        const myBlogs = await blogs.find({ user: req.user._id })
        res.status(200).json({
            success: true,
            blog: myBlogs
        })
    } catch (error) {
        next(new ErrorHandler(error))
    }
}

export const getBlog = async (req, res, next) => {
    const { id } = req.params
    try {
        const blog = await blogs.find({ _id: id })
        res.json({
            success: true,
            blog
        })
    } catch (error) {
        next(new ErrorHandler(error))
    }
}

export const uploadBlog = async (req, res, next) => {
    const { title, description, imageURL } = req.body
    try {
        await blogs.create({ title, description, imageURL, user: req.user })
        res.json({
            message: "Blog created"
        })
    } catch (error) {
        next(new ErrorHandler(error))
    }
}

export const updateBlog = async (req, res, next) => {
    const { title, description, imageURL } = req.body
    const { id } = req.params
    try {
        const resp = await blogs.findByIdAndUpdate(id, {
            title,
            description,
            imageURL
        })
        res.json({
            message: "Blog updated"
        })
    } catch (error) {
        next(new ErrorHandler(error))
    }

}

export const deleteBlog = async (req, res, next) => {
    const { id } = req.params;
    try {
        await blogs.findByIdAndDelete(id)
        res.json({
            success: true,
            message: "Blog deleted"
        })
    } catch (error) {
        next(new ErrorHandler(error))
    }
}