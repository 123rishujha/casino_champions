const express = require("express");
require("dotenv").config();
const cors = require("cors")

//files
const { userRoute } = require('./routes/user.route');
const { connection } = require("./connection");


const app = express();


app.use(express.json());
app.use(cors());

app.use("/user",userRoute);



app.listen(process.env.port,async ()=>{
    try{
        await connection;
        console.log("connected to database");
    }
    catch(err){
        console.log("not connected to database",err);
    }
    console.log(`running on port ${process.env.port}`);
})

