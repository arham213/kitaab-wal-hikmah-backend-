const express=require('express');
const router=express.Router();
const controller=require('../../controllers/questionController/questionController');

router.get('/getQuestions',controller.getQuestions);
router.get('/getQuestion/:id',controller.getQuestion);
router.get('/getPendingQuestions',controller.getPendingQuestions);
router.put('/sendAnswer', controller.sendAnswer)

module.exports=router;