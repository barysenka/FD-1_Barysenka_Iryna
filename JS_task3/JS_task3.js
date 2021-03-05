
// ***Task1

// let odd = 0;
// let even = 0;

// for (let i = 0; i < 100; i++){
//     let random =  Math.floor(Math.random() * 1000);
//         if (random % 2 === 0){
//         odd++;
//         } else{
//         even++;
//         }   
// }
// console.log(odd * 100 / 100);
// console.log(even * 100 / 100);


// ***Task2

// let random =  Math.floor(Math.random() *100);
// let i;
// for (i = 0; i < 10; i++){
//     let num = +prompt();
//     if (num === random){
//         alert('you guessed');
//         break;
//     } else if (num < random){
//         alert('less than the generated number');
//     } else if (num > random){
//         alert('more than the generated number');
//     }
// }
// if (i > 9) {
//     alert(random);
// } 


// ***Task3

// let big = 0;
// let num = prompt();
// for (let i = 0; i < num.length; i++){
//      if (big < +num[i]){
//          big = +num[i];
//      }
// }
// console.log(big);


// // ***Task4

// let text = prompt('');
// let words = text.split(' ');
// let count = 0;
// for(let i = 0; i < words.length; i++){
//     if (words[i] !== ''){
//         count += 1;
//     }
// }
// console.log(count);

// // ***Task4 var2

// let text = prompt('');
// let isWord = false;
// let word = 0;
// for (let i = 0; i < text.length; i++){
//     if (text[i] !== ' ' && !isWord){
//         isWord = true;
//         word++;
//     } else if (text[i] === ' '){
//         isWord = false;
//     }
// }
// console.log(word);

// // ***Task5


// let arr = [];
// for (i = 0; i < 10; i++){
//     arr.push(Math.floor(Math.random() * 10));
// }
// console.log(arr);


// // ***Task6

// let text = prompt('');
// let arr = [];
// for (i = 0; i < text.length; i++){
//      arr.push (text[i]);
// }
// console.log(arr);


// // ***Task7

// let arr = [1, 2, 8, 9, 10, 47, 5];
// let big = arr[0];
// for (i = 0; i < arr.length; i++){
//      if (big < arr[i]){
//          big = arr[i]
//      }
// }
// console.log(big);
// console.log(arr.indexOf(big));


// // ***Task8

// let arr = [1, 2, 8, 9, 10, 2, 5, 2];
// let newArr = [];
// let num = +prompt();
// for (i = 0; i < arr.length; i++){
//      if (arr[i] !== num){
//          newArr.push(arr[i]);
//      }
// }
// console.log(newArr);


// // ***Task9

// let arr = [];
// outer:
// for (i = 2; i < 10000; i++){
//     for (n = 2; n < i; n++){
//          if (i % n === 0) continue outer;
//      }
// arr.push(i);
// }
// console.log(arr);


// // ***Task9 var2

// let isPrime = false;

// for(let i = 1; i < 100; i++) {
//   for(let j = Math.round(i / 2); j > 1; j--) {
//     if (i % j === 0) {
//       isPrime = false;
//       break;
//     } else {
//       isPrime = true;
//     }
//   }
  
//   if (isPrime) {
//       console.log(i);
//   }
// }



