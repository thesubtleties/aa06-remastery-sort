function selectionSort(arr) {
    let pointer = 0;  // initialize pointer to 0
    while (pointer < arr.length) { // while loop that keeps things running until pointer is length of arr (gone thru arr)
        let minIndex = pointer; // setting a minindex so we can have the *index* of the min item
        let min = Infinity; // setting that min index to infinity to start so that the first item gets set to min
        for (let i = pointer; i < arr.length; i++) { // start an i loop that goes from pointer value to end of array

            if (arr[i] < min) { // if the array item at the i index of the i loop is less than 
                                //the current minimum, set min to this value and minIndex to i
                minIndex = i;
                min = arr[i];
            }
        }
        [arr[pointer], arr[minIndex]] = [arr[minIndex], arr[pointer]]; // we are now swapping the value at the pointer index (end of sorted)
                                                                        // with the value at the minIndex
        pointer++; // we increase pointer by one and start new
    }
    return arr; // if we get thru the loop, we are done sorting and we return the array (in place)
}

export { selectionSort };