function saymyname(){
  console.log("n");
  console.log("o");

}
// saymyname();// call --- fxn name.. 
function add(a,b){
  return a+b;

}

console.log(add(7,6 ));

function logginmsg(username){
  if(username===undefined){
    console.log("pls enter your name");
    return ;

  }
  return `${username} just loged in`
}

// console.log(logginmsg("tejas"));
 function calcprice(val1,val2, ...num1){// isse kart arr me sab add hota rahega 
  return num1;

 }

//  console.log(calcprice(200,400,600));
const user ={
  username: "nilesh",
  prices:99
}
function handleobject(anyobj){
  console.log(`username is ${anyobj.username} and price is ${anyobj.price}  `)

}
// handleobject(user)
 handleobject({
  username: "pradeep",
  price: 78
 });//pass object

 const arr=[100,300,500];
 function vale(anyarray){
  return anyarray[2];
 }
console.log(vale(arr));
