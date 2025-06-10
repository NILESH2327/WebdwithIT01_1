const user={
  username : "nilesh",
  price :99,
  welcome :function(){
    console.log(`${this.username}, aawo yaar`);
    console.log(this);
  }
  
}
// user.welcome();
// user.username ="sam"//change ho gya context change kar diya ...

console.log(this);// its return empty.
function ok(){
  // console.log(this) fxn ke andar this access hoga
  // when its return in function then its give me many tyoe of obj ans etc..

}
ok();


// named arrow fxn
// const add= (a,b)=> a+b // its right 

const add= (a,b)=> (a+b)// in bracket use for not use return key word its help to learn react js
// obj return kare
const jii =()=>({username :"nilesh"})
// brack ke andar obj return karne par ye ek block ki tarah ..
console.log(jii())


console.log(add(5,6))
const prod = function(x,y){
  return x*y;

}
console.log(prod(5,6))




