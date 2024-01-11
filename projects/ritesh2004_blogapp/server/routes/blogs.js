import express from "express";
import { deleteBlog, getAllblogs, getBlog, getMyblogs, updateBlog, uploadBlog } from "../controllers/blogs.js";
import { isAuthenticated } from "../middlewares/auth.js";


const router = express.Router();

router.get("/blogs/all",getAllblogs)

router.get("/blogs/my",isAuthenticated,getMyblogs)

router.get("/blog/:id",isAuthenticated,getBlog)

router.post("/blog/add",isAuthenticated,uploadBlog)

router.post("/blog/edit/:id",isAuthenticated,updateBlog)

router.get("/blog/delete/:id",isAuthenticated,deleteBlog)


export default router