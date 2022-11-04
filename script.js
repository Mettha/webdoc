// Christians typewriter 

var messageArray = ["Hvad er dialog på tværs ?"];
var textposition = 0;
var speed = 250;

typewriter = () => {
  document.querySelector("#type"). 
  innerHTML = messageArray[0].substring(0,textposition) + "<span>\u25ae</span>";

  if(textposition++ != messageArray[0].length)
  setTimeout(typewriter, speed); 
  else{
      textposition = 0; 
      setTimeout(typewriter, speed);
  }
}
window.addEventListener("load", typewriter); 


/*
// Mettes typewriter 
var i = 0;
var txt = 'Hvad er dialog på tværs ?';
var speed = 300;

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

typeWriter();
*/

/*
//afspil video når synlig
// this function will check whether a tag is visible
function elFllVsbl(el) {
    return (
      el.getBoundingClientRect().top >= 0 && el.getBoundingClientRect().bottom < window.innerHeight);
  }

// eventlistner
window.addEventListener("scroll", function () {
    let myVid = document.getElementById("myVideo");
    if (elFllVsbl(myVid))
      myVid.play();
    else
      myVid.pause();
  });
*/

// slideshow
const slider = document.querySelector('.gallery');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', e => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', _ => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', _ => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', e => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const SCROLL_SPEED = 3;
  const walk = (x - startX) * SCROLL_SPEED;
  slider.scrollLeft = scrollLeft - walk;
});