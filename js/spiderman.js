$("#spiderman").on("click", playgame);
function playgame(){
    $('h2').text("Spider Man's Turn");

    
// $(".box").on("click", again);
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
  
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  window.location.reload();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    window.location.reload();
  }
}
$(".line1-position1").on("click", printMousePos1);
$(".line1-position2").on("click", printMousePos2);
$(".line1-position3").on("click", printMousePos3);
$(".line2-position1").on("click", printMousePos4);
$(".line2-position2").on("click", printMousePos5);
$(".line2-position3").on("click", printMousePos6);
$(".line3-position1").on("click", printMousePos7);
$(".line3-position2").on("click", printMousePos8);
$(".line3-position3").on("click", printMousePos9);

var count = 1;
$('body').on('click', '.box', function () {
   if (count < 9) {
    count++;
   } else if(count = 9){
    if (allboxes[0] == allboxes[1] && allboxes[0]== allboxes[2]  || allboxes[0] == allboxes[3] && allboxes[0]== allboxes[6] || allboxes[0] == allboxes[4] && allboxes[0]== allboxes[8] || allboxes[1] == allboxes[4] && allboxes[1]== allboxes[7]|| allboxes[2] == allboxes[5] && allboxes[2] == allboxes[8] || allboxes[2] == allboxes[4] &&allboxes[2] == allboxes[6]|| allboxes[3] == allboxes[4] && allboxes[3] == allboxes[5] || allboxes[6] == allboxes[7] && allboxes[6] == allboxes[8]) {
       console.log('You WIn')  
    } else {
       console.log('Again')
    }
  
    };
    
});
var allboxes = ['box1', 'box2', 'box3', 'box4', 'box5', 'box6', 'box7', 'box8', 'box9'];

const $box1 = $(".line1-position1")
console.log( $box1 );
function printMousePos1( ) {   
        if (count % 2 != 0){
              $('#img1').attr('src', 'images/spiderman.jpeg');
              $('h2').text("Thanos's Turn");
            }else{
            $('#img1').attr('src', 'images/thanos.jpeg'); 
            $('h2').text("Spider Man's Turn");
        };
           
           allboxes[0] = $('#img1').attr('src');    
           if (allboxes[0] == allboxes[1] && allboxes[0]== allboxes[2]  || allboxes[0] == allboxes[3] && allboxes[0]== allboxes[6] || allboxes[0] == allboxes[4] && allboxes[0]== allboxes[8] ) {
            
            console.log('You WIn')
            
         } else {
            
         };
          
};

const $box2 = $(".line1-position2")
console.log( $box2 );

function printMousePos2( ) { 
        if (count % 2 != 0){
              $('#img2').attr('src', 'images/spiderman.jpeg');
              $('h2').text("Thanos's Turn");
            }else{
            $('#img2').attr('src', 'images/thanos.jpeg');
            $('h2').text("Spider Man's Turn");
           }; 
            allboxes[1] =$('#img2').attr('src');
         
           if (allboxes[0] == allboxes[1]&& allboxes[0] == allboxes[2] ||  allboxes[1] == allboxes[4] && allboxes[1]== allboxes[7]) {
            console.log('You WIn')
         } else {
            
         };      
};

const $box3 = $(".line1-position3")
console.log( $box3 );
function printMousePos3( ) {
    
//    $box3.css({backgroundColor: 'red',
// });
     if (count % 2 != 0){
        $('#img3').attr('src', 'images/spiderman.jpeg');
        $('h2').text("Thanos's Turn");
    }else{
         $('#img3').attr('src', 'images/thanos.jpeg'); 
         $('h2').text("Spider Man's Turn");
        };
       allboxes[2] =$('#img3').attr('src');
      
      if (allboxes[0] == allboxes[1] && allboxes[0] == allboxes[2] || allboxes[2] == allboxes[5] && allboxes[2] == allboxes[8] || allboxes[2] == allboxes[4] &&allboxes[2] == allboxes[6] ) {
        console.log('You WIn')
     } else {
        
     }; 
};

const $box4 = $(".line2-position1")
console.log( $box4 );

function printMousePos4( ) {
//    $box4.css({backgroundColor: 'red',
// }); 
if (count % 2 != 0){
    $('#img4').attr('src', 'images/spiderman.jpeg');
    $('h2').text("Thanos's Turn");
  }else if(count % 2 == 0){
     $('#img4').attr('src', 'images/thanos.jpeg'); 
     $('h2').text("Spider Man's Turn");
    };
   allboxes[3] =$('#img4').attr('src');

  if ( allboxes[0] == allboxes[3] && allboxes[0] == allboxes[6] || allboxes[3] == allboxes[4] && allboxes[3] == allboxes[5] ) {
    console.log('You WIn')
 } 

  
};

const $box5 = $(".line2-position2")
console.log( $box5 );

function printMousePos5( ) {
//    $box5.css({backgroundColor: 'red',
// });
if (count % 2 != 0){
    $('#img5').attr('src', 'images/spiderman.jpeg');
    $('h2').text("Thanos's Turn");
  }else{
     $('#img5').attr('src', 'images/thanos.jpeg');
     $('h2').text("Spider Man's Turn");
    };
   allboxes[4] =$('#img5').attr('src');
  
  if ( allboxes[0] == allboxes[4] && allboxes[0] == allboxes[8] || allboxes[1] == allboxes[4] && allboxes[1] == allboxes[7] || allboxes[2] == allboxes[4] && allboxes[2] == allboxes[6] || allboxes[3] == allboxes[4] && allboxes[3] == allboxes[5] ) {
    console.log('You WIn')
 } else {
    
 }; 
};

const $box6 = $(".line2-position3")
console.log( $box6 );

function printMousePos6( ) {
//    $box6.css({backgroundColor: 'red',
// });
if (count % 2 != 0){
    $('#img6').attr('src', 'images/spiderman.jpeg');
    $('h2').text("Thanos's Turn");
  }else{
     $('#img6').attr('src', 'images/thanos.jpeg');
     $('h2').text("Spider Man's Turn");
    };
  allboxes[5] =$('#img6').attr('src');
 
  if ( allboxes[2] == allboxes[5] && allboxes[2] == allboxes[8] || allboxes[3] == allboxes[4] && allboxes[3] == allboxes[5] ) {
    console.log('You WIn')
 } else {
    
 };
};

const $box7 = $(".line3-position1")
console.log( $box7 );

function printMousePos7( ) {
//    $box7.css({backgroundColor: 'red',
// });
     if (count % 2 != 0){
       $('#img7').attr('src', 'images/spiderman.jpeg');
       $('h2').text("Thanos's Turn");
    }else{
        $('#img7').attr('src', 'images/thanos.jpeg');
        $('h2').text("Spider Man's Turn");
    };
       allboxes[6] =$('#img7').attr('src');
      
  if (allboxes[0] == allboxes[3] && allboxes[0] == allboxes[6] || allboxes[2] == allboxes[4] &&allboxes[2] == allboxes[6] || allboxes[6] == allboxes[7] && allboxes[6] == allboxes[8]) {
    console.log('You WIn')
 } else {
    
 };
};

const $box8 = $(".line3-position2")
console.log( $box8 );

function printMousePos8( ) {
//    $box8.css({backgroundColor: 'red',
// });
   if (count % 2 != 0){
      $('#img8').attr('src', 'images/spiderman.jpeg');
      $('h2').text("Thanos's Turn");
    }else{
       $('#img8').attr('src', 'images/thanos.jpeg');
       $('h2').text("Spider Man's Turn");
    };
      allboxes[7] =$('#img8').attr('src');
       
     if ( allboxes[1] == allboxes[4] && allboxes[1] == allboxes[7] || allboxes[6] == allboxes[7] && allboxes[6] == allboxes[8] ) {
        console.log('You WIn')
     } else {
       
     };
  };


const $box9 = $(".line3-position3")
console.log( $box9 );

function printMousePos9( ) {
//    $box9.css({backgroundColor: 'red',
// });
if (count % 2 != 0){
    $('#img9').attr('src', 'images/spiderman.jpeg');
    $('h2').text("Thanos's Turn");
  }else{
     $('#img9').attr('src', 'images/thanos.jpeg');
     $('h2').text("Spider Man's Turn");
    };
   allboxes[8] = $('#img9').attr('src');
  
  if ( allboxes[0] == allboxes[4] && allboxes[0] == allboxes[8] || allboxes[2] == allboxes[5] && allboxes[2] == allboxes[8] || allboxes[6] == allboxes[7] && allboxes[6] == allboxes[8]) {
    console.log('You WIn')
 } else {
    
 };
 }
};
