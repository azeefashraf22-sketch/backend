import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { connectDb } from './utils/db.js';
import dns from 'dns';
// import { user } from './controller/userController.js';
import userRouter from './router/userRouter.js';

dotenv.config()
dns.setServers(['8.8.8.8', '8.8.4.4']);

const app = express()
app.use(express.json());
app.use(morgan('dev'))

const PORT = process.env.PORT || 5000

connectDb()
app.use("/api/v1/user", user)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})