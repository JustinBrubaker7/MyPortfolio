

var i = 0;
var txt = 'Hi, I\'m Justin';
var speed = 150;

setTimeout(function typeWriter() {
  if (i < txt.length) {
    document.getElementById("Main-title").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}, 600);

