const express = require('express');


// to create wweb server
const app= express();

app.get("/home",(req,res)=>{
  // res.send("Raj is the next billionaire 🚀")
  const obj={
    name:"raj",
    age:24,
    goal:"billionare",
    address:"bankglore"
  }
  res.send(obj);
})
app.get("/about",(req,res)=>{res.send("<h1> this is about page</h1>")});


app.get("/api/product/:productId",(req,res)=>{
  const id=req.params.productId;
  const product={id:1,
    name:"Mackbook M1 pro"
  }
  res.status(200).json({
    success:true,
    product
  })
});




app.listen(3000,()=>(console.log("server is running at http://localhost:3000"))
  
)
