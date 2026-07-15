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

app.get("/", (req, res) => {
    res.send("hello backend!")
})
const PORT = process.env.PORT || 3000
app.listen(PORT, (req, res) => {
    console.log(`Server is runnning on port ${PORT}`);
})



// const data = [{
//     name: "ali",
//     rollno: 10,
//     isActive: true
// },
// {
//     name: "ali 2",
//     rollno: 13,
//     isActive: false
// }, {
//     name: "ali 3",
//     rollno: 18,
//     isActive: true
// }]

// app.get("/data",(req,res)=>{
//    res.send(data)
//    console.log(data);

// })

app.get("/data", (req, res) => {
    res.send(data)
    console.log(data);

})

const data = [];
app.post("/postdata", (req, res) => {
    res.status(201).send({ message: "data posted" })
    data.push(req.body)
})

connectDb()

// const data =[];
// app.post("/post-data",(req,res)=>{
//    res.status(201).send({message:"data posted"})
//     data.push(req.body)
//    console.log("data => ",req.body);
// })


// import express from 'express'
// const app = express();
// app.use(express.json());
// app.get("/",(req,res) => {
//     res.send("hello world!")
// })
// const PORT = 3000;
// app.listen(PORT,() =>{
//   console.log("Server is running");
// });

// import express from 'express'
// const app = express()=
// app.use(express.json());
// app.get("/",(req,res) => {
//     res.send("hello backend!")
// })
// const PORT = 3000
// app.listen(PORT,(req,res) => {
//     console.log("Server is runnning!");
// })




