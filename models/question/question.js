const mongoose=require('mongoose');

const questionSchema=new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    question:{
        type:String,
        required:true
    },
    answer:{
        type:String,
        required:true
    },
    date:{
        type:String,
        default:new Date()
    },
    answered:{
        type:Boolean,
        default:false
    }
})

module.exports=mongoose.model('question',questionSchema);