//get user to input a number using prompt"enter a number" check this is divisble by 5 or not
// alert("hello!")//one time popup
// let x=prompt("hello nilesh");// ise kisi varible me save kar sakte hai 
// console.log(x);

// let num=prompt("Enter a Number");
// if(num%5===0){
//   console.log("yes");
// }
// else{
//   console.log("not");
// }
//for of loop 2 is for in loop
// let str= "nileshkumar";
// let size=0;
// for(let i of str){
//   console.log("i =",i);
//   size++;
// }
// console.log(size)

//for in loop /*****************/
let student ={
  name:"nilesh",
  rollno:67,
  cgpa:8.32,
  isPass:true,
}
for(let i in student){
  console.log("key=",i, "value =", student[i]);
}