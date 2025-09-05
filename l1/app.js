let a=10;
let b=90;
console.log(a+b);

//function statement
function greet(){
  console.log("greet");
}
greet();


//function are first class
function loggreeting(fn){
  fn()
}
loggreeting(greet);

//function expression
const fn= function(){
  console.log("function expression");
}
fn();

//use the function expression on the fly
loggreeting(function(){
  console.log("function expression 2");
})