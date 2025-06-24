require("dotenv").config()
const express=require("express")
const app=express()
const cors=require("cors")
const mongoose=require("mongoose")

app.use(express.json())
app.use(cors())

app.get("/api",(req,res)=>{
    res.send("hello")
})
mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log("DB Connected succesfully")
})
.catch(error=>{
    console.log("Database not connected:",error)
})
const port=process.env.PORT
app.listen(port,()=>{
    console.log(`Server connected to ${port}`)
})