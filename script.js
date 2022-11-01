// Christians typewriter 
var messageArray = ["Hvad er dialog på tværs ?"];
var textposition = 0;
var speed = 100;

typewriter = () => {
  document.querySelector("#type"). 
  innerHTML = messageArray[0].substring(0,textposition) + "<span>\u25ae</span>";

  if(textposition++ != messageArray[0].length)
  setTimeout(typewriter, speed);
}
window.addEventListener("load", typewriter);


/*
// Min typwriter 

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

/* (dette er kims kode)
//afspil video når synlig
var blooper = document.getElementById("myVideo");
 
window.onscroll = function() {
  if (blooper.getBoundingClientRect().bottom < 250 || blooper.getBoundingClientRect().top > 250)
  blooper.pause();
else
  blooper.play();
}
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
//second try eventlistner
/*
  var elem = document.getElementById("myVideo");
   

  window.onscroll = function(){
   if (elF11Vsbl(elem))
     elem.play();
   else
     elem.pause();
   }
  */

/* is element visible? if ok skift farve */
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

