// Selection sort algorithm.
async function selection_sort(Array_size, divs, div_sizes) {
    stopExecution = false;
    c_delay = 0;

    for (let i = 0; i < Array_size - 1; i++) {
        //Flags for stopping the algorithm.
        if (stopExecution) return;

        div_update(divs[i], div_sizes[i], "grey");
        let index_min = i;

        for (let j = i + 1; j < Array_size; j++) {
            if (stopExecution) return;
            div_update(divs[j], div_sizes[j], "red");

            if (div_sizes[j] < div_sizes[index_min]) {
                if (index_min !== i) {
                    if (stopExecution) return;
                    div_update(divs[index_min], div_sizes[index_min], "lightgrey");
                }
                index_min = j;
                div_update(divs[index_min], div_sizes[index_min], "purple");
            } else {
                div_update(divs[j], div_sizes[j], "violet");
            }
        }

        if (index_min !== i) {
            if (stopExecution) return;
            const temp = div_sizes[index_min];
            div_sizes[index_min] = div_sizes[i];
            div_sizes[i] = temp;

            div_update(divs[index_min], div_sizes[index_min], "red");
            div_update(divs[i], div_sizes[i], "green");
            div_update(divs[index_min], div_sizes[index_min], "black");
            div_update(divs[i], div_sizes[i], "Violet");
            await new Promise((doNothing) => setTimeout(doNothing, c_delay));
        }
        

        // Binary search is performed when the selection sort algorithm is completely sorted.
        const sortedDiv_sizes = div_sizes.slice(0, i + 1);
        const target = div_sizes[i];
        const index = binarySearchVisualization(sortedDiv_sizes, target);

        if (index !== -1) {
            console.log(`Number found at index of the Selection sort ${index}.`);
        } else {
            console.log("Number not found in the array in the Selection sort.");
        }
    }
    //Time complexity
    document.getElementById("Worst_time").innerText = "O(N^2)";
    document.getElementById("Average_time").innerText = "Θ(N^2)";
    document.getElementById("Best_time").innerText = "Ω(N^2)";
}

// Binary search algorithm.
function binarySearchVisualization(array, target) {
    // Assuming divs and div_sizes are defined in the global scope
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        div_update(divs[mid], div_sizes[mid], "violet");
        if (array[mid] === target) {
            document.getElementById("resultBinarySearch").textContent = `Number found at index of the Selection sort ${mid}.`;
            return; 
        } else if (array[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    document.getElementById("resultBinarySearch").textContent = "Number not found in the array of the Selection sort.";
}



