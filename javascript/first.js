"use strict";//treat all js code as a newer version
//console.log("Hello World"); //this is a comment
console.log("nilesh kumar")
let fullname="mainhoon"
console.log(fullname);
//const wali value fixed hoti hai is assign nahi kar sakte
//let vale variable ko assign kar skt hai 
//let :varible cannot be redeclared but can be updated in block scope
// const : varible cannot bo redeclared and updated in block scope
// console karne ka ek method console.table([a,b])  
{
 let a=0;
 a=9;
console.log(a);
}
//premitivedatatype in js -->7type::::string ,number,boolean ,undefined,null, bigint,symbol
// nonpremitive .. array object function date etc 
//number => 2 to pr53
// null is standlone value..and object also
// undefined is standlone value
 // let and const is block scope
 // var is function scope
 // let and const is hoisting

 console.log(typeof null);
//symbol is primitive data type unique
//33abc is nan when i convert into string to number 
let a="44";
let b=Number(a);
console.log("chechk",typeof b);
// ""-- false but //"kahfkdh"---true in conversion aata hai mujhe 
let x=BigInt(12344)
const student={
  name :"nilesh kumar",
  age:20,
  cgpa:8.32,
  isPass:true,

};
student["name"]="amansaxena"
//const object ki key value change kar sakte hai 

console.log(student.age)
console.log(student)
console.log(student["name"])
console.log("a**b =", 8**9)
// strit version --> equal toand type  === 3 times..not equal to !== yaha type bhi pata  
// == , != bhi right h
// agar hame data type ke base par bhedbhav nahi chahiy to double wala use kro nahi to allways 3 wala use karo 
console.log("5"===5)//false which is right string aur int equal nahi hote 
console.log("5"==5)//true string convert auto in number

console.log("cond1 || cond2" ,(5>7)&& 6>5)
//logical not  !,logical or ||, logical and && aate hai ..
// let color;
// if(mode==="darkmode"){
//   color="black"
// }  
let age =13;
if(age>=18){
  console.log("you can vote")
}
else{
  console.log("you can't vote")
}

