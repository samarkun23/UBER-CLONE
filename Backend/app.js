import dotenv from 'dotenv'
dotenv.config();
console.log()  //this is step ko deklena

import express from 'express'
import cors from 'cors'
const app = express();
import connectToDb from './db/db.js';

connectToDb();

app.use(cors());



app.get('/', (req,res) => {
    res.send('Hello world');
});

export default app;