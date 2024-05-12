const express=require('express');
const router=express.Router();
const controller=require('../../controllers/userController/userController');

router.post('/signup',controller.Signup);
router.post('/login',controller.Login);

module.exports=router;