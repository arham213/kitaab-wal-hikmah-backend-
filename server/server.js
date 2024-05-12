const express =require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const userRouter=require('./../routes/userRoute/userRoute');
const questionRouter=require('../routes/questionRoute/questionRoute');
const cors = require('cors');
mongoose.connect('mongodb://localhost:27017/testdb').then(()=>{
    console.log("MongoDB Connected Sucessfully");
})

app=express();
app.use(bodyParser.json());

app.use(cors());

app.use('/',userRouter);
app.use('/',questionRouter);

var PORT=8080;
app.listen(PORT,()=>{
    console.log(`Server is listening at Port No: ${PORT}`);
})