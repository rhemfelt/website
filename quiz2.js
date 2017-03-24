
var correct = 0;


var answer1 = prompt("Name a programming language thats also a gem");
if ( answer1.toUpperCase() === 'RUBY' {
	correct += 1;
}
var answer2 = prompt("Name a programming language thats also a snake");
if (answer2.toUpperCase === 'PYTHON') {
	correct += 1;
}
var answer3 = prompt("What language do you use to style web pages?");
if (answer3.toUpperCase === 'CSS') {
	correct += 1;
}
var answer4 = prompt("What language do you use to build the structure of web pages?");
if (answer4.toUpperCase === 'HTML') {
	correct += 1;
}
var answer5 = prompt("What language do you use to add interactivity to a web page?")
if (answer5.toUpperCase === "JAVASCRIPT") {
	correct += 1;
} 

//output results
document.write("<p> You got " + correct + " out of 5 question correct.</p>");

// output rank
if ( correct === 5 ) {
	document.write("You earned a gold crown!");
} else if ( correct >= 3 ) {
	document.write("You earned a silver crown!");
} else if ( correct >= 1) {
document.write("You earned a bronze crown.");
} else {
	document.write("No crown for you. You need to study.");
}
