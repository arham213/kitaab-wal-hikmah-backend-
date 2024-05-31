const questionModel=require('../../models/question/question');
module.exports={
    getQuestions: async(req,res)=>{
        console.log('Get ALL Questions API has been hit');
        try{
            const questions= await questionModel.find({});
            return res.status(200).json(questions);
        } catch(error){
            return res.status(400).json({message:"Error Loading Questions"});
        }
    },
    
    getQuestion: async(req,res)=>{
        console.log('Get One Question API has been hit');
        try{
            const question = await questionModel.findOne({_id:req.params.id});
            return res.status(200).json(question);
        } catch(error){
            return res.status(400).json({message:"Error loading the question"});
        }
    },

    getPendingQuestions: async(req,res)=>{
        console.log('Get Pending Questions API has been hit');
        try{
            const pendingQuestions=await questionModel.find({answered:false});
            return res.status(200).json(pendingQuestions);
        } catch(error){
            return res.status(400).json({message:"Error loading the pending questions"});
        }

    },

    sendAnswer: async(req,res)=>{
        console.log("Send Answer API has been hit");
        try{
            const answeredQuestion=await questionModel.findByIdAndUpdate(
                req.body.questionId, {answer:req.body.answer,answered:true},{new:true}
            )
            return res.status(200).json(answeredQuestion);
        } catch(error){
            return res.status(400).json({message:"Error Sending the Answer"});
        }
    }
}