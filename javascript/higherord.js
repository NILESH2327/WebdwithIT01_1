const arr =[6,7,8,9,90]
// [{},{},{}]
// ["","",""]
for (const num of arr) {
  // console.log(num); 
}
const str ="hello world"
for( const i of str){
  // console.log(`each letter is ${i}`);
}

//MAPS
const  m =new Map();
m.set('in','india')
m.set('can','canda')
m.set('us','usa')
// console.log(m);

for(const key of m){
  // console.log(key);
  
}
for(const [key,val] of m){
  // console.log(key,":---",val)
}

const obj ={
  username :"nilesh",
  uplabdhi:"12thpass"
}
for(const key in obj){
  // console.log(`key is ${key} and val is ${obj[key]}`)
}

const ar=["a","b","c","d"]
for(const key in ar){
  // console.log(key);
  // console.log(ar[key]);
}

//****************************higher order
const coding =["java","python","c++"]
coding.forEach(function(val){
  // console.log(val);
})

// coding.forEach((item)=>{
//   // console.log(item)
// })
function printme(item){
  console.log(item)
}

// coding.forEach((item,index,arr)=>{
//   console.log(item,index,arr)
// })

const mycode =[
  {name:"java",age:20},
  {
    name :"cpp",age:90
  },
]
// mycode.forEach((item)=>{
//   console.log(item.name);
//   console.log(item.age);
// })
// for each value return nahi karta 
const values =coding.forEach((i)=>{
  console.log(i);
  return i

})
console.log(values)//undef

// filtermap and reduce
const mynum =[1,3,4,5,6,7,8,40]
const ans=mynum.filter((num)=> {
  return num>6
})

console.log(ans)
// yahi foreach se karo
// const result =[]
// mynum.forEach((num)=>{
// if(num>5){
//   result.push(num)
  
// }
// })
// console.log(result);
  
// ek books arr banao and usme 10 objext jisme booke ke name 
// mein title and genre and publish 1999 type info dete hai 
const books = [
  {
    title: "To Kill a Mockingbird",
    genre: "Fiction",
    publishYear: 1960,
    author: "Harper Lee"
  },
  {
    title: "The Lord of the Rings",
    genre: "Fantasy",
    publishYear: 1954,
    author: "J.R.R. Tolkien"
  },
  {
    title: "1984",
    genre: "Dystopian",
    publishYear: 1949,
    author: "George Orwell"
  },
  {
    title: "Pride and Prejudice",
    genre: "Romance",
    publishYear: 1813,
    author: "Jane Austen"
  },
  {
    title: "The Hunger Games",
    genre: "Science Fiction",
    publishYear: 2008,
    author: "Suzanne Collins"
  },
  {
    title: "The Catcher in the Rye",
    genre: "Coming-of-Age",
    publishYear: 1951,
    author: "J.D. Salinger"
  },
  {
    title: "The Great Gatsby",
    genre: "Fiction",
    publishYear: 1925,
    author: "F. Scott Fitzgerald"
  },
  {
    title: "The Picture of Dorian Gray",
    genre: "Gothic Horror",
    publishYear: 1890,
    author: "Oscar Wilde"
  },
  {
    title: "The Adventures of Huckleberry Finn",
    genre: "Adventure",
    publishYear: 1885,
    author: "Mark Twain"
  },
  {
    title: "The Count of Monte Cristo",
    genre: "Adventure",
    publishYear: 1844,
    author: "Alexandre Dumas"
  }
];


// const userbooks =books.filter((bk)=>bk.genre==='Adventure')
// const userbooks =books.filter((bk)=>bk.publishYear<1900)

// console.log(userbooks);
//map() is a method that creates a new array with the results of applying a provided function to every element in the original array.
//filter() is a method that creates a new array with all elements that pass the test implemented by the provided function
//reduce() is a method that applies a function to each element in an array and reduces it to a single value.
const numbers = [1, 2, 3, 4, 5];
const initalval=0
// isme do chij hota hai accumulatoe and currentvalue
const sum = numbers.reduce((acc, current) => 
  {
    console.log(`acc :${acc}and curr is :${current}`);
    return acc + current 
  }, initalval);
 
console.log(sum); // 15

const number = [1, 2, 3, 4, 5];

const doubledNumbers = number
.map((num)=>num * 2 )
.map((num)=>num+1)
.filter((num)=>num>4)

// map applies on original array okay 

console.log(doubledNumbers); // [2, 4, 6, 8, 10]


// reduce example 
const users = [
  { name: 'John', age: 25, occupation: 'Developer' },
  { name: 'Jane', age: 30, occupation: 'Designer' },
  { name: 'Bob', age: 35, occupation: 'Manager' },
  { name: 'Alice', age: 20, occupation: 'Student' }
];

const totalAge = users.reduce((acc, user) => acc + user.age, 0);

console.log(totalAge); // 110
