/*
Implement a function that takes an array and some other arguments then removes the other arguments from that array:

removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]
See if you can make use of some built-in array methods in this exercise.
*/

/*
approach: use .indexOf() method to locate the index of the item to remove. Use .splice() to remove that item.

*/
const removeFromArray1 = function(arr, ...args) {
    for (let i = arguments.length - 1; i > 0; i--){
        let indexRemove = arr.indexOf(arguments[i]);
        while (indexRemove != -1) {
            arr.splice(indexRemove, 1);
            indexRemove = arr.indexOf(arguments[i])
            }
        }
    return arr
}

/*
approach 2 (upon examination of solution): Use of includes() and forEach()
*/
const removeFromArray2 = function(arr, ...args) {
    let newArray = [];
    arr.forEach((item) => {
        if (!args.includes(item)) newArray.push(item);
    });
    return newArray
}

/*
approach 3 (upon examination of solution): Use of filter method
*/

const removeFromArray = function(arr, ...args) {
    return arr.filter((item) => !args.includes(item))
}


console.log(removeFromArray2([1, 2, 3, 4], 3, 2)); // should remove 3 and return [1,2,4]

// Do not edit below this line
module.exports = removeFromArray;
