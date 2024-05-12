const express=require('express');
const router=express.Router();
const controller=require('../../controllers/questionController/questionController');

router.get('/getQuestions',controller.getQuestions);

module.exports=router;