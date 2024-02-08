// Speed update algorithm.
input_speed.addEventListener("input", speed_array);
function speed_array(){
    const speed_array = input_speed.value;
    switch(parseInt(speed_array)){
        case 1: speed = 100;
        break;
        case 2: speed = 100;
        break;
        case 3: speed = 1000;
        break;
        case 4: speed = 10000;
        break;
        case 5: speed = 1000000;
        break;
        default:
            speed = 100000;
            break; 
    }
    time_delay = 100000/(Math.floor(size_array/10)*speed);
}

//Visualization of the bar graph
function div_update(cont,height,color){
    if(cont && cont instanceof HTMLElement){
        window.setTimeout(function(){
            cont.style = "margin: 0%" + margin_size + "%; width:" + (100/size_array-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";},
            c_delay += time_delay);
        }
}


