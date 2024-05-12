const mongoose=require('mongoose');
const schema=mongoose.schema();

const questionSchema=new schema({
    question:{
        type:String,
        required:true
    },
    answer:{
        type:String,
        required:true
    },
    data:{
        type:Date,
        require:true
    }
})

module.exports=mongoose.model('question',questionSchema);