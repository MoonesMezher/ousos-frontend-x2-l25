const arr = [1, 2, 3, 4, 5];
// forEach
/* arr.forEach((e, i) => {
    // console.log(e) // e = element 
    console.log(i) // i = index
}) */

// map
// console.log(arr.map((e, i) => e + i)) // [ 1, 3, 5, 7, 9 ]

// filter
// console.log(arr.filter((e, i) => e > 3)) // [4, 5]
// console.log(arr.filter((e, i) => i > 2)); // [4, 5]
// console.log(arr.filter((e, i) => e)) // [ 1, 2, 3, 4, 5 ]

// reduce
console.log(arr.reduce((a, b) => a + b)); // 15 | a = 0
console.log(arr.reduce((a, b) => a + b, 2)); // 17 | a = 2
console.log(arr.reduce((a, b) => a * b)); // 120 | a = 1
console.log(arr.reduce((a, b) => a * b, 0)); // 0 | a = 0

// a = 0, => array of numbers and the operation is +
// a = 1, => array of numbers and the operation is *
// a = array[0] => array of objects