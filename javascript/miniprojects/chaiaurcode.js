// create a function for ultimate color 
const randomcolor = function(){
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i<6;i++){
    color+= hex[Math.floor(Math.random()*16)]
  }
  return color;
};

let intervalid;
const startchangecolor = function(){
  if(!intervalid){
  intervalid =setInterval(bgcolor,1000);
  }
  function bgcolor(){
    document.body.style.backgroundColor = randomcolor();
  }
};

const stopchangecolor =function(){
  clearInterval(intervalid);
  intervalid =null;

};
// create a function for changing the color of the background
document.getElementById('start').addEventListener('click', startchangecolor);
document.getElementById('stop').addEventListener('click', stopchangecolor);

