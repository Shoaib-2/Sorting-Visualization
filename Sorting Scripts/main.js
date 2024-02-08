
let input_size = document.getElementById("size_array"), Array_size = size_array.value;
let input_randomize = document.getElementById("randomize_array");
// let input_randomize2 = document.getElementById("randomize_array2");
let input_speed = document.getElementById("speed_array");

let buttons_container = document.querySelectorAll(".buttons");
let div_sizes = [];
let divs = [];
let margin_size;
let cont = document.getElementById("array_container");
// let cont2 = document.getElementById("array_container2");
cont.style = "flex-direction: row";
// cont2.style = "flex-direction: row";
let c_delay = 0;
let speed = 100000;
let time_delay = 10000 / (Math.floor(size_array / 10) * speed);

input_randomize.addEventListener("click", randomize_array);
// input_randomize2.addEventListener("click", randomize_array2);
input_size.addEventListener("input", update_size_array);
input_size.addEventListener("input", update_size_array2);
input_speed.addEventListener("input", speed_array);


//Size of the array is updated when the slider button is used.
function update_size_array(){
  size_array = input_size.value;
  randomize_array();
}
function update_size_array2(){
size_array = input_size.value;
randomize_array2();
}

window.onload = update_size_array();
// window.onload = update_size_array2();



//Pop-up window implementation which shows the instructions to use this system.
document.addEventListener ('DOMContentLoaded', function(){
  const popupInstruction = document.getElementById('popupInstruction');
  const popupClosedButton = document.getElementById('popupClosed');
  function popupOpen() {
    popupInstruction.classList.add('show');
    }
  function popupCLose() {
    popupInstruction.classList.remove('show');
    }
    popupClosedButton.addEventListener('click', popupCLose);
    popupOpen();
  });



//A random array is generated.
function randomize_array(){
    cont.innerHTML = "";
    for(let i=0; i<input_size.value; i++){
        div_sizes[i]= Math.floor(Math.random()* 1 *(input_size.max - input_size.min) + 10);
        divs[i] = document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size = 0.2;
        divs[i].style = "margin: 0%" +  margin_size + "%; background-color: aqua; width: "
        +(100/size_array-(2 * margin_size)) + "%; height: " + (div_sizes[i]) + "%;";
    }
}
//A random array is generated for the second section of comparing the algorithm.
function randomize_array2(){
  cont2.innerHTML = "";
  for(let i=0; i<input_size.value; i++){
      div_sizes[i]= Math.floor(Math.random()* 1 *(input_size.max - input_size.min) + 10);
      divs[i] = document.createElement("div");
      cont2.appendChild(divs[i]);
      margin_size = 0.2;
      divs[i].style = "margin: 0%" +  margin_size + "%; background-color: aqua; width: "
      +(100/size_array-(2 * margin_size)) + "%; height: " + (div_sizes[i]) + "%;";
  }
}




//To terminate the running algorithm.
function stopSorting() {
  stopExecution = true;
}
document.getElementById("stopButton").addEventListener("click", function () {
  stopExecution = true;
  });

//Searching for a number of the binary search in selection sort algorithm after sorting is completed.
function searchNumber1() {
    const target = parseInt(document.getElementById("searchInput").value);
    const index = binarySearchVisualization(div_sizes, target);

    if (index !== -1) {
        // Find the actual index of the element in the visualized array
        let actualIndex = 0;
        for (let i = 0; i < div_sizes.length; i++) {
            if (div_sizes[i] === target) {
                actualIndex = i;
                break;
            }
        }
        // Highlight the found number in the visualization
        div_update(divs[actualIndex], div_sizes[actualIndex], "yellow");
    }
}

//Searching for a number of the linear search in merge sort algorithm after sorting is completed.
function searchNumber2() {
  const target = parseInt(document.getElementById("searchInput2").value);
  const index = linearSearchVisualization(div_sizes, target);

  if (index !== -1) {
      // Find the actual index of the array.
      let actualIndex = 0;
      for (let i = 0; i < div_sizes.length; i++) {
          if (div_sizes[i] === target) {
              actualIndex = i;
              break;
          }
      }
      // Highlights the number with a yellow color in the visualization.
      div_update(divs[actualIndex], div_sizes[actualIndex], "yellow");
  }
}


//Execution of the algorithms in the first part of the screen.
async function executeSelectedAlgorithm() {
  const selectedAlgorithm = document.getElementById("sort_dropdown").value;
  stopExecution = false;
  switch (selectedAlgorithm) {
    case "randomize_array":
      break;
    case "selection_sort":
      if (stopExecution) return;
      selection_sort(Array_size, divs, div_sizes);
      break;
    case "insertion_sort":
      if (stopExecution) return;
      Insertionsort(Array_size, divs, div_sizes);
      break;
    case "bubble_sort":
      if (stopExecution) return;
      Bubblesort(Array_size, divs, div_sizes);
      break;
    case "merge_sort":
      if (stopExecution) return;
      MergeSort();
      break;
    default:
      break;
  }
}

 //Execution of the algorithms in the second part of the screen.
  async function executeSelectedAlgorithm2() {
    const selectedAlgorithm2 = document.getElementById("sort_dropdown2").value;
    stopExecution = false;
    switch (selectedAlgorithm2) {
      case "randomize_array2":
        break;
      case "selection_sort":
        if (stopExecution) return;
        selection_sort(Array_size, divs, div_sizes);
        break;
      case "insertion_sort":
        if (stopExecution) return;
        Insertionsort(Array_size, divs, div_sizes);
        break;
      case "bubble_sort":
        if (stopExecution) return;
        Bubblesort(Array_size, divs, div_sizes);
        break;
      case "merge_sort":
        if (stopExecution) return;
        MergeSort();
        break;
      default:
        break;
    }
  }




