//  function quickSort(arr) {
//     if (arr.length <= 1) return arr;
//     const pivot = arr[arr.length - 1];
//     let i = -1;
//     let pivotIndex = 0;
    
//     while (i < arr.length) {
//         for (let j = 0; j < arr.length; j++) {
//             if (j === arr.length - 1) {
//                 i++;
//                 let temp = arr[j];
//                 arr[j] = arr[i];
//                 arr[i] = temp;
//                 pivotIndex = i;
//                 const firstHalf = quickSort(arr.slice(0, pivotIndex));
//                 const secondHalf = quickSort(arr.slice(pivotIndex+1));
//                 return firstHalf.concat([pivot]).concat(secondHalf);
//             }
//             if (arr[j] < pivot) {
//                 i++;
//                 let temp = arr[j];
//                 arr[j] = arr[i];
//                 arr[i] = temp;
//             }
//         }
//     }

//  }

function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        const pivotIndex = partition(arr, low, high);
        quickSort(arr, low, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, high);
    }
    return arr;
    
}

function partition(arr, low, high) {
    const pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i+1]];
    return i + 1;
}

export  { quickSort };