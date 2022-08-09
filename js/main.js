const turn = document.querySelector('h2');
turn.style.position = 'relative';
width = $(".turn")[0].clientWidth;
direction = 7;


const Turn = function(){
    const currentLeft = ;
    edge = (window.innerWidth-501) / 2;

    if(currentLeft >= edge){;
        direction = 7
    }
    //    turn.style.transform = "scaleX(-1)";
      
       
    // }else if(currentLeft <= edge) {
    //     direction = -7;
        
       
    // }
    
    turn.style.left = `${currentLeft + direction}px`
    
};

window.setInterval(Turn, 50);

// document.getElementById("turn").textContent=`${x}`;