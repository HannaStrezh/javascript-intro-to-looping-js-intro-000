function forLoop(array) {
      for (let i=0; i<25; i++){
        array.push("I am 1 strange loop.");
      }
      console.log(array);
      return array;
}


// [" I am 1 strange loop", "I am 2 strange loops"]
var Looping = forLoop([]);
console.log(Looping);