



// // ***Task1

// function getMaxNumder (arr){
//     let MaxNumder = arr[0];
//     for (let i = 0; i < arr.length; i++){

//         if (MaxNumder < arr[i]){
//             MaxNumder = arr[i];
//         }
//     }
//     return MaxNumder;
// }

// let arr2 = [5, 8, 2, 1, 3, 2];
// let arr = [1, 0, 4, 9, 4, 7];
// console.log(getMaxNumder(arr));

// console.log(getMaxNumder(arr2));


// // ***Task2

// function getReversArr (arr){
//     let newArr = [];
//     for (i = 0; i < arr.length; i++){
//         newArr.push(arr[(arr.length - 1) - i]);
//     }
//     return newArr;
// }

// console.log(getReversArr(arr));
// console.log(getReversArr(arr2));


// // ***Task3

// function getIndex(arr, firstInd, secondInd){
//         let a = arr[firstInd];
//         arr[firstInd] = arr[secondInd];
//         arr[secondInd] = a;

//         return arr;
//     }
// let arr = [1, 5, 3, 6, 8, 2];
// let arr1 = [1, 5, 3, 6, 8, 2];
// console.log(getIndex(arr, 2, 4));
// console.log(getIndex(arr1, 1, 5));



// // ***Task4

function getRandomArr (lenght){
let arr = [];
for (let i = 0; i < arr.length; i++){
  arr.push(Math.floor(Math.random() * 10));
}
return arr;
}
console.log(getRandomArr(5));



// // ***Task5

// function getSumFigure(num) {
//     let sum = 0;
//     let numStr = String(num);
  
//     for(let i = 0; i < numStr.length; i++) {
//       sum += Number(numStr[i]);
//     }
  
//   return sum;
// }

// console.log(getSumFigure(252511));



// // ***Task6

// function getGCD(a, b) {
//     const min = a < b ? a : b;
//     let gcd = 1;
  
//     for(let i = min; i > 0; i--) {
//       if (a % i === 0 && b % i === 0) {
//         gcd = i;
//         break;
//       }
//     }
  
//     return gcd;
// }
// console.log(getGCD(89, 12));
