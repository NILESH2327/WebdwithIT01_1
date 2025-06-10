// const arr=[0,2,4,5,6];//declaration 
// // arr is resizable
// console.log(arr.length); // shallow copy change same refrence property..
// const x=["a","bc","nilesh"]
 
// const ar =new Array(4,6,7,8);
// console.log(ar[0]);
// // arr methods 
// arr.push(3)
// arr.push(8)// push last
// arr.pop()//remove last
// arr.unshift(9)// insert start..
// arr.shift(); //remove first...
// console.log(arr.includes(9));//false 
// console.log(arr);
//indexof
// const arr=[1,2,3,4,5,6,7,8,];
// console.log("1" ,arr);//org arr
// const a = arr.slice(1,4);
// console.log(a);//section slice of arr 4 means 3 ele
// console.log("2" ,arr);//after slice original
// const b = arr.splice(1,4);
// console.log(b);//section splish of arr 4 ele ---->slice +1 ele
// console.log("3" ,arr);// after splice original 

// console.log(typeof arr.join());//string ...
//join
const dc =["superman","flash","batman"];
const boly=["srk","samayraina","bhuvanbam"];
// dc.push(boly);// when we push arr as a 1 ele pushed whole arr in dc
// console.log(dc);
const all =dc.concat(boly);//store all in all heroes name 
// console.log(all);
//spread out method to print all 
const alls=[...dc, ...boly];
// console.log(alls);

const anotherarr =[12,34,67,77,88,[3,5,6],9,[0, 1,[6,1]]];
// ise handle karne ke liye 
const realanotherarr=anotherarr.flat(Infinity)
console.log(realanotherarr.join());

console.log(Array.isArray("nilesh"))
console.log(Array.from("nileshkumar"))
console.log(Array.from({name :"nilesh"}));//intersting not convert into string in key and gives empty arr
 let math =90;
let eng =80;
let sci =70;
console.log(Array.of(math,eng,sci));// 90 80 70..



