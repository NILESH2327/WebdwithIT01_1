// console.log("3"+4+5+6);// jo pahle aata hai uska scope aa rha hai 
// console.log(4**5-2+"9");// pahle maths op the string ko concatation..
// // console.log(true++);.....
// console.log(+true);// op 1
// console.log(+"");// op 0
// let a ,b,c;
// a=b=c=9+4;// this is right but we should not use this method use efficeint 
// console.log(b);
// // comparison..
// // console.log(5>3);
// // console.log(5<3);
// // console.log(3!=5);
// console.log(3=="3");//t
// console.log("3"==="3");//t
// // === is used for value and type both comparison..
// console.log(3==="3");//f both comapare 
// console.log(null==0);//f
// console.log(null>0);// f
// console.log(null>=0);// this is true ********
// console.log(undefined<0);// this is false....

// // null and undefined is not equal to any value
// console.log("2">1);//t

// /******************************* summary ********************************* */

// const id=Symbol('234');
// const id2=Symbol('234');
// console.log(id==id2);

// const bignum=828n;
// console.log(typeof bignum);
// // arr ,obj ,fxn 3 topic ..declaration
// const heros=["nilesh","batman"];
// console.log(heros[0]);
//  let myobj={
//    name :"harry potter",
//    age:25,
//  }

//   const myfxn=function(){
//   console.log("hello world");
//  }


const a="nilesh";
const b=90;
console.log(a+b+"value");//nilesh90value
console.log(`hello my name is ${a} and my
   repo count is ${b}`);
   const x=new String('roza-rpay-com');
// console.log(x[4]);
// console.log(x.length);
// console.log(x.__proto__);//op-->{}
// console.log(x.toUpperCase());
// console.log(x.valueOf());
// console.log(x.indexOf('z'));
const st=x.substring(1,4);
console.log(st);
const ns=x.slice(-1,2);
console.log(ns);
const newone="  nilesh   ";
console.log(newone);
console.log(newone.trim());

const url= "https://google:com/"
console.log(url.startsWith("https"));
console.log(url.endsWith("com"));
console.log(url.replace(':' , '_'));
console.log(url.includes("//"));
console.log(url.split(':'));



