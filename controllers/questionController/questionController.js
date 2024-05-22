const questionModel=require('../../models/question/question');
module.exports={
    getQuestions: async(req,res)=>{
        console.log('Get Questions API has been hit');
        try{
            const questions= await questionModel.find({});
            return res.status(200).json(questions);
        } catch(error){
            return res.status(400).json({message:"Error Loading Questions"});
        }
    }
}