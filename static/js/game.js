
let game_state = 'idle';
let wall_positions = [];
let wall_array;
let mouse_position = [0,0];

window.onload = function level_init(){ };

function game_start(){

    document.getElementsByClassName('start')[0].style.opacity = 0;
    console.log('Game start');
    game_state = 'play';
    wall_array = Array.from(document.getElementsByClassName('wall'));
    wall_array.forEach(wall => {wall_positions.push([Math.round(wall.offsetLeft/50), Math.round(wall.offsetTop/50)])});

}

function background_flash(colour){
    document.getElementsByClassName('gui_main_pane')[0].style.backgroundColor = colour;
}

function main_pane_restore_background(){ background_flash('Black') }

function hit(){
    if (game_state === 'play'){
        console.log('Game over');
        game_state = 'idle';
        background_flash('Red');
        Array.from(document.getElementsByClassName('wall')).forEach(wall => wall.style.opacity = 0);
        document.getElementsByClassName('start')[0].style.opacity = 1;
    }
}



function arrays_contains_pos(tested_array, target){
    for(index=0;index<tested_array.length;index++){
        if(tested_array[index][0] === target[0] && tested_array[index][1] === target[1]){
            return true;
        }
    }
    return false;
}

function array_index_pos(tested_array, target){
    for(index=0;index<tested_array.length;index++){
        if(tested_array[index][0] === target[0] && tested_array[index][1] === target[1]){
            return index;
        }
    }
    return false;
}

function move(e){
    if (game_state === 'play') {

        let mouse_x = Math.round(e.clientX / 50);
        let mouse_y = Math.round(e.clientY / 50);

        if(mouse_position[0] === mouse_x && mouse_position[1] === mouse_y){return;}
        mouse_position = [mouse_x, mouse_y];


        let opacity_value;


        let current_position;
        let next_position;

        let checked_positions = [];
        let to_be_checked_positions = [mouse_position];
        let to_be_checked_next = [];

        let check1 = false;
        let check2 = false;

        let loop_breaker = 0;


        for (view_distance = 0; view_distance < 10; view_distance++) {
            opacity_value = 1 - (view_distance / 11);
            while (to_be_checked_positions.length > 0 ) {
                current_position = to_be_checked_positions.pop();
                if(arrays_contains_pos(wall_positions, current_position)){
                    wall_array[array_index_pos(wall_positions, current_position)].style.opacity = opacity_value;
                }
                else {
                    for (dx = -1; dx < 2; dx++) {
                        for (dy = -1; dy < 2; dy++) {
                            if(dx===0 && dy===0){continue;}
                            next_position = [current_position[0] + dx, current_position[1] + dy];
                            if (!arrays_contains_pos(checked_positions, next_position)) {
                                if (!arrays_contains_pos(to_be_checked_next, next_position)) {
                                    to_be_checked_next.push(next_position);
                                }
                            }
                        }
                    }
                }

                checked_positions.push(current_position)
            }
            to_be_checked_next.forEach(position_next => {
                to_be_checked_positions.push(position_next);
            });
            to_be_checked_next = [];

        }


    }
}