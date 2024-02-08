

function searchNumber() {
    const searchInput = parseInt(document.getElementById("searchInput").value);
    const randomArrayNumber = div_sizes.slice(); // Create a copy of div_sizes
    const sortedArray = randomArrayNumber.slice().sort((a, b) => a - b); // Create a sorted copy
  
    // Visualize the binary search
    linearSearchVisualization(sortedArray, searchInput);
    binarySearchVisualization(sortedArray, searchInput);
  }
  
 



