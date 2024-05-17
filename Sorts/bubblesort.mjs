function bubbleSort(arr) {
    let isSorted = false;
    while (isSorted === false) {
        isSorted = true;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i+1]) {
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
                isSorted = false;
        }
    }
}
return arr;
}


export { bubbleSort };