let i = 0;
let a = 0;
function loop(){
i++;
console.log("Hello World. seconds run : " + i + " Times restarted: "+ a);
  if(i > 58){
    console.log("Ran for Whole Minute! Restarting...")
  i=0;
    a++;
  }
  
}
setInterval(loop, 1000);
