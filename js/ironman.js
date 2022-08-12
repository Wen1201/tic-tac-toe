$("#ironman").on("click", playgame); //when player choose ironman as avenger
function playgame(){                 //start the game
    $('h2').text("Iron Man's Turn"); //"choose an avenger" change to "Iron Man's Turn"

$(".line1-position1").on("click", printMousePos1);
$(".line1-position2").on("click", printMousePos2);
$(".line1-position3").on("click", printMousePos3);
$(".line2-position1").on("click", printMousePos4);
$(".line2-position2").on("click", printMousePos5);
$(".line2-position3").on("click", printMousePos6);
$(".line3-position1").on("click", printMousePos7);
$(".line3-position2").on("click", printMousePos8);
$(".line3-position3").on("click", printMousePos9);

var count = 1;  //start from the first click 
$('body').on('click', '.box', function () {
   if (count < 9) {
    count++;
   } else if(count = 9){ //when count equal to 9, check if the game is win or draw
    // 8 ways to win
      if (allboxes[0] == allboxes[1] && allboxes[0]== allboxes[2]  || allboxes[0] == allboxes[3] && allboxes[0]== allboxes[6] || allboxes[0] == allboxes[4] && allboxes[0]== allboxes[8] || allboxes[1] == allboxes[4] && allboxes[1]== allboxes[7]|| allboxes[2] == allboxes[5] && allboxes[2] == allboxes[8] || allboxes[2] == allboxes[4] &&allboxes[2] == allboxes[6]|| allboxes[3] == allboxes[4] && allboxes[3] == allboxes[5] || allboxes[6] == allboxes[7] && allboxes[6] == allboxes[8]) {  
       console.log('You WIn')  
      } else {
        $('h2').text("Draw"); //change h2 to "Draw"
       console.log('Again')
      } 
   };   
});
//creat an array
var allboxes = ['box1', 'box2', 'box3', 'box4', 'box5', 'box6', 'box7', 'box8', 'box9'];

const $box1 = $(".line1-position1")
console.log( $box1 );
function printMousePos1( ) {   //check if the count amount is odd or even
        if (count % 2 != 0){ //odd number is the first player which is Iron Man
              $('#img1').attr('src', 'images/ironman.png'); // change img to iron man
              $('h2').text("Thanos's Turn"); //change h2 to "Thanos's Turn"
               allboxes[0] = $('#img1').attr('src');    //put iron man as first element in array
               //check if iron man wins 
              if (allboxes[0] == allboxes[1] && allboxes[0]== allboxes[2]  || allboxes[0] == allboxes[3] && allboxes[0]== allboxes[6] || allboxes[0] == allboxes[4] && allboxes[0]== allboxes[8] ) {
                 $('#I-hidding').css('visibility', 'visible'); //gif shows up
                 $('h2').text("Iron Man Win");
                 console.log('You WIn')
              } else {
              };
        }else{ //even number is the second player which is Thanos
            $('#img1').attr('src', 'images/thanos.jpeg'); // change img to Thanos
            $('h2').text("Iron Man's Turn");  //change h2 to "Iron Man's Turn"
            allboxes[0] = $('#img1').attr('src');    //put iron man as first element in array
            if (allboxes[0] == allboxes[1] && allboxes[0]== allboxes[2]  || allboxes[0] == allboxes[3] && allboxes[0]== allboxes[6] || allboxes[0] == allboxes[4] && allboxes[0]== allboxes[8] ) {
                $('#TI-hidding').css('visibility', 'visible');
                $('h2').text("Thanos Win");
                console.log('You WIn')
            } else {
            };
        };                 
  };//printMousePos1

const $box2 = $(".line1-position2")
console.log( $box2 );
function printMousePos2( ) { 
        if (count % 2 != 0){
              $('#img2').attr('src', 'images/ironman.png');
              $('h2').text("Thanos's Turn");
              allboxes[1] =$('#img2').attr('src');         
              if (allboxes[0] == allboxes[1]&& allboxes[0] == allboxes[2] ||  allboxes[1] == allboxes[4] && allboxes[1]== allboxes[7]) {
                 $('#I-hidding').css('visibility', 'visible');
                 $('h2').text("Iron Man Win");
                 console.log('You WIn')
               } else {
               }; 
        }else{
            $('#img2').attr('src', 'images/thanos.jpeg');
            $('h2').text("Iron Man's Turn");
            allboxes[1] =$('#img2').attr('src');
            if (allboxes[0] == allboxes[1]&& allboxes[0] == allboxes[2] ||  allboxes[1] == allboxes[4] && allboxes[1]== allboxes[7]) {
              $('#TI-hidding').css('visibility', 'visible');
              $('h2').text("Thanos Win");
              console.log('You WIn')
            } else {
            }; 
        };                  
  };//printMousePos2

const $box3 = $(".line1-position3")
console.log( $box3 );
function printMousePos3( ) {
        if (count % 2 != 0){
            $('#img3').attr('src', 'images/ironman.png');
            $('h2').text("Thanos's Turn");
            allboxes[2] =$('#img3').attr('src');
            if (allboxes[0] == allboxes[1] && allboxes[0] == allboxes[2] || allboxes[2] == allboxes[5] && allboxes[2] == allboxes[8] || allboxes[2] == allboxes[4] &&allboxes[2] == allboxes[6] ) {
                $('#I-hidding').css('visibility', 'visible');
                $('h2').text("Iron Man Win");
                console.log('You WIn')
            } else {
            };
        }else{
            $('#img3').attr('src', 'images/thanos.jpeg'); 
            $('h2').text("Iron Man's Turn");
            allboxes[2] =$('#img3').attr('src');
            if (allboxes[0] == allboxes[1] && allboxes[0] == allboxes[2] || allboxes[2] == allboxes[5] && allboxes[2] == allboxes[8] || allboxes[2] == allboxes[4] &&allboxes[2] == allboxes[6] ) {
                $('#TI-hidding').css('visibility', 'visible');
                $('h2').text("Thanos Win");
                console.log('You WIn')
            } else {
            };
        };       
  };//printMousePos3

const $box4 = $(".line2-position1")
console.log( $box4 );
function printMousePos4( ) {
         if (count % 2 != 0){
            $('#img4').attr('src', 'images/ironman.png');
            $('h2').text("Thanos's Turn");
            allboxes[3] =$('#img4').attr('src');
            if ( allboxes[0] == allboxes[3] && allboxes[0] == allboxes[6] || allboxes[3] == allboxes[4] && allboxes[3] == allboxes[5] ) {
                $('#I-hidding').css('visibility', 'visible');
                $('h2').text("Iron Man Win");
                console.log('You WIn')
            } else {
            };
         } else if(count % 2 == 0){
            $('#img4').attr('src', 'images/thanos.jpeg'); 
            $('h2').text("Iron Man's Turn");
            allboxes[3] =$('#img4').attr('src');
            if ( allboxes[0] == allboxes[3] && allboxes[0] == allboxes[6] || allboxes[3] == allboxes[4] && allboxes[3] == allboxes[5] ) {
                $('#TI-hidding').css('visibility', 'visible');
                $('h2').text("Thanos Win");
                console.log('You WIn')
            } else {
            };
        } 
 };//printMousePos4
   
const $box5 = $(".line2-position2")
console.log( $box5 );
function printMousePos5( ) {
         if (count % 2 != 0){
            $('#img5').attr('src', 'images/ironman.png');
            $('h2').text("Thanos's Turn");
            allboxes[4] =$('#img5').attr('src'); 
            if ( allboxes[0] == allboxes[4] && allboxes[0] == allboxes[8] || allboxes[1] == allboxes[4] && allboxes[1] == allboxes[7] || allboxes[2] == allboxes[4] && allboxes[2] == allboxes[6] || allboxes[3] == allboxes[4] && allboxes[3] == allboxes[5] ) {
                $('#I-hidding').css('visibility', 'visible');
                $('h2').text("Iron Man Win");
                console.log('You WIn')
            } else {
            };
         }else{
               $('#img5').attr('src', 'images/thanos.jpeg');
               $('h2').text("Iron Man's Turn");
               allboxes[4] =$('#img5').attr('src'); 
               if ( allboxes[0] == allboxes[4] && allboxes[0] == allboxes[8] || allboxes[1] == allboxes[4] && allboxes[1] == allboxes[7] || allboxes[2] == allboxes[4] && allboxes[2] == allboxes[6] || allboxes[3] == allboxes[4] && allboxes[3] == allboxes[5] ) {
                    $('#TI-hidding').css('visibility', 'visible');
                    $('h2').text("Thanos Win");
                    console.log('You WIn')
                } else {
                };
         };
    
  };//printMousePos5

const $box6 = $(".line2-position3")
console.log( $box6 );
function printMousePos6( ) {
        if (count % 2 != 0){
           $('#img6').attr('src', 'images/ironman.png');
           $('h2').text("Thanos's Turn");
           allboxes[5] =$('#img6').attr('src');
           if ( allboxes[2] == allboxes[5] && allboxes[2] == allboxes[8] || allboxes[3] == allboxes[4] && allboxes[3] == allboxes[5] ) {
                $('#I-hidding').css('visibility', 'visible');
                $('h2').text("Iron Man Win");
                console.log('You WIn')
            } else {
            };
        }else{
            $('#img6').attr('src', 'images/thanos.jpeg');
            $('h2').text("Iron Man's Turn");
            allboxes[5] =$('#img6').attr('src');
            if ( allboxes[2] == allboxes[5] && allboxes[2] == allboxes[8] || allboxes[3] == allboxes[4] && allboxes[3] == allboxes[5] ) {
                $('#TI-hidding').css('visibility', 'visible');
                $('h2').text("Thanos Win");
                console.log('You WIn')   
            } else {
            };
        };  
  };//printMousePos6

const $box7 = $(".line3-position1")
console.log( $box7 );
function printMousePos7( ) {
        if (count % 2 != 0){
            $('#img7').attr('src', 'images/ironman.png');
            $('h2').text("Thanos's Turn");
            allboxes[6] =$('#img7').attr('src');     
                if (allboxes[0] == allboxes[3] && allboxes[0] == allboxes[6] || allboxes[2] == allboxes[4] &&allboxes[2] == allboxes[6] || allboxes[6] == allboxes[7] && allboxes[6] == allboxes[8]) {
                    $('#I-hidding').css('visibility', 'visible');
                    $('h2').text("Iron Man Win");
                    console.log('You WIn')
                } else {
                };
        }else{
            $('#img7').attr('src', 'images/thanos.jpeg');
            $('h2').text("Iron Man's Turn");
            allboxes[6] =$('#img7').attr('src');
            if (allboxes[0] == allboxes[3] && allboxes[0] == allboxes[6] || allboxes[2] == allboxes[4] &&allboxes[2] == allboxes[6] || allboxes[6] == allboxes[7] && allboxes[6] == allboxes[8]) {
                $('#TI-hidding').css('visibility', 'visible');
                $('h2').text("Thanos Win");
                console.log('You WIn')
            } else {
            };
        };       
  };//printMousePos7

const $box8 = $(".line3-position2")
console.log( $box8 );
function printMousePos8( ) {
         if (count % 2 != 0){
            $('#img8').attr('src', 'images/ironman.png');
            $('h2').text("Thanos's Turn");
            allboxes[7] =$('#img8').attr('src');       
               if ( allboxes[1] == allboxes[4] && allboxes[1] == allboxes[7] || allboxes[6] == allboxes[7] && allboxes[6] == allboxes[8] ) {
                  $('#I-hidding').css('visibility', 'visible');
                  $('h2').text("Iron Man Win");
                  console.log('You WIn')
               } else {
               };
        }else{
             $('#img8').attr('src', 'images/thanos.jpeg');
             $('h2').text("Iron Man's Turn");
             allboxes[7] =$('#img8').attr('src');       
             if ( allboxes[1] == allboxes[4] && allboxes[1] == allboxes[7] || allboxes[6] == allboxes[7] && allboxes[6] == allboxes[8] ) {
                  $('#TI-hidding').css('visibility', 'visible');
                  $('h2').text("Thanos Win");
                  console.log('You WIn')
              } else {
              };
        };    
  };//printMousePos8

const $box9 = $(".line3-position3")
console.log( $box9 );
function printMousePos9( ) {
        if (count % 2 != 0){
            $('#img9').attr('src', 'images/ironman.png');
            $('h2').text("Thanos's Turn");
            allboxes[8] = $('#img9').attr('src');  
            if ( allboxes[0] == allboxes[4] && allboxes[0] == allboxes[8] || allboxes[2] == allboxes[5] && allboxes[2] == allboxes[8] || allboxes[6] == allboxes[7] && allboxes[6] == allboxes[8]) {
              $('#I-hidding').css('visibility', 'visible');
              $('h2').text("Iron Man Win");
              console.log('You WIn')
            } else {
            };
        }else{
             $('#img9').attr('src', 'images/thanos.jpeg');
             $('h2').text("Iron Man's Turn");
             allboxes[8] = $('#img9').attr('src');  
             if ( allboxes[0] == allboxes[4] && allboxes[0] == allboxes[8] || allboxes[2] == allboxes[5] && allboxes[2] == allboxes[8] || allboxes[6] == allboxes[7] && allboxes[6] == allboxes[8]) {
                $('#TI-hidding').css('visibility', 'visible');
                $('h2').text("Thanos Win");
                console.log('You WIn')
             } else {
             };
        };  
  }//printMousePos9
}



 

 

