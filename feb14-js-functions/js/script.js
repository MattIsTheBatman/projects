// var a = function(){
//     var username = prompt('Entere username here.').trim();
//     console.log(username);
// }();
//
// function b(user){
//     var cased = user.charAt(0).toUpperCase() + user.substr(1).toLowerCase();
//     alert(cased);
// };

var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');

button1.addEventListener('click', function(){
   userFirstName = prompt('Whats your first name?');
  //  console.log(parseInt (userFirstName) );

   if( isNaN(userFirstName) ){
    //  console.log('its not a numberr');
     button2.disabled = false;
     button1.disabled = true;
   }else{
     alert('please type your name')
   }
  //  button2.disabled = false;
  //  button1.setAttribute('disabled', true);
});

button2.addEventListener('click', function(){
   var userLastName = prompt('Whats your last name?');
   alert(userFirstName + ' ' + userLastName);
   button1.disabled = false;
   button2.disabled = true;
});
