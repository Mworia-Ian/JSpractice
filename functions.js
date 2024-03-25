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
   





days = [ 'Mon', 'Tue', 'Wed']

days.splice(days.length, 0, 'Thur', 'Fri', 'Sat')

days.splice(2, 1, 'Wednesday' )

console.log(days);
