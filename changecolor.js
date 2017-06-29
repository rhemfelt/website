const myHeading = document.getElementById('myHeading');
const myButton = document.getElementById('myButton');

myButton.addEventListener('click', () => {
	myHeading.style.color = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
	var sourceOfPicture = "http://www.reactiongifs.com/r/2013/10/tim-and-eric-mind-blown.gif";
  var img = document.getElementById('bigpic')
  img.src = sourceOfPicture.replace('180x180', '450x450');
  img.style.display = "block";
});
