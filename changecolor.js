const myHeading = document.getElementById('myHeading');
const myButton = document.getElementById('myButton');

myButton.addEventListener('click', () => {
	myHeading.style.color = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
});