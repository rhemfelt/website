var questionOne = prompt('What is my first name?');

var totalScore = 0;

if (questionOne === 'Robert') {
  totalScore += 1;
}

var questionTwo = prompt('What is my last name?');

if (questionTwo === 'Hemfelt') {
 totalScore += 1; 
}

var questionThree = prompt('What is my favorite food?');
if (questionThree === 'pizza') {
 totalScore +=1; 
}

var questionFour = prompt('What state was I born in?');
if (questionFour === 'Texas') {
    totalScore += 1;
    }

var questionFive = prompt('Who is my best friend?');
if (questionFive === 'Taylor') {
 totalScore +=1; 
}


document.write('Your total score is: ' + totalScore + '. ');


if (totalScore==3) {
  winner = "You won the bronze cup";
} else if (totalScore==4) {
    winner = "You won the silver cup";
} else if (totalScore==5) {
      winner = "YOU WON THE GOLD CUP, HOLY SHIT";
} else if (totalScore < 3) {
        winner = "You did not win any cup, you fucking dipshit";
    }

document.write(winner);