import express, { Router } from "express"
import {user} from "../controller/userController.js"

const router = express.Router()
router.post("/create", user)

export default router