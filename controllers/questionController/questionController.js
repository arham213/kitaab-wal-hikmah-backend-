const questionModel=require('../../models/question/question');
module.exports={
    getQuestions: async(req,res)=>{
        try{
            const questions= await questionModel.find({});
            return res.status(200).json(questions);
        } catch(error){
            return res.status(400).json({message:"Error Loading Questions"});
        }
    }
}