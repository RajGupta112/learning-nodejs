// const Emitter= require("./emmiter") this is my custom event emmiter
const Emitter=require('events')
const events= require('./config').events1;
const emitr = new Emitter();

emitr.on(events.GREET,function(){
  console.log("hello world");
})

emitr.on(events.FILEOPENED,function(){
 console.log("hello file open");
})
emitr.emit(events.GREET);
