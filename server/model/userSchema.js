const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keysecret= process.env.KEY


//unique implies it should be uique in entire daatabase
const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
       
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("not valid email address");
            }
        }
    },
    mobile: {
        type: String,
        required: true,
   
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    cpassword: {
        type: String,
        required: true,
        minlength: 6
    },
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ],
    count:Array
});


// password hasing 
userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword = await bcrypt.hash(this.cpassword, 12);
    }
    next();
});

//generate token
//token has payload header and secret key....id is here payoad..
//after password matching we will be calling this function.
userSchema.methods.generatAuthtoken = async function(){
    try {
        let token = jwt.sign({ _id:this._id},keysecret);
        //for adding token to schema i.e array tokens we are using concat method of array
        this.tokens = this.tokens.concat({token:token});
        await this.save();
        return token;

    } catch (error) {
        console.log(error);
    }
}


const User = new mongoose.model("USER", userSchema);

module.exports = User;
