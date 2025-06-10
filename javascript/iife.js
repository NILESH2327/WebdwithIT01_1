// IIFE imedatly invoked function expression ..
(function chai(){
  console.log("nilesh")

})();//when 2 iife use semicolon must be needed for terminate the code of first iife 
((a,b)=>{
  console.log(a+b);
})(4,5);
//()()one use for function and one is for calling or executing..
//control flow 
const user = [];
if(user){
  console.log("conn");
}
//falsy --val "" ,0,-0,BigInt ,null ,undefined."false"
// truthy " " ,"false", [],{},function(){}
 const fxn =function(){

 }

 if(fxn){
  console.log(`nilesh`)
 }

 const myobj ={}
 if(Object.keys(myobj).length===0){
  console.log("theek hai ji")
 }

 // nullish coalescing operator  it's use when error occurs then next cond executed..
 val =null ?? 6??7
 console.log(val)
 vall=6??7
 console.log(vall)
 valll =undefined ?? 90??56
 console.log(valll)
 // turnary op is diff 
 7>8 ?console.log("n"):console.log("k");
