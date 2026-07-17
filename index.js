import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { connectDb } from './utils/db.js';
import dns from 'dns';

dotenv.config()
dns.setServers(['8.8.8.8', '8.8.4.4']);

const app = express()
app.use(express.json());
app.use(morgan('dev'))

connectDb()

