const express= require("express"),
    UserRouter = require('./module/user');
const app=express();
const PORT=3000;
app.get("/",function(req,res,next){
    res.send("hello world.");
});

app.use("/user",UserRouter);

app.listen(PORT,function(err){
    if(err) console.log(err);
    console.log("listen on Port: ",PORT);
});