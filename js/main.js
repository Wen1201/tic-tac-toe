
$(".line1-position1").on("click", printMousePos1);
$(".line1-position2").on("click", printMousePos2);
$(".line1-position3").on("click", printMousePos3);
$(".line2-position1").on("click", printMousePos4);
$(".line2-position2").on("click", printMousePos5);
$(".line2-position3").on("click", printMousePos6);
$(".line3-position1").on("click", printMousePos7);
$(".line3-position2").on("click", printMousePos8);
$(".line3-position3").on("click", printMousePos9);

var count = 0;
$('body').on('click', '.box', function () {
    count++;
});
const $box1 = $(".line1-position1")

console.log( $box1 );
function printMousePos1( ) {   
        if (count % 2 == 0){
              $('#img1').attr('src', 'images/ironman.png');
        }else{
            $('#img1').attr('src', 'images/thanos.jpeg');
            
           };
};

const $box2 = $(".line1-position2")
console.log( $box2 );

function printMousePos2( ) { 
        if (count % 2 == 0){
              $('#img2').attr('src', 'images/ironman.png');
        }else{
            $('#img2').attr('src', 'images/thanos.jpeg');
            
           };   
};

const $box3 = $(".line1-position3")
console.log( $box3 );
function printMousePos3( ) {
    
//    $box3.css({backgroundColor: 'red',
// });
     if (count % 2 == 0){
        $('#img3').attr('src', 'images/ironman.png');
      }else{
         $('#img3').attr('src', 'images/thanos.jpeg');
      };
};

const $box4 = $(".line2-position1")
console.log( $box4 );
function printMousePos4( ) {
//    $box4.css({backgroundColor: 'red',
// }); 
if (count % 2 == 0){
    $('#img4').attr('src', 'images/ironman.png');
  }else{
     $('#img4').attr('src', 'images/thanos.jpeg');
  };
};

const $box5 = $(".line2-position2")
console.log( $box5 );
function printMousePos5( ) {
//    $box5.css({backgroundColor: 'red',
// });
if (count % 2 == 0){
    $('#img5').attr('src', 'images/ironman.png');
  }else{
     $('#img5').attr('src', 'images/thanos.jpeg');
  };
};

const $box6 = $(".line2-position3")
console.log( $box6 );
function printMousePos6( ) {
//    $box6.css({backgroundColor: 'red',
// });
if (count % 2 == 0){
    $('#img6').attr('src', 'images/ironman.png');
  }else{
     $('#img6').attr('src', 'images/thanos.jpeg');
  };
};

const $box7 = $(".line3-position1")
console.log( $box7 );
function printMousePos7( ) {
//    $box7.css({backgroundColor: 'red',
// });
if (count % 2 == 0){
    $('#img7').attr('src', 'images/ironman.png');
  }else{
     $('#img7').attr('src', 'images/thanos.jpeg');
  };
};

const $box8 = $(".line3-position2")
console.log( $box8 );
function printMousePos8( ) {
//    $box8.css({backgroundColor: 'red',
// });
if (count % 2 == 0){
    $('#img8').attr('src', 'images/ironman.png');
  }else{
     $('#img8').attr('src', 'images/thanos.jpeg');
  };
};

const $box9 = $(".line3-position3")
console.log( $box9 );
function printMousePos9( ) {
//    $box9.css({backgroundColor: 'red',
// });
if (count % 2 == 0){
    $('#img9').attr('src', 'images/ironman.png');
  }else{
     $('#img9').attr('src', 'images/thanos.jpeg');
  };
};

