
// // ***Task1


// let num = [1, 3, 4, 8, 2, 9];
// let min = num[0];
// let max = num[0];
// let positionMin = 0;
// let positionMax = 0;
// for (let i = 0; i < num.length; i++){
//     if (min > +num[i]){
//         min = +num[i]; 
//         positionMin = i;    
//     }else if (max < +num[i]){
//         max = +num[i]; 
//         positionMax = i;    
//     }
// }
// num[positionMin] = num[positionMax] + num[positionMin];
// num[positionMax] = num[positionMin] - num[positionMax];
// num[positionMin] = num[positionMin] - num[positionMax];

// console.log(num);


// // ***Task2 

// let isPrime = false;
// let arr = [4, 2, 3, 5, 3, 2, 4];
// let n = arr.length - 1;
// for (let i = 0; i < arr.length/2; i++){
//      if (arr[i] !== arr[n - i]){
//         isPrime = false;
//         break;
//      } else if (arr[i] === arr[n - i]){
//         isPrime = true;
//     }
// }
// if (isPrime){
//     console.log('yes');
// } else {
//     console.log('no');
//     }


// // ***Task3

// let arr = [8, 3, 1, 7, 4, 7, 5, 4, 3, 6];

// for (let i = 0; i < arr.length; i++){
//     for (let j = i + 1 ; j < arr.length; j++){
//         if (arr[i] === arr[j]){
//         arr.splice(j, 1);
//         }
//     }  
// }  
// console.log(arr);



// // ***Task4

// let arr = [1, 3, 4, 8, 2, 9, 5];
// let max = arr[1];
// for (let i = 1; i < arr.length; i+= 2){
//    if (max < arr[i]){
//         max = arr[i];    
//     }
// }
// console.log(max);



// // ***Task5

// let num = [2, 3, 1, 8, 2, 5, 9, 5];
// let min = num[0];
// let max = num[0];
// let positionMin = 0;
// let positionMax = 0;
// let sum = 0;
// for (let i = 0; i < num.length; i++){
//     if (min > num[i]){
//         min = num[i]; 
//         positionMin = i;    
//     } else if (max < +num[i]){
//         max = num[i]; 
//         positionMax = i;    
//     }
// }
// if (positionMin > positionMax){
//     positionMin = positionMax + positionMin;
//     positionMax = positionMin - positionMax;
//     positionMin = positionMin - positionMax;
// }
// for (let j = positionMin + 1; j < positionMax; j++){
//     sum += +num[j];
// }

// console.log(sum);



// // ***Task6

// let arr = [1, 3, 1, 2, 2, 5, 2, 5, 3, 1, 5, 1];

// let arr2 = [];

// for (let i = 0; i < arr.length; i++){
//     if (arr2[arr[i]]) {
//       arr2[arr[i]]++;
//     } else {
//       arr2[arr[i]] = 1;
//     }
// }

// let max = arr2[0];
// let maxIndex = 0;


// for(let i = 0; i < arr2.length; i++) {
//   if (arr2[i] > max || max === undefined) {
//       max = arr2[i];
//       maxIndex = i;
//   }
// }
// console.log(maxIndex);



// // ***Task7

// let arr = [2, 4, 6, 1, 3];
// let sum = 0;
// let newArr =[];

// for (let i = 0; i < arr.length; i++){
//     sum += +arr[i];
// }

// let arith = sum / arr.length;

// for (let j = 0; j < arr.length; j++){
//     if (arith > arr[j]){
//         newArr.push(arr[j]);
//     }
// }
// console.log(newArr);

// // ***Task8

// let arr = [1, 2, 3, 4, 5, 6, 7];
// let n = arr.length - 1;
// let newArr = [];
// for (let i = n; i >= 0; i--){
//    newArr.push(arr[i]);
// }
// console.log(newArr);


// // ***Task9

// let arr = [4, -5, 2,- 4, -2, 2, 1, 5];
// let newArr = [];

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] > 0){
//         newArr.push(arr[i]);
//     }
// }
// for(let j = 0; j < arr.length; j++){
//     if(arr[j] < 0){
//         newArr.push(arr[j]);
//     }
// }
// console.log(newArr);



// // ***Task10 

// let arr = [2, 5, -9, 2, -5, 10, 2, -2];

//  let maxSum = 0; 

//   for (let i = 0; i < arr.length; i++) {
//     let sumFixedStart = 0;
//     for (let j = i; j < arr.length; j++) {
//       sumFixedStart += arr[j];
//       maxSum = Math.max(maxSum, sumFixedStart);
//     }
//   }
// console.log(maxSum)



