const sumAll = function(int1, int2) { 
    if ((int1 < 0) || (int2 < 0) || !Number.isInteger(int1) || !Number.isInteger(int2)) return 'ERROR';
    let [start, end] = (int1 < int2) ? [int1, int2] : [int2, int1];
    let result = 0;
    for (let i = start; i <= end; i++) result += i;
    return result;
};
// console.log(sumAll(1, 4))// returns the sum of 1 + 2 + 3 + 4 which is 10
// Do not edit below this line
module.exports = sumAll;

