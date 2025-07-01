const mongoose=require("mongoose")
const connectDB= async()=>{
    try{
        const mongouri=process.env.MONGODB_URI
        await mongoose.connect(mongouri,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log("Mongodb connected!!")

    }
    catch(err){
        console.log("Not connected:",err)
        process.exit(1)

        
    }
}
const disconnectDB=async()=>{
    try{
       await mongoose.disconnect()
       console.log("Disconnected")

    }
    catch(err){
        console.log("Uable to disconnect",err)

    }

}
module.exports={connectDB,disconnectDB}