import express from "express"
import { createUser, getAllusers, getMe, getUser, login, logout, updateUser } from "../controllers/user.js"
import { isAuthenticated } from "../middlewares/auth.js"

const router = express.Router()

router.get('/users/all',getAllusers)

router.get('/user/:id',getUser)

router.post('/user/logout',isAuthenticated,logout)

router.post('/user/add',createUser)

router.post('/user/login',login)

router.post('/user/verify',isAuthenticated,getMe)

router.post('/user/update/:id',isAuthenticated,updateUser)


export default router