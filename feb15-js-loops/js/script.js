var add = document.getElementById('add');
var remove = document.getElementById('remove');

add.addEventListener('click', function(){
  // alert('Youre a nerd')
  askForColor();
});

remove.addventListener('click', function(){
  // alert('Youre still a nerd')
  var re = /ab+c/;
  console.log(re);

  // var myRe = /d(b+)d/g;
  // var myArray = myRo.exec('cdbbdbsbz');
  // console.log(myArray);
});

function askForColor(){
   var colorPrompt = prompt('Whats your favorite color?');
   console.log(colorPrompt);
   console.log(!colorPrompt);
   if(!!null){
      var userColorCheck = colorPrompt.toLowerCase().trim();
      if(!isNaN(parseInt(colorPrompt))){
          askForColor();
      }else{
       askForColor();
     }else{
     alert('does it work?')
   }
 }

  // if(!isNaN(parseInt(colorPrompt))){
  //   alert('you typed a number bozo');
  //   askForColor();
  // }
  // else if( colorPrompt === ''){
  //   alert('you typed a blank');
  // }else{
  //   alert('you did not type a number');
  // }
  // }

//   if(!isNaN(parseInt(colorPrompt))){
//     alert('will always run');
// }else{
//   alert('will never run');
// }
