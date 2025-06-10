// Const person = new Object();
const person={}
person.name = 'John';
person.age = 20;          
person.occupation = 'Software Developer';
person.hero=["shakti","nilesh"]
person.id="789ad";
// new method for acess 
const {occupation} =person;
console.log(occupation);

const regularuser={
  email: "gmail.com",
  fullname:{
    userfullname:{
      first: "nilesh",
      last:"kumar",
    }
  }

}
console.log(regularuser.fullname.userfullname.first);

const obj={1:"a",2:"b"}
const objj={3:"c",4:"d"}
const ob={obj,objj}
// console.log(ob);
// target is {} and sources obj,objj sub ko merge kar sakte hai ...
// const obj1 =Object.assign({},obj,objj)// pass the target and sources
const obj1={...obj, ...objj}; //but use ham ye karna hai
// console.log(obj1);

const user=[
  // jab data base se value aaye to array object aata hai 
  {
    id:1,
  },
  {
    id:2,
  },
  {
    id:3,
  }
]

console.log(user[0].id);
console.log(Object.keys(person));//key
console.log(Object.values(person));//val
console.log(Object.entries(person));//mapping 

console.log(person.hasOwnProperty('id'));//TRUE KYA
//  YE HAI YA NAHI 
