/*
to run test
1. open the directory of the exercise: cd "directoryName"
2. run npm test "exerciseName".spec.js
*/

/* */

const repeatString = function (word, times) {
    if (times < 0) return 'ERROR';
    let result = '';
    for (let i = 0; i < times; i++) result += word;
    return result
  };
  // console.log(repeatString('hey', 3)) // returns 'heyheyhey'

// Do not edit below this line
module.exports = repeatString;
