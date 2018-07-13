function forLoop(arrayArgument) {
      for (let i=0; i<25; i++){
        if(i===1){
          arrayArgument.push("I am 1 strange loop.");
          
        } else {
          arrayArgument.push(`I am ${i} strange loops.`);
        }
        
      }
      
      return arrayArgument;
}


// [" I am 1 strange loop", "I am 2 strange loops"]
var Looping = forLoop([]);
console.log(Looping);
function whileLoop(numberargument){
  while (){
    console.log();
  }
}
while(time<4){
  console.log(time);
  time++;
}