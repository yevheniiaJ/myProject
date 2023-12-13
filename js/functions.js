

let i = 1
while (i <= 100) {
    if (i%3 == 0 && i%5 !== 0) {
        console.log("Fizz") 
    }
    
   else if (i%3 !== 0 && i%5 == 0) {
        console.log("Buzz") 
    } else {
        console.log( "FizzBuzz") 
    }
         i++;
 }


or 

fizzBuzzFunction = (digitFromOneToOneHundred) => {
    

    if (digitFromOneToOneHundred %3 == 0 && digitFromOneToOneHundred  %5 !== 0) {
        console.log("Fizz") 
    }
    
   else if (digitFromOneToOneHundred %3 !== 0 && digitFromOneToOneHundred %5 == 0) {
        console.log("Buzz") 
    } else {
        console.log( "FizzBuzz") 
    }
     
 }
 fizzBuzzFunction (15);
