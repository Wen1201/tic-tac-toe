var avenger= ['Ironman', 'Spiderman', 'Captain'];
for (let i = 0; i < avenger.length; i++) {
    $(`#${avenger[i]}`).on("click", playgame);
    function playgame(){
        $('h2').text(`${avenger[i]}'s Turn`);
        $(".box").on("click", printMousePos);
    var count = 1;
    $('body').on('click', '.box', function () {
    if (count < 9) {
        count++;
    } else if(count === 9){
        if ( win()) {
        console.log('You WIn')  
        } else {
            $('h2').text("Draw");
        console.log('Again')
        } 
    };
    });
    var allboxes = ['box1', 'box2', 'box3', 'box4', 'box5', 'box6', 'box7', 'box8', 'box9'];
    function printMousePos(){
        function win() {
            if(allboxes[0] == allboxes[1] && allboxes[0]== allboxes[2]  || allboxes[0] == allboxes[3] && allboxes[0]== allboxes[6] || allboxes[0] == allboxes[4] && allboxes[0]== allboxes[8] || allboxes[1] == allboxes[4] && allboxes[1]== allboxes[7]|| allboxes[2] == allboxes[5] && allboxes[2] == allboxes[8] || allboxes[2] == allboxes[4] &&allboxes[2] == allboxes[6]|| allboxes[3] == allboxes[4] && allboxes[3] == allboxes[5] || allboxes[6] == allboxes[7] && allboxes[6] == allboxes[8]){
                return true;
            }
        }
        const position = $(this).attr('id');
        if (count % 2 != 0){
            $(`#img${position}`).attr('src', `images/${avenger[i]}.png`);
            $('h2').text("Thanos's Turn");
            allboxes[position - 1] = $(`#img${position}`).attr('src');    
            if (win()) {
                $(`#${avenger[i]}-hidding`).css('visibility', 'visible');
                $('h2').text(`${avenger[i]} Wins`);
                console.log('You WIn')  
            } 
        }else{
            $(`#img${position}`).attr('src', 'images/thanos.jpeg'); 
            $('h2').text(`${avenger[i]}'s Turn`);
            allboxes[position - 1] = $(`#img${position}`).attr('src');    
            if (win()) {
                $(`#T${avenger[i]}-hidding`).css('visibility', 'visible');
                $('h2').text("Thanos Wins");
                console.log('You WIn')
            } 
        }         
    }
    }
}