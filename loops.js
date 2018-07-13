function forLoop(array) {
      for (let i=0; i<25; i++){
        if(i===1){
          array.push("I am 1 strange loop.");
          
        } else 
              {"I am ${i} strange loops."}
        
      }
      console.log(array);
      return array;
}


// [" I am 1 strange loop", "I am 2 strange loops"]
var Looping = forLoop([]);
console.log(Looping);