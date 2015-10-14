//declaring human player variable
var humanPlay;

//these on click events store a rock, paper or scissor click in the "humanChoice" variable   
document.getElementById('rock').onclick = function() {
   humanPlay = 'rock';
};

document.getElementById('paper').onclick = function() {
   humanPlay = 'paper';
};

document.getElementById('scissors').onclick = function() {
   humanPlay = 'scissors';
};

//generates the computer's move
var computerChoice = Math.random(Math.floor) * 10;

if (computerChoice < 3.3) {
  computerPlay = 'rock'
}

else if (computerChoice > 6.6) {
  computerPlay = 'scissors'
}

else {
  compterPlay = 'paper'
};


// the next several lines compares human and computer moves and generate points based on those results

//combos that would result in a human point
if (humanPlay === 'rock' && computerPlay === 'scissors' ||
    humanPlay === 'paper' && computerPlay === 'rock' ||
    humanPlay === 'scissors' && computerPlay === 'paper') {
      
        function addPoint() {
          var score = document.getElementById('humanScore').innerHTML;
          var newScore = parseInt(score,10) + 1;
          document.getElementById("humanScore").innerHTML = newScore;
              };
};

//combos that would result in a tie
else if (humanPlay === 'rock' && computerPlay === 'rock' ||
         humanPlay === 'paper' && computerPlay === 'paper' ||
         humanPlay === 'scissors' && computerPlay === 'scissors') {
  alert('You tied! Try again.')
}

//remaining possibilities would result in a computer point
else {
  function addPoint() {
          var score = document.getElementById('computerScore').innerHTML;
          var newScore = parseInt(score,10) + 1;
          document.getElementById("computerScore").innerHTML = newScore;
};