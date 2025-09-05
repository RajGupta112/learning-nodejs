// function sum(a,b){
//   return a+b;
// }

// console.log(sum(10,20))


// function greetWithSum(text,a,b,sumf){
//   const result= sumf(a,b);
//   console.log(text,result);
// }

// greetWithSum("this is raj",7,8,sum)


//Module is a piece od code taht is used across all yhe node js application
function greet1(a,b){
  console.log("this is raj",a+b)
}


function sub(a,b){
  const  res= a>b ? a-b :a+b;
  return   res;
}
module.exports={greet1
  ,sub
};