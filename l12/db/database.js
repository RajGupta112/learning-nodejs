import mongoose  from "mongoose";
const connectdB = async ()=>{
  try{
    await mongoose.connect(process.env.MONGO_URI);
  }catch(error){
    console.log(error)
  }
}

export default connectdB