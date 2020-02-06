function first(width, height) {
	alert(arguments.length);
  if (width < height) {
    return width*width;
  } else {
    return height*height;
  }
}
var width = prompt("Введите ширину:", '');
var height =prompt("Bведите высоту:", '');
width=width || 50;
height=height|| 70;
alert("Результат: " + first(width,height));

var second = function(width, height){
	alert(arguments.length);
	if (width < height) {
    return width*width;
  } else {
    return height*height;
  }
}
var width = prompt("Введите ширину:", '');
var height =prompt("Bведите высоту:", '');
width=width || 50;
height=height|| 70;
alert("Результат: " + second(width,height));