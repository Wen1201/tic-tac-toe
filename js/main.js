//press play again button, refresh the web page
var btn = document.getElementById("myBtn"); 
btn.onclick = function() {  
    window.location.reload();
  }
const spiderman = document.getElementById('spiderman-heading');
spiderman.style.top = '94px';
direction = 8;
const sWalk = function(){
   const currentTop = parseInt(spiderman.style.top);
    if (currentTop > 94) {
      direction = -8;     
    } else if(currentTop <= -180){
      direction = 8;
    }
    spiderman.style.top = `${currentTop + direction}px`
  };
window.setInterval(sWalk, 100);









   