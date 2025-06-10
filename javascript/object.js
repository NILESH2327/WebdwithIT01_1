//objects ---declaration--? Using Object Literal Syntax/constructo
const mysem=Symbol("key1");
const man = {
  name: 'John Doe',

  "full name": "prap",
  [mysem]: "mykey",
  age: 30,                  // Literal Syntax
  occupation: 'Software Developer',
  last: ["mondy","satuerday"],
};
// console.log(man);
// console.log(man["full name"]);
// console.log(man['name']);
// console.log(man.last[0]);
// console.log(man.age);
// console.log(man[mysem]);
 //constructor
const person = new Object();
person.name = 'John';
person.age = 20;          
person.occupation = 'Software Developer';
person.hero=["shakti","nilesh"]


// console.log(person["name"]);
// console.log(person.hero[0]);
// console.log(person.age);
Object.freeze(person);//koi change nhi kar sakte freeze ho jayega ...

person.age=45;
// console.log(person.age);

const pe = Object.create(null);
pe.name = 'John Doe';
pe.age = 30;          //  Object.create() Method
pe.occupation = 'Software Developer';
pe.country = 'USA';
pe['city'] = 'New York';
delete pe.age;


man.greeting =function(){
  console.log("hello js");

}
console.log(man.greeting());