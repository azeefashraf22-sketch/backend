import express, { Router } from "express"
import { user } from "../controller/userController.js"
import { login } from "../controller/loginController.js"

const router = express.Router()

router.post("/create", user)

router.post("/login", login)

export default router