


// console.log("hello");
// Write a function named stringy that takes a size and returns a string of alternating '1s' and '0s'.
// The string should start with a 1.
// For example, a string:
// with size 6 should return :'101010'.
// with size 4 should return : '1010'.
// with size 12 should return : '101010101010'.
// The size will always be positive and will only use whole numbers.
// this works on replit
var numbers  = 8
for (var i=1; i <=number ; i++){
  if(i%2 == 0){
    console.log(0)
  } else {
    console.log ( 1)
  }
}

var numbers = [1, 0, 1, 0, 1, 0, 1, 0,];




// Given a non-negative integer, return an array containing a list of independent digits in reverse order.
// Example: 348597 => [7,9,5,8,4,3]
// // could i use .reveverse
function digits(n) {
  var initialArray = (""+n).split('');
  var reversedArray = [];
  for (var i = initialArray.length - 1; i >= 0; i--) {
    reversedArray[i] = parseInt(initialArray.shift(),10);
  }
  return reversedArray;
}

console.log(digits(348597));


// Fibonacci number is the sum of the previous two sequence numbers. Below is an example of the sequence 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, … Notice the sequence pattern is the sum of the previous two numbers?
// Build a function to illustrate how to get this sequence to output. If you don’t know where to begin start with pseudo code to work through the steps.


var fibonacci[23,32]
for (var i = 0; i <=8; i++) {
  fibonacci[i]= fibonacci[i-2] + fibonacci [i-1];
}
console.log(fibonacci);



//   // Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.
//   // Write a function called checkCoupon to verify that a coupon is valid and not expired.
//   // If the coupon is good, return true. Otherwise, return false.
//   // A coupon expires at the END of the expiration date. All dates will be passed in as strings in this format: "June 15, 2014"
//
//
// var coupondate = prompt (enter coupon date i.e. june 14 2017");
//  var currentTime = new Date();
//
//  var expCoupon = new Date (november 26,2016');
// var date = new Date (couponDate)
//  funtion Comparedates (){
//   console.log(date)
//  console.log(currentTime)
//    if (date<=currentTime){
//     alert("couponis invalid");}
//    else{
// alert ("coupon is Invalid");
//  }
// };
//  Comparedates();
// }
