// IFE - Immediatley invoked Function Expression
// (function(){

// Function Declaration
// function funcDec(userMessage){
  // alert('This is from the declaration');
  // console.log(userMessage);
  // myNum = 5;
  // myOtherNum= 9;
// }
// PARAMERTER
// ARGUMENT

// funcDec('goodbye');

// funDec();  //  calling (aka invoking, aka running) the function
// var myNum;
// Function Expression
// var funcExp = function(){
  //  myNum = 3;
// alert('This is from the expression');
// }
// Immediatley invoke the function with ( )


// funcExp();  //  calling (aka invoking, aka running) the function

// hoisting - places all function DECLARATIONS and variable names to memory before calling (aka invoking, aka running) scripts

// RETURN

// function  getFullName(a, b){
//   return a + ' ' + b;
// }

// console.log(getFullName('Matthew', 'Dias'));
// }());


function getUserName(a, b){
  var name = prompt('What is your name?');
  var userMsg = 'Hello ' + name + '!';
  return userMsg;
}
function alertUserName(){
  alert(getUserName() );

}
alertUserName();
