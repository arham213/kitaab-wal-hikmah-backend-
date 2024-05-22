const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const JWT_SECRET_KEY = "MyKey";

const userModel=require('../../models/user/user');
const questionModel=require('../../models/question/question');

module.exports={
    Signup: async (req,res) =>{
        console.log('Sign Up User API has been hit');

        //check if user already exists
        let oldUser;
        try{
            oldUser=await userModel.findOne({email:req.body.email});
        } catch (error){
            console.log(error);
        }
        if(oldUser){
            return res.status(400).json({message:"User already exists. Please Login"});
        }
        //otherwise create a new user
        const newUser=new userModel({
            fname:req.body.fname,
            lname:req.body.lname,
            email:req.body.email,
            password:bcrypt.hashSync(req.body.password),
        })
        
        //save the user in database
        try{
            await newUser.save();
        } catch (error) {
            console.log(error);
        }
        return res.status(201).json({message:newUser});
    },

    Login: async (req,res)=>{
        console.log('Login User API has been hit');
        //check if user has signed up
        let oldUser;
        try{
            oldUser= await userModel.findOne({email:req.body.email});
        } catch (error) {
            console.log(error);
        }
        if(!oldUser){
            return res.status(400).json({message:"User has not Signed Up. Please Sign Up first."});
        }

        const isPasswordCorrect = bcrypt.compareSync(req.body.password, oldUser.password);
        if(!isPasswordCorrect){
            return res.status(400).json({message: "Invaild Email/Password"})
        }

        return res.status(200).json({message: "Successfully Logged In", user: oldUser});

        // const token = jwt.sign({id: oldUser._id}, process.env.JWT_SECRET_KEY,{
        //     expiresIn: "35s" //1hr
        // });
        // console.log("Generated Token\n", token);
        // if (req.cookies[`${oldUser._id}`]) {
        //     req.cookies[`${oldUser._id}`] = ""
        // }
        // res.cookie(String(oldUser._id), token, {
        //     path:"/",
        //     expires: new Date(Date.now() + 1000 * 30),
        //     httpOnly: true,
        //     sameSite: "lax",
        // })
    
        // return res.status(200).json({message: "Successfully Logged In", user: oldUser, token});
    },

    Logout: async(req,res)=>{
        console.log('Logout User API has been hit');
        return res.json(200).json({message:"Successfully Logged Out"});
    },

    AskQuestion: async (req,res)=>{
        console.log('Ask Question API has been hit');
        //create a Question
        const newQuestion=new questionModel({
            fname:req.body.fname,
            lname:req.body.lname,
            email:req.body.email,
            question:req.body.question,
            answer:' ',
        });

        //save the question in database
        try{
            await newQuestion.save();
        } catch(error){
            return res.status(400).json({message:error});
        }
        return res.status(200).json({message:newQuestion});
    }
}