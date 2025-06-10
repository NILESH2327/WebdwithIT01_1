// 1 jan 1970utc data started...

// let Mydate =new Date()
// console.log(Mydate.toDateString());
// console.log(Mydate.toString());
// console.log(Mydate.toLocaleString());
// console.log(typeof Mydate);
// let ans=new Date(2023,1, 12,5,34,55);
// console.log(ans.toDateString());
// console.log(ans.toLocaleString());
// let ans=new Date("02-13-2025");
// console.log(ans.toLocaleString());
 let newdate=new Date();
 console.log(newdate.getMonth()+1);
 console.log(newdate.getDate());
 console.log(newdate);
 console.log(newdate.getDay());
//  `${newdate.getDate()} and my name is ${'Rahul'} `;
newdate.toLocaleString('default',{
  weekday: 'long',
  year: 'numeric',
})
console.log(newdate);