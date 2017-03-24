var html = '';
var red;
var green;
var blue;
var rgbColor;
i = 0;

for (var i = 0; i < 1000; i+=1) {
  red = Math.floor(Math.random() * 256 );
green = Math.floor(Math.random() * 256 );
blue = Math.floor(Math.random() * 256 );
rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
html += '<div style="background-color:' + rgbColor + '"></div>';
}
document.write(html);