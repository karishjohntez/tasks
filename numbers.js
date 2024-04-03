var largestElementsInSubarrays = function () {
    const array = [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15]
    ];

    // Define the subarrays using their array indices
    const subarrays = [
        array[0].slice(2, 5), // [3, 4, 5]
        array[1].slice(1, 4), // [7, 8, 9]
        array[2].slice(0, 3)  // [11, 12, 13]
    ];

    // Initialize an array to store the largest elements
    const largestElements = [];

    // Iterate through each subarray to find the largest element
    subarrays.forEach(subarray => {
        let maxElement = Math.max(...subarray); // Find the largest element in the subarray
        largestElements.push(maxElement); // Store the value of the largest element
    });

    document.write(`The largest element in the subarrays is: ${Math.max(...largestElements)}`);
}

largestElementsInSubarrays();
