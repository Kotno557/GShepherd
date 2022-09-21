const express= require("express");
const app=express();
const PORT=3000;
app.get("/",function(req,res){
    res.send("hello world.");
});

app.listen(PORT,function(err){
    if(err) console.log(err);
    console.log("listen on Port: ",PORT);
});