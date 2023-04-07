const express = require("express");

const userRoute = express.Router();

userRoute.post("/login",async (req,res)=>{
    //logic
});


userRoute.post("/register",async (req,res)=>{
    //logic
});


module.exports = {
    userRoute
}