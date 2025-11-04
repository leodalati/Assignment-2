var myVideo=document.getElementById("video"); //setting variable//
  function playPause() //adding function for button//
{
  if(myVideo.paused) myVideo.play();
  else myVideo.pause();
}