
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const middle = Math.floor(arr.length/2);
    const half1 = arr.slice(0, middle);
    const half2 = arr.slice(middle);
    return merge(mergeSort(half1), mergeSort(half2))
    
}

function merge(arr1, arr2) {
    const res = [];
    let pointer1 = 0;
    let pointer2 = 0;
    while (pointer1 < arr1.length && pointer2 < arr2.length) {
        if (arr1[pointer1] >= arr2[pointer2]) {
            res.push(arr2[pointer2]);
            pointer2++
        } else {
                res.push(arr1[pointer1]);
                pointer1++;
        }
    }
    while (pointer1 < arr1.length) {
        res.push(arr1[pointer1])
        pointer1++
    }
    while (pointer2 < arr2.length) {
        res.push(arr2[pointer2]);
        pointer2++;
    }
    return res;
}



export { merge, mergeSort };