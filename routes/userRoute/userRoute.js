const express=require('express');
const router=express.Router();
const controller=require('../../controllers/userController/userController');

router.post('/signup',controller.Signup);
router.post('/userlogin',controller.UserLogin);
router.post('/adminlogin',controller.AdminLogin);
router.get('/logout',controller.Logout);
router.post('/askQuestion',controller.AskQuestion);

module.exports=router;