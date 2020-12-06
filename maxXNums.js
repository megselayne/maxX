//Write a function that takes a list of integers and returns the 4 highest in O(n) time.


const maxX = (arr, x) => {
    if(!arr){
        return [];
    }
    if(x >= arr.length-1){
        return arr;
    }
    const output = [];
    let currentMax = arr[0];
    let i = 0;
    let pointer = 1;
    while(i < x){
        if(pointer < arr.length){
            if(currentMax < arr[pointer]){
                currentMax = arr[pointer];
            }
            pointer++;
        }
        else{
            output.push(arr.splice(arr.indexOf(currentMax),1)[0]);
            currentMax = arr[0];
            pointer = 0;
            i++;
        }
    }
    return output;
}

module.exports = maxX;