const express=require("express")
const app=express()

app.get("/endpoint",(req,res)=>{
    res.send("backend na ipdi irukanum")

})
app.get("/user",(req,res)=>{
    res.send("inga yaarum illa")
})


//######################################################

app.listen(3000,()=>{console.log("server listening on port 3000")})