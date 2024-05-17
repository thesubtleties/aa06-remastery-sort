function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) { // we 
            let item = arr[i];
            let sortedIndex = i - 1;
            while (sortedIndex >= 0 && arr[sortedIndex] > item) {
                arr[sortedIndex+1] = arr[sortedIndex]
                sortedIndex--;
            }
            arr[sortedIndex + 1] = item;            
        }

 return arr;
}

insertionSort([3, 8, 12, 5, 22, 14, 9, 7, 1, 6]);




// grab item at index 1 because we are going to compare it to everything to the left of it
//compare this index item to the first item to the left of it. if it is larger, it stays where it is. if the other item is larger, 
//this moves one to the left.

export { insertionSort };