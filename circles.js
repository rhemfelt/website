var html = '';
var red;
var green;
var blue;
var rgbColor;
i = 0;

while (i <10) {
  red = Math.floor(Math.random() * 256 );
green = Math.floor(Math.random() * 256 );
blue = Math.floor(Math.random() * 256 );
rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
html += '<div style="background-color:' + rgbColor + '"></div>'; 
  i++;}


document.write(html);