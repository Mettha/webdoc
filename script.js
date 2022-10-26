var ptag = document.getElementById("type");

var i = 0;
var txt = 'Hvad er dialog på tværs ?';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("type").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else{
      i=0;

      document.getElementById("type").innerHTML="";
      setTimeout(typeWriter,1500);
  }
}

typeWriter()

