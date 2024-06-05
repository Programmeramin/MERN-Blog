import User from "../model/user.model.js";
import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

/**
 * @description Sign up user
 * @route api/auth
 * @method POST
 * @access public
 */


export const SignUp = asyncHandler(async(req, res) =>{

    const {username,  email, password} = req.body;

    // validation
    if(!username || !email || !password){
        return res.status(400).json({message : "All field are required"});
    }

    // hash pass
    const hashPass = await bcrypt.hash(password, 10)

    const newUser = new User({
        username, 
        email,
        password : hashPass,
    });

     try {
        newUser.save();
        res.json("signup successful")

     } catch (error) {
        res.status(200).json({message : error.message});
     }

    
})

/**
 * @description Sign in user
 * @route api/auth
 * @method POST
 * @access public
 */


export const SignIn = asyncHandler(async (req, res) =>{

    const {email, password} = req.body;

    if(!email || !password || email == "" || password === ""){
        return res.status(400).json({message : "All field are required"})
    }

    try {
        const validUser = await User.findOne({email});
        if(!validUser){
            return res.status(404).json ({message : "User not found"})
        }

        // valid password
        const validPassword = bcrypt.compareSync(password, validUser.password);
        if(!validPassword){
            return res.status(404).json({message : "Wrong Password"})
        }

     
        const token = jwt.sign(
            {id : validUser._id}, process.env.JWT_SECRET);
            
            const {password : pass, ...rest} = validUser._doc;


            res.status(200).cookie("access_token", token, {
                httpOnly : true,
            }).json(rest)
       
    } catch (error) {    
          
    }    

})


export const google = asyncHandler(async (req, res) =>{

    const {name, email, googlePhotoUrl} = req.body;

    try {
        const user = await User.findOne({email});

        if(user){
            const token = jwt.sign({id : user._id}, process.env.JWT_SECRET);
            const {password, ...rest} = user._doc;
            res.status(200).cookie("access_token", token, {
                httpOnly : true,
            }).json(rest);
        }else{
            const generatedPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);

            const hashPass = bcrypt.hashSync(generatedPassword, 10);

            const newUser = new User ({  
                username : name.toLowerCase().split("").join("") + Math.random().toString(9).slice(-4),
                email,
                password : hashPass,
                profilePicture :  googlePhotoUrl
            });   

            await newUser.save();
            const token = jwt.sign({id : newUser._id}, process.env.JWT_SECRET);
            const {password , ...rest} = newUser._doc;
            res.status(200).cookie("access_token", token, {
                httpOnly : true
            }).json(rest);
        }
    } catch (error) {
            
    }

})