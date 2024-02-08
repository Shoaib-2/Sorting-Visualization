
//Merge sort algorithm.
async function MergeSort(){
    //Setting up flags.
    stopExecution = false;
    c_delay = 0;
    partitionOfMerge(0, size_array-1);
}
//Time complexity.
document.getElementById("Worst_time").innerText= "O(N^2)";
document.getElementById("Average_time").innerText= "Θ(N^2)";
document.getElementById("Best_time").innerText= "Ω(N^2)";

//Main algorithm of the Merge sort.
async function sortingMergeALgorithm(start, mid, end){
    let a = start, b = mid + 1;
    let Array = [], k=0;
    for(let i = start; i <= end ; i++){
        if(a > mid){
            if (stopExecution) return;
            //Flags for stopping the algorithm.
            Array[k++] = div_sizes[b++];
            div_update(divs[b-1], div_sizes[b-1],"Purple");
            
        }
        else if(b > end){
            //Flags for stopping the algorithm.
            if (stopExecution) return;
            Array[k++]= div_sizes[a++];
            div_update(divs[a-1], div_sizes[a-1], "Green");
            
        }
        else if(div_sizes[a]<div_sizes[b]){
            //Flags for stopping the algorithm.
            if (stopExecution) return;
            Array[k++] = div_sizes[a++];
            div_update(divs[a-1], div_sizes[a-1], "Green");
            
        }
        else{
            //Flags for stopping the algorithm.
            if (stopExecution) return;
            Array[k++] = div_sizes[b++];
            div_update(divs[b-1], div_sizes[b-1], "Green");
        }
        await new Promise((doNothing) => setTimeout(doNothing, c_delay));
    }
    
    for(let t=0; t<k; t++){
        //Flags for stopping the algorithm.
        if (stopExecution) return;
        div_sizes[start++] = Array[t];
        div_update(divs[start-1], div_sizes[start-1], "Red");
    }
    // Linear search is performed when the Merge sort algorithm is completely sorted.
    const target = div_sizes[mid];
    const index = linearSearchVisualization(div_sizes, target);
    if (index !== -1) {
        console.log(`Number found at index ${index}.`);
    } else {
        console.log("Number not found in the array.");
    }
}

//Merging the algorithm together.
async function partitionOfMerge(start, end){
    if(start < end)
    {
        let mid = Math.floor((start + end)/2);
        div_update(divs[mid], div_sizes[mid], "Blue");
        await partitionOfMerge(start,mid);
        await partitionOfMerge(mid+1, end);
        await sortingMergeALgorithm(start, mid, end);
    }
}


//Linear search algorithm.
function linearSearchVisualization(array, target) {
    for (let i = 0; i < array.length; i++) {
        console.log("Comparing:", array[i], "with target:", target);
        
        div_update(divs[i], div_sizes[i], "red");

        if (array[i] === target) {
            console.log("Found at index:", i);
            // document.getElementById("resultLinearSearch").textContent = `Number found at index of the Merge Sort ${i}.`;
            return i; // Return the index of the found number
        }

        div_update(divs[i], div_sizes[i], "red");
    }

    console.log("Number not found.");
    document.getElementById("resultLinearSearch").textContent = "Number not found in the array of the Merge Sort.";
    return -1; // Return -1 if number not found
}