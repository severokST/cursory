
var game_state = 'idle';

window.onload = function level_init(){

};

function game_start(){
    console.log('Game start')
    game_state = 'play';
}

function hit(){

    console.log('Game over')
    game_state = 'idle';
    var wall_list = document.getElementsByClassName('wall');
    for(i=0; i<wall_list.length; i++){
         wall_list[i].style.opacity = 0;
    }
}

function move(e){
    var mouse_x = Math.round(e.clientX/50) ;
    var mouse_y = Math.round(e.clientY/50) ;



    if (game_state == 'play'){
        var wall_list = document.getElementsByClassName('wall');
        for(i=0; i<wall_list.length; i++){

            object_left = Math.round((wall_list[i].offsetLeft + wall_list[i].clientWidth/2)/50);
            object_top = Math.round((wall_list[i].offsetTop + wall_list[i].clientHeight/2)/50);
            wall_list[i].style.opacity = 1- (Math.abs(object_left-mouse_x)+Math.abs(object_top-mouse_y))/15;

        }
    }
}