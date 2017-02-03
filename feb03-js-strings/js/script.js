var firstString = "A literal string";
var secondString = new String("A string object");

var concatString = firstString + "," + secondString;

console.log( concatString );


var firstName = "Matthew";
var midName = "Benjamin";
var lastName = "Dias";
var fullName = firstName + " " + midName + " " + lastName;

var getIndex = firstString.match("it");

var birthDay = "1999";
var newAge = (2020 - 1999);

var sentence = "My name is" + " " + fullName + ", " + "I was born on" + " " + birthDay + " " + "and in 2020, I will be" + " " + newAge;
console.log(sentence)
