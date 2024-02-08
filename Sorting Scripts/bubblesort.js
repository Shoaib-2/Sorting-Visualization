//Bubble sort algorithm.
async function Bubblesort(Array_size, divs, div_sizes)
{
    //Setting up flags.
stopExecution = false;
//Time complexity.
document.getElementById("Worst_time").innerText = "O(N^2)";
document.getElementById("Average_time").innerText = "Θ(N^2)";
document.getElementById("Best_time").innerText = "Ω(N^2)";
    c_delay = 0;
    for(let i=0; i<Array_size - 1; i++){
        let j;
        //Flags for stopping the algorithm.
        if (stopExecution) return;
        for(let j=0; j< Array_size-1; j++){
            //Flags for stopping the algorithm.
            if (stopExecution) return;
            div_update(divs[j], div_sizes[j], "red");
            if(div_sizes[j]>div_sizes[j+1]){
                //Flags for stopping the algorithm.
                if (stopExecution) return;
                div_update(divs[j], div_sizes[j], "lightgreen");
                div_update(divs[j+1], div_sizes[j+1], "lightgreen");
                let temp=div_sizes[j];
                div_sizes[j] = div_sizes[j+1];
                div_sizes[j+1] = temp;
                div_update(divs[j], div_sizes[j], "grey");
                div_update(divs[j+1], div_sizes[j+1], "grey")
            }
            
            div_update(divs[j], div_sizes[j], "lightgrey");
            
        }
        await new Promise((doNothing) => setTimeout(doNothing, c_delay));
        div_update(divs[j], div_sizes[j], "blue");
    }
    div_update(divs[0], div_sizes[0], "blue");
    
}
    