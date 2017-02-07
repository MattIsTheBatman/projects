var intro = alert('Hello there! Welcome to the world of pokémon! My name is Oak! People call me the pokémon Prof! This world is inhabited by creatures called pokémon! For some people, pokémon are pets. Others use them for fights. Myself...I study pokémon as a profession.');
var gender = confirm('But first, tell me a little about yourself. Now, are you a boy?');
  if(gender){
    alert('Ah, so youre a boy then!');
    var gender = "boy";
  } else {
    alert('youre a girl then!');
    var gender = "girl";

  };
var userName= prompt('Welcome young trainer. First, what is your name?');
var youSure = confirm( 'are you sure' + ' ' + userName + ' ' + 'is your name?');
var right = alert('Right… So your name is' + ' ' + userName);
var ohGod = prompt('This is my grandson. He has been your rival since you were a baby. ...Erm, what is his name again?');
var rival = alert('Er, was it' + ' ' + ohGod + '?');
var right = alert('Thats right! I remember now! His name is' + ' ' + ohGod );
var pokemon = prompt('Now its time for you to choose a pokemon, which pokemon will you choose');
var confirmation, pokemonAgain = confirm('Are you sure you would like to choose this pokemon? It looks kinda weak.');
  if(confirmation){
    var pokeName = alert('What a great pokemon, if you like having a weak pokemon and getting nowhere in life.');
  } else{
    var pokemonAgain = prompt('Then what pokemon will you choose?');
  };
var pokeName = prompt('What would you like to name your pokemon?');
var gary = alert( ohGod + ' ' + 'being the punk that he is chose the pokemon that is your pokemons weakness');
var jourrneyBegins = alert('Then its settled. You may begin your journey');
var battle = confirm( ohGod + ' ' + 'challenges you to a battle, do you accept?');
  if(battle){
    alert(ohGod + ' ' + 'send out his garbage tier pokemon!');
  } else{
    alert('Game over! You dont deserve to be a trainer if you decline battles.');
  };
