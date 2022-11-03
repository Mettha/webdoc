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
//Kims Nye typewriter
var i = 0;
var txt ='Hvad er dialog på tværs ?';
var speed = 50;

        function typeWriter() {
            if (i < txt.length) {
                document.getElementById("type").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            } else { //else-delen skal kun med, hvis den skal nulstille/slette og gentage sig efter 2 sekunder......
                i = 0;
                document.getElementById("type").innerHTML = "";
                setTimeout(typeWriter, 2000);
            }
        }
        //  typeWriter = function(){};
        typeWriter();
*/

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


   /*
//2th try eventlistner
   var video = document.getElementById('myVideo'), fraction = 0.8;

   function checkScroll() {
       var x = video.offsetLeft, y = video.offsetTop, w = video.offsetWidth, h = video.offsetHeight, r = x + w, //right
       b = y + h, //bottom
       visibleX, visibleY, visible;

       visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
       visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));

       visible = visibleX * visibleY / (w * h);

       if (visible > fraction) {
           video.play();
       } else {
           video.pause();
       }
   }

   checkScroll();
   window.addEventListener('scroll', checkScroll, false);
   window.addEventListener('resize', checkScroll, false);
/*

/* is element visible? if ok skift farve */
/*
var videoelementet = document.getElementById("myVideo");
var img2 = document.getElementById("img1");
window.addEventListener("scroll", function () {
    if (elFllVsbl(videoelementet)) {
        console.log("play video");
        player.playVideo(); // with player you can manipulate the video
    } else {
        console.log("pause video");
        player.pauseVideo();
    }

    if (elFllVsbl(img1)) {
        img1.style.filter = "grayscale(0%)";
    } else {
        img1.style.filter = "grayscale(100%)"; 
    }
}); // end eventlistener 
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