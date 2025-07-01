require("dotenv").config()
const express=require("express")
const app=require("./app")
const {connectDB}=require("./utils/db")
const fvrtCityModel=require("./models/favouriteCity")
const port=process.env.PORT

//DB Connection
connectDB()

app.listen(port,()=>{
    console.log(`Server connected to ${port}`)
})