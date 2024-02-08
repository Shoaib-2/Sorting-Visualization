//Insertion sort algorithm.
async function Insertionsort(Array_size, divs, div_sizes)
{
    stopExecution = false;
    c_delay = 0;
    for(let j=0; j< Array_size; j++){
        //Flags for stopping the algorithm.
        if(stopExecution) return;
        div_update(divs[j], div_sizes[j], "yellow");
        let key = div_sizes[j];
        let i = j-1;
        while(i >= 0 && div_sizes[i] > key){
            //Flags for stopping the algorithm.
            if(stopExecution) return;
            div_update(divs[i], div_sizes[i], "red");
            div_update(divs[i+1], div_sizes[i+1],"red");
            div_sizes[i+1] = div_sizes[i];
            div_update(divs[i], div_sizes[i],"red");
            div_update(divs[i+1], div_sizes[i+1], "red");
            div_update(divs[i], div_sizes[i], "blue");
            if(i==(j-1)){
                //Flags for stopping the algorithm.
                if(stopExecution) return;
                div_update(divs[i+1], div_sizes[i+1], "yellow");
            }
            else{
                //Flags for stopping the algorithm.
                if(stopExecution) return;
                div_update(divs[i+1], div_sizes[i+1],"blue");
            }
            i -= 1;
        }
        div_sizes[i+1] = key;
        for(let t=0; t < j; t++){
            //Flags for stopping the algorithm.
            if(stopExecution) return;
            div_update(divs[t], div_sizes[t], "green");
        }
       await new Promise((doNothing) => setTimeout(doNothing, c_delay));
    }
    //Time Complexity
    document.getElementById("Worst_time").innerText = "O(N^2)";
    document.getElementById("Average_time").innerText = "Θ(N^2)";
    document.getElementById("Best_time").innerText = "Ω(N^2)";
}
    

    