
// ***Task1

// let odd = 0;
// let even = 0;

// for (let i = 0; i < 100; i++){
//     let random =  Math.floor(Math.random() * Math.floor(1000));
   
// if (random % 2 === 0){
//     odd++;
// }
// else{
//     even++;
// }
// }
// console.log(odd * 100 / 100);
// console.log(even * 100 / 100);


// ***Task2

// let random =  Math.floor(Math.random() * Math.floor(100));
// 
// let i;
// for (i = 0; i < 10; i++){
// let num = +prompt();
// if (num === random){
//     alert('you guessed');
//      break;
// }
// if (num < random){
//     alert('less than the generated number')
// }
// if (num > random){
//     alert('more than the generated number')
// }
// }
// if (i > 9) {
//     alert(random);
// } 


// ***Task3

// let big = 1;
// let num = +prompt();
// while (num){
// let rem; 
// rem = num % 10;
// num = (num - rem) / 10;
// if (big < rem){
// big = rem;
// }
// }
// console.log(big);


// // ***Task4

let text = prompt('');
let words = text.split(' ');
let count = 0;
for(let i = 0; i < words.length; i++){
   
    if (words[i] !== ''){
        count += 1;
    }
}
console.log(count);



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
// arr.push (text[i]);
// }
// console.log(arr);

// // ***Task7

// let arr = [1, 2, 8, 9, 10, 47, 5];
// let big = 1;
// for (i = 0; i < arr.length; i++){
// if (big < arr[i]){
//     big = arr[i]
// }
// }
// console.log(big);
// console.log(arr.indexOf(big));


// // ***Task8

// let arr = [1, 2, 8, 9, 10, 2, 5, 2];
// let newArr = [];
// let num = +prompt();
// for (i = 0; i < arr.length; i++){
// if (arr[i] === num) continue;
// if (arr[i] !== num){
//     newArr.push(arr[i]);
// }
// }
// console.log(newArr);


// let arr = [];
// outer:
// for (i = 2; i < 10000; i++){
//     for (n = 2; n < i; n++){
//     if (i % n === 0) continue outer;

// }
// arr.push(i);
// }
// console.log(arr);