// function calculatePrice(price, discountPercentage, tax) {

//     let discountAmount = (price * discountPercentage) / 100;

//     let discountedPrice = price - discountAmount;

//     let taxAmount = discountedPrice * (tax / 100);

//     let  finalPrice = discountedPrice + taxAmount;

//     return finalPrice;
// }

// console.log(calculatePrice(200,20,16));

// //using arrow function
// const calculateTotalPrice = (price, discountPercentage, tax) => {
//     let discountAmount = (price * discountPercentage) / 100;

//     let discountedPrice = price - discountAmount;

//     let taxAmount = discountedPrice * (tax / 100);

//     let  finalPrice = discountedPrice + taxAmount;

//     return finalPrice;
// } 

//    console.log(calculateTotalPrice(500, 20, 16)); 


  //  let age = prompt("What is your age?", 18);

  //  let welcome;
  //  let add 
   
  //  if (age < 18) {
   
  //    welcome = function() {
  //      alert("Hello!");
  //    };
   
  //  } else {
   
  //    welcome = function() {
  //      alert("shukri!");
  //    };
   
  //  }
   





// days = [ 'Mon', 'Tue', 'Wed']

// days.splice(days.length, 0, 'Thur', 'Fri', 'Sat')

// days.splice(2, 1, 'Wednesday' )

// console.log(days);



// function fizzBuzz(num){

//   if(num%3 == 0 && num%5 == 0){
//     return 'Fizz & Buzz together'
//   }
//   else if(num%3 == 0){
//     return 'Fizz'
//   }
//   else if(num%5 == 0){
//     return 'Buzz'
//   }
//   else{
//     return 'FizzBuzz'
//   }
// }

// console.log(fizzBuzz(34)); 


  // for (let i = 1; i <= 100; i++) {
  //   if (i % 3 === 0 && i % 5 === 0) {
  //     console.log("FizzBuzz");
  //   } else if (i % 3 === 0) {
  //     console.log("Fizz");
  //   } else if (i % 5 === 0) {
  //     console.log("Buzz");
  //   }
  //   else{
  //     console.log(i);
  //   }
  // }


  // card counting 

//   let count = 0;

// function cc(card) {
//   // Only change code below this line
//   switch(card){
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//      count++
//     break;
//     case 10:
//     case 'J':
//     case 'Q':
//     case 'K':
//     case 'A':
//       count--
//     break
    
//   }
//   var holdbet = 'Hold'

//   if(count > 0){
//     holdbet = 'Bet'
//   }

//   return count + " " + holdbet

//   // Only change code above this line
// }

// console.log( cc("A"));



function grader(score){
  grade = ''

  switch(true){
    case (score > 100 || score < 0):
      grade = 'Please enter a score btwn 0-100!!';
      break;
    case (score >= 79):
      grade = 'A'
      break
    case (score < 79 && score >= 60):
      grade = 'B'
      break
    case (score <= 59 && score > 49):
      grade = 'C'
      break
    case (score <= 49 && score > 40):
      grade = 'D'
      break
    default:
      grade = 'E'
      break
  }
  return grade
    
}

console.log(grader(39));
