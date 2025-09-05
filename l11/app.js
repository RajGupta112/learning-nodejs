import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
const app = express();

// load env variables
dotenv.config();   // ✅ added ()


// app.use(function(req,res,next){
//   console.log("Middleware 1");
//   next();
// })  // middleware
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}));
const PORT = process.env.PORT || 3000;
app.post("/register",(req,res)=>{
  const obj=req.body;
  console.log(obj);
  res.status(200).json({
    success:true,
    message:"Accoun t created successfully"
  })
})
app.listen(PORT, () => {
  console.log(`✅ Server started on port ${PORT}`);
});

