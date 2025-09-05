const http = require('http');

const fs= require('fs');
const path=require('path')

const server= http.createServer((req,res)=>{
  res.writeHead(200,{'content-type':'text/html'})
  const dirPtah=path.join(__dirname,'index.html');
  const htmlContebnt=fs.readFileSync(dirPtah);
  res.end(htmlContebnt);

})
server.listen(3000,()=>{
  console.log("server is running at http://localhost:3000");
}
)