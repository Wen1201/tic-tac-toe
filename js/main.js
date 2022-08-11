
var btn = document.getElementById("myBtn");
btn.onclick = function() {
    
    window.location.reload();
  }
// $('#TI-hidding').css('visibility', 'visible');
// $('#TC-hidding').css('visibility', 'hidden');
// $('#I-hidding').css('visibility', 'hidden');

const spiderman = document.getElementById('spiderman-heading');
// spiderman.style.position = 'relative';
// spiderman.style.top = '-20vh';
// spiderman.style.left = '-10vw';
// spiderman.style.width = '300px';
// spiderman.style.height = '310px';
// spiderman.style.opacity = '1';
// spiderman.style.zIndex = -10;
spiderman.style.top = '4px';
direction = 8;

const sWalk = function(){
   const currentTop = parseInt(spiderman.style.top);
//    bottomEdge = window.innerHeight / 2;

   if (currentTop > 94) {
    direction = -8;
    
   } else if(currentTop <= -180){
    direction = 8;
   }
   spiderman.style.top = `${currentTop + direction}px`
};
window.setInterval(sWalk, 100);







   