$("#captain").on("click", playgame);
function playgame(){
    $('h2').text("Captain's Turn");

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
   } else if(count === 9){
     if (allboxes[0] == allboxes[1] && allboxes[0]== allboxes[2]  || allboxes[0] == allboxes[3] && allboxes[0]== allboxes[6] || allboxes[0] == allboxes[4] && allboxes[0]== allboxes[8] || allboxes[1] == allboxes[4] && allboxes[1]== allboxes[7]|| allboxes[2] == allboxes[5] && allboxes[2] == allboxes[8] || allboxes[2] == allboxes[4] &&allboxes[2] == allboxes[6]|| allboxes[3] == allboxes[4] && allboxes[3] == allboxes[5] || allboxes[6] == allboxes[7] && allboxes[6] == allboxes[8]) {
        console.log('You WIn')  
        
     } else {
        $('h2').text("Draw");
        console.log('Again')
     }
   
     };
    
});
var allboxes = ['box1', 'box2', 'box3', 'box4', 'box5', 'box6', 'box7', 'box8', 'box9'];

const $box1 = $(".line1-position1")
console.log( $box1 );
function printMousePos1( ) {   
         if (count % 2 != 0){
            $('#img1').attr('src', 'images/captain2.png');
            $('h2').text("Thanos's Turn");
            allboxes[0] = $('#img1').attr('src');    
            if (allboxes[0] == allboxes[1] && allboxes[0]== allboxes[2]  || allboxes[0] == allboxes[3] && allboxes[0]== allboxes[6] || allboxes[0] == allboxes[4] && allboxes[0]== allboxes[8] ) {
              $('#C-hidding').css('visibility', 'visible');
              $('h2').text("Captain Amercia Wins");
              console.log('You WIn')          
            } else {           
            };
        }else{
            $('#img1').attr('src', 'images/thanos.jpeg'); 
            $('h2').text("Captain's Turn");
            allboxes[0] = $('#img1').attr('src');    
            if (allboxes[0] == allboxes[1] && allboxes[0]== allboxes[2]  || allboxes[0] == allboxes[3] && allboxes[0]== allboxes[6] || allboxes[0] == allboxes[4] && allboxes[0]== allboxes[8] ) {
               $('#TC-hidding').css('visibility', 'visible');
               $('h2').text("Thanos Wins");
               console.log('You WIn')            
            } else {   
            };
        };         
};

const $box2 = $(".line1-position2")
console.log( $box2 );
function printMousePos2( ) { 
        if (count % 2 != 0){
            $('#img2').attr('src', 'images/captain2.png');
            $('h2').text("Thanos's Turn");
            allboxes[1] =$('#img2').attr('src');       
            if (allboxes[0] == allboxes[1]&& allboxes[0] == allboxes[2] ||  allboxes[1] == allboxes[4] && allboxes[1]== allboxes[7]) {
              $('#C-hidding').css('visibility', 'visible');
              $('h2').text("Captain Amercia Wins");
              console.log('You WIn')
            } else {            
            };
        }else{
            $('#img2').attr('src', 'images/thanos.jpeg');
            $('h2').text("Captain's Turn");
            allboxes[1] =$('#img2').attr('src');         
            if (allboxes[0] == allboxes[1]&& allboxes[0] == allboxes[2] ||  allboxes[1] == allboxes[4] && allboxes[1]== allboxes[7]) {
              $('#TC-hidding').css('visibility', 'visible');
              $('h2').text("Thanos Wins");
              console.log('You WIn')
            } else {           
            };
        };                  
};

const $box3 = $(".line1-position3")
console.log( $box3 );
function printMousePos3( ) {
       if (count % 2 != 0){
          $('#img3').attr('src', 'images/captain2.png');
          $('h2').text("Thanos's Turn");
          allboxes[2] =$('#img3').attr('src');    
          if (allboxes[0] == allboxes[1] && allboxes[0] == allboxes[2] || allboxes[2] == allboxes[5] && allboxes[2] == allboxes[8] || allboxes[2] == allboxes[4] &&allboxes[2] == allboxes[6] ) {
            $('#C-hidding').css('visibility', 'visible');
            $('h2').text("Captain Amercia Wins");
            console.log('You WIn')
          } else {      
          };
       }else{
         $('#img3').attr('src', 'images/thanos.jpeg'); 
         $('h2').text("Captain's Turn");
         allboxes[2] =$('#img3').attr('src');      
         if (allboxes[0] == allboxes[1] && allboxes[0] == allboxes[2] || allboxes[2] == allboxes[5] && allboxes[2] == allboxes[8] || allboxes[2] == allboxes[4] &&allboxes[2] == allboxes[6] ) {
           $('#TC-hidding').css('visibility', 'visible');
           $('h2').text("Thanos Wins");
           console.log('You WIn')
         } else {    
         };
       };       
};

const $box4 = $(".line2-position1")
console.log( $box4 );
function printMousePos4( ) {
        if (count % 2 != 0){
           $('#img4').attr('src', 'images/captain2.png');
           $('h2').text("Thanos's Turn");
           allboxes[3] =$('#img4').attr('src');
           if ( allboxes[0] == allboxes[3] && allboxes[0] == allboxes[6] || allboxes[3] == allboxes[4] && allboxes[3] == allboxes[5] ) {
              $('#C-hidding').css('visibility', 'visible');
              $('h2').text("Captain Amercia Wins");
              console.log('You WIn')
           } 
        }else if(count % 2 == 0){
           $('#img4').attr('src', 'images/thanos.jpeg'); 
           $('h2').text("Captain's Turn");
           allboxes[3] =$('#img4').attr('src');
           if ( allboxes[0] == allboxes[3] && allboxes[0] == allboxes[6] || allboxes[3] == allboxes[4] && allboxes[3] == allboxes[5] ) {
              $('#TC-hidding').css('visibility', 'visible');
              $('h2').text("Thanos Wins");
              console.log('You WIn')
            } 
  } 
};

const $box5 = $(".line2-position2")
console.log( $box5 );
function printMousePos5( ) {
  if (count % 2 != 0){
    $('#img5').attr('src', 'images/captain2.png');
    $('h2').text("Thanos's Turn");
    allboxes[4] =$('#img5').attr('src');  
    if ( allboxes[0] == allboxes[4] && allboxes[0] == allboxes[8] || allboxes[1] == allboxes[4] && allboxes[1] == allboxes[7] || allboxes[2] == allboxes[4] && allboxes[2] == allboxes[6] || allboxes[3] == allboxes[4] && allboxes[3] == allboxes[5] ) {
    $('#C-hidding').css('visibility', 'visible');
    $('h2').text("Captain Amercia Wins");
    console.log('You WIn')
   } else {     
   };
}else{
     $('#img5').attr('src', 'images/thanos.jpeg');
     $('h2').text("Captain's Turn");
     allboxes[4] =$('#img5').attr('src');
  
     if ( allboxes[0] == allboxes[4] && allboxes[0] == allboxes[8] || allboxes[1] == allboxes[4] && allboxes[1] == allboxes[7] || allboxes[2] == allboxes[4] && allboxes[2] == allboxes[6] || allboxes[3] == allboxes[4] && allboxes[3] == allboxes[5] ) {
       $('#TC-hidding').css('visibility', 'visible');
       $('h2').text("Thanos Wins");

       console.log('You WIn')
    } else {
       
    };
  };
    
};

const $box6 = $(".line2-position3")
console.log( $box6 );

function printMousePos6( ) {

if (count % 2 != 0){
    $('#img6').attr('src', 'images/captain2.png');
    $('h2').text("Thanos's Turn");
    allboxes[5] =$('#img6').attr('src');
 
    if ( allboxes[2] == allboxes[5] && allboxes[2] == allboxes[8] || allboxes[3] == allboxes[4] && allboxes[3] == allboxes[5] ) {
    $('#C-hidding').css('visibility', 'visible');
    $('h2').text("Captain Amercia Wins");

      console.log('You WIn')
   } else {
      
   };
}else{
     $('#img6').attr('src', 'images/thanos.jpeg');
     $('h2').text("Captain's Turn");
     allboxes[5] =$('#img6').attr('src');
 
  if ( allboxes[2] == allboxes[5] && allboxes[2] == allboxes[8] || allboxes[3] == allboxes[4] && allboxes[3] == allboxes[5] ) {
       $('#TC-hidding').css('visibility', 'visible');
       $('h2').text("Thanos Wins");

    console.log('You WIn')
 } else {
    
 };
  };
  
};

const $box7 = $(".line3-position1")
console.log( $box7 );

function printMousePos7( ) {

     if (count % 2 != 0){
       $('#img7').attr('src', 'images/captain2.png');
       $('h2').text("Thanos's Turn");
       allboxes[6] =$('#img7').attr('src');
      
  if (allboxes[0] == allboxes[3] && allboxes[0] == allboxes[6] || allboxes[2] == allboxes[4] &&allboxes[2] == allboxes[6] || allboxes[6] == allboxes[7] && allboxes[6] == allboxes[8]) {
    $('#C-hidding').css('visibility', 'visible');
    $('h2').text("Captain Amercia Wins");

    console.log('You WIn')
 } else {
    
 };
    }else{
        $('#img7').attr('src', 'images/thanos.jpeg');
        $('h2').text("Captain's Turn");
        allboxes[6] =$('#img7').attr('src');
      
  if (allboxes[0] == allboxes[3] && allboxes[0] == allboxes[6] || allboxes[2] == allboxes[4] &&allboxes[2] == allboxes[6] || allboxes[6] == allboxes[7] && allboxes[6] == allboxes[8]) {
    $('#TC-hidding').css('visibility', 'visible');
    $('h2').text("Thanos Wins");

    console.log('You WIn')
 } else {
    
 };
    };
       
};

const $box8 = $(".line3-position2")
console.log( $box8 );

function printMousePos8( ) {

   if (count % 2 != 0){
      $('#img8').attr('src', 'images/captain2.png');
      $('h2').text("Thanos's Turn");
      allboxes[7] =$('#img8').attr('src');
       
     if ( allboxes[1] == allboxes[4] && allboxes[1] == allboxes[7] || allboxes[6] == allboxes[7] && allboxes[6] == allboxes[8] ) {
    $('#C-hidding').css('visibility', 'visible');
    $('h2').text("Captain Amercia Wins");

        console.log('You WIn')
     } else {
       
     };
    }else{
       $('#img8').attr('src', 'images/thanos.jpeg');
       $('h2').text("Captain's Turn");
       allboxes[7] =$('#img8').attr('src');
       
     if ( allboxes[1] == allboxes[4] && allboxes[1] == allboxes[7] || allboxes[6] == allboxes[7] && allboxes[6] == allboxes[8] ) {
    $('#TC-hidding').css('visibility', 'visible');
    $('h2').text("Thanos Wins");

        console.log('You WIn')
     } else {
       
     };
    };
      
  };


const $box9 = $(".line3-position3")
console.log( $box9 );

function printMousePos9( ) {

if (count % 2 != 0){
    $('#img9').attr('src', 'images/captain2.png');
    $('h2').text("Thanos's Turn");
    allboxes[8] = $('#img9').attr('src');
  
  if ( allboxes[0] == allboxes[4] && allboxes[0] == allboxes[8] || allboxes[2] == allboxes[5] && allboxes[2] == allboxes[8] || allboxes[6] == allboxes[7] && allboxes[6] == allboxes[8]) {
    $('#C-hidding').css('visibility', 'visible');
    $('h2').text("Captain Amercia Wins");

    console.log('You WIn')
 } else {
    
 };
}else{
     $('#img9').attr('src', 'images/thanos.jpeg');
     $('h2').text("Captain's Turn");
     allboxes[8] = $('#img9').attr('src');
  
  if ( allboxes[0] == allboxes[4] && allboxes[0] == allboxes[8] || allboxes[2] == allboxes[5] && allboxes[2] == allboxes[8] || allboxes[6] == allboxes[7] && allboxes[6] == allboxes[8]) {
    $('#TC-hidding').css('visibility', 'visible');
    $('h2').text("Thanos Wins");

    console.log('You WIn')
 } else {
    
 };
    };
   
 }
};
