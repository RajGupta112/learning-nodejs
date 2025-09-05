const fs=require("fs");

// fs.readFile("input.txt",'utf-8',(err,data)=>{  //non blocking asynchronus
//   if(err) throw err;
//   console.log(data);
// })

// const data=fs.readFileSync("input.txt",'utf-8')  //blocking synchronus
// console.log(data)


//write file
// fs.writeFile("input.txt","Hello raj",(err)=>{
//   if(err) throw err;
//   console.log("file written");
// })

// // for adding text into the next line 
// fs.appendFile("input.txt","\n this is appended text",(err)=>{
//   if(err) throw err;
//   console.log("file appended");
// })

//for delete 
// fs.unlink("input.txt",(err)=>{
//   if(err) throw err;
//   console.log("file deleted");
// })


// const readStream= fs.createReadStream("input.txt","utf-8"

// )

// readStream.on("data",(chunk)=>{
//   console.log(chunk);
// })

// const readStream1= fs.createWriteStream("input.txt","utf-8")

// readStream1.write("welcom the th  new millianore raj")

//pipe
