/*
approach 1: Use for-let loop to iterate through each char in the string.
reassign resulting string to be char + string so that it shows up in
reverse.
*/
const reverseString1 = function(string) {
    let result = '';
    for (let char of string) result = char += result;
    return result
};

/*
approach 2 (upon examination of the solution directory): use the split() method to convert the string into an array.
use the reverse() method to reverse the order of the array. use the join("") method to convert the array back into a string.
*/

const reverseString = function(string) {
    let result = string.split('').reverse().join('');
    return result
}

console.log(reverseString('hello there')) // returns 'ereht olleh'
// Do not edit below this line
module.exports = reverseString;
