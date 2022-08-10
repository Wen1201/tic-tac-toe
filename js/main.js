// $('#TI-hidding').css('visibility', 'visible');
// $('#TC-hidding').css('visibility', 'hidden');
// $('#I-hidding').css('visibility', 'hidden');

const spiderman = document.getElementById('spiderman-heading');
spiderman.style.position = 'fixed';
spiderman.style.top = '40vh';
spiderman.style.left = '27vw';
spiderman.style.width = '300px';
spiderman.style.height = '310px';
spiderman.style.opacity = '1';
spiderman.style.zIndex = -10;

direction = 0.5;

const sWalk = function(){
   const currentTop = parseInt(spiderman.style.top);
//    for (let currentTop = 50; currentTop < 60; currentTop++) {
//     
    
//    }
   if (currentTop >64) {
    direction = -1;
    
   } else if(currentTop <= 40){
    direction = 1;
   }
   spiderman.style.top = `${currentTop + direction}vh`
};
window.setInterval(sWalk, 100);






   