// variables 

// var saffo = 20

// console.log(saffo)

// var saffo = 23

// console.log(saffo)

// let shukri = 21

// console.log(shukri)

//  shukri = 23

// console.log(shukri);

// const gyzelle = 20

// console.log(gyzelle);


// function wakeUpTime(day){

//     switch(day){
//         case 'Monday':
//             console.log('7am');
//             break;
//         case 'Tuesday':
//         case 'Wednesday':
//         case 'Thursday':
//             console.log('4am');
//             break;
//         case 'Friday':
//             console.log('9am');
//             break;
//         case 'Saturday':
//         case 'Sunday':
//             console.log('8am');
//             break;
//         default:
//             console.log('not a valid choice');
//             break;
//     }
        
// }

// wakeUpTime('Saturday')








// function largeInteger(a,b){
//     if(a>b){
//         console.log(`${a} is greater than ${b}`) 
//     }else if(b>a){
//         console.log(`${b} is greater than ${a}`) 
//     }
//     else{
//         console.log(`${a} and ${b} ARE EQUAL!!!!`) 
//     }
// }

// largeInteger(9,10)

// function votingAge(num){
//     if(num >= 18){
//         console.log("I can vote")
//     } else{
//         console.log("Unfortunately I am too young to vote")
//     }
// }



// function votingAge(num){
//     switch (true){
//         case num>=18:
//         console.log("I can vote")
//         break
//         case num<18:
//         console.log("Can't vote")
//         break
//     }
    
    
// }
// votingAge(45)


// a8aBvstf

// function caseInSwitch(val){
//     var answer = " ";

//     switch(val){
//         case 1:
//             answer = 'alpha';
//             break;
//         case 2:
//             answer = 'beta';
//             break;
//         case 3:
//             answer = 'delta';
//             break;
//         case 4:
//             answer = 'gamma';
//             break;
//         default:
//             answer = "you've not selected a valid choice"
//     }
//     return answer;
// }

// console.log(caseInSwitch(4)); 

// function greet(time, firstname, lastname){
//     console.log(`Good ${time}, ${firstname} ${lastname}`);
// }

// greet('Evening', 'Ian', 'Mworia')




// function capitalizeFirstLetter(str) {
//     if (str.length > 0) {
//         return str.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
//     } else {
//         return str;
//     }
// }

// console.log(capitalizeFirstLetter('aasane node'));




// Call back functions

function funcNameA(){
    
    console.log('I am function A');
}

function funcNameB(funcA, funcC){
  funcA()
  funcC()
    console.log('I am inside Function B');
}

function funcNameC(){
    console.log('I am inside Function C');
}

funcNameB(funcNameA, funcNameC)



// let myArr =  /^[a-zA-Z]+$/ ;

// function isItLetter(char){
//     const  chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
//     const charsArr = chars.split("")


//     if(charsArr.includes(char)){
//         return true;
//     }
//     else{
//         return false;
//     }
    
// }

// console.log(isItLetter()); 


// function isItLetter(character) {
//     return /[a-zA-Z]/.test(character);
//   }
//   console.log(isItLetter('3'))