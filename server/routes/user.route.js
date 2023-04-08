const express = require("express");
const userRoute = express.Router();
const USER=require('../model/userSchema')
const bcrypt = require("bcryptjs");
const authenicate=require('../middleware/authenticate')
userRoute.post("/login",async (req,res)=>{
    //logic
    console.log(req.body);
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).json({error: "fill all the details" });
    }
    try {

        const userlogin = await USER.findOne({ email: email });
        console.log(userlogin);
        if (userlogin) {
            const isMatch = await bcrypt.compare(password, userlogin.password);
            console.log(isMatch);


            //token generate in schema
            //here we are calling the function that we wrote in schema for generatig token that is returning token
            

            if (!isMatch) {
                res.status(400).json({ error: "invalid crediential pass" });
            }
             else {
                
                

           
                res.status(201).json(userlogin);
            }
            

        }else {
            const token = await userlogin.generatAuthtoken();
            console.log(token);
            res.cookie("mycoookieforamazonclone", token, {
                expires: new Date(Date.now() + 2589000),
                httpOnly: true
            });

            console.log("invalid details")
            res.status(400).json({"error": "invalid details" });
        }
        
    } catch (error) {
        res.status(400).json({ error: "invalid crediential pass" });
        console.log("error the bhai catch ma for login time" + error.message);
    }
    
});


userRoute.post("/register",async (req,res)=>{
    //logic
        // console.log(req.body)
        const { fname, email, mobile, password, cpassword } = req.body;
        if (!fname || !email || !mobile || !password || !cpassword) {
            res.status(400).json({ error: "filll the all details" });
            console.log("All the fields must be present");
    
        };
        try{
    
            //if uuser already present or not
            const preuser = await USER.findOne({ email: email });
            if (preuser) {
                res.status(422).json({ error: "This email is already exist" });
            } else if (password !== cpassword) {
                res.status(422).json({ error: "password are not matching" });;
        }else {
    
            const finaluser = new USER({
                fname, email, mobile, password, cpassword
            });
    
            // hasing should be done here before saving data in database
    //save method is used to insert a single document 
            const storedata = await finaluser.save();
            console.log(storedata + "user successfully added");
            res.status(201).json(storedata);
        }}
        catch(error){
            console.log("Please try Again!!!" + error.message);
            res.status(422).send(error);
        }
});


userRoute.get("/validuser",authenicate,async(req,res)=>{
    try{
const validuserone=await USER.findOne({_id:req.userID})
res.status(201).json(validuserone)
    }
    catch(error){
        console.log("error"+ error)
    }
})

module.exports = {
    userRoute
}