const { fail } = require('assert');
const http= require('http');

const server= http.createServer((req,res)=>{
// if(req.url==="/"){
//     res.end("hello raj ");
//   res.writeHead(200,{'content-type':'text/plain'})
// }else if(req.url==="/api/user"){
//   const obj={
//     name:"raj",
//     age:21,
//     goal : "Billioanre"
//   }

//   const data=JSON.stringify(obj);
//   res.writeHead(200,{'content-type':'application/json'})
//   res.end(data);

// }

if(req.method=="POST" && req.url==="/submit"){
  let body="";
  req.on("data",(chunk)=>{
    body+=chunk.toString()
  })
  req.on("end",()=>{
    console.log(JSON.parse(body));
    res.writeHead(200,{'content-type':'application/json'})
    res.end(JSON.stringify({
      success:true,
      message:"data received successfully",
    }))
  })
}else{
  res.writeHead(400,{'content-type':'application/json'})
   res.end(JSON.stringify({
      success:fail,
      message:"data not found ",
    }))
}
})

server.listen(3000,()=>{
  console.log("server is running at http://localhost:3000");
})