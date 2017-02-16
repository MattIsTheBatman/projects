var yousmart = document.getElementById('yousmart');
var youloyal = document.getElementById('youloyal');
var userNameArray = ['Batman Begins', 'The Dark Knight', 'Man of Steel'];

var moviesArray = [];
yousmart.addEventListener('click', askForUserName);
  // var  working = alert('It works');
  // askForUserName();

youloyal.addEventListener('click', function(){
  var  workingAlso = alert('It works too');
})

moviesArray.forEach(moviePrint);

function moviePrint(e, i){
  console.log(i + ' : ' + e);
}

function populateArray(un){
  userNameArray.push(un);
  console.log(userNameArray);
  if(userNameArray.length >= 5){
    outputArray();
  }
 }

function outputArray(){
  userNameArray.forEach(function(el, idx){
  console.log(idx + ' : ' + el);
});

  // for(var i = 0; i < userNameArray.lenth; i = i + 1){
  //   console.log(userNameArray);
  // }
}
function askForUserName(){
  var userName = prompt('What yo username be dawg?');

  if(userName === null){
    alert('please enter your username');
    return;
  }


  var userNameParsed = parseInt(userName);
  var userNameNaN = isNaN(userNameParsed);
  var userNameBlank = userName.trim() === "";
  // console.log('original: ' +userName);
  // console.log('parsed: ' +userNameParsed);
  // console.log('is it NaN: ' +userNameNaN);
  // console.log('is it blank: '  +userNameBlank);

  if(userNameNaN === false &&
    userNameBlank === false ||
    userNameNaN === true &&
    userNameBlank === true
  ){
    alert('you entered bad info');
  }else{
    // alert('you may continue');
    // return userName;
    populateArray(userName);
  }

}
