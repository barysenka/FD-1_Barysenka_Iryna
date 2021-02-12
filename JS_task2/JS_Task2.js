// ***Task1

// let num = +prompt();
// let mult =1;
// while (num){
//    let rem = num % 10;
//     mult *= rem;
//     num = (num - rem)/10; 
// }
// console.log(mult)


// ***Task2

// let firstNumber = +prompt();
// let secondNumber = +prompt();
// if (firstNumber > secondNumber) {
// firstNumber = firstNumber + secondNumber;
// secondNumber = firstNumber - secondNumber;
// firstNumber = firstNumber -secondNumber;
// }
// for (let i = firstNumber; i <=secondNumber; i++) {
//     console.log(i)
// }

// ***Task3

// let num = +prompt('0 - 9');
// let lang = prompt('"ru" or "en"');
// if (lang === 'ru'){
//     switch (num) {
//         case 1:
//            alert('один');
//            break;
    
//         case 2:
//            alert('два');
//            break;
   
//         case 3:
//            alert('три');
//            break;
    
//         case 4:
//            alert('четыре');
//            break;
    
//         case 5:
//            alert('пять');
//            break;
   
//         case 6:
//            alert('шесть');
//            break;
    
//         case 7:
//            alert('семь');
//            break;
    
//         case 8:
//            alert('восемь');
//            break;
   
//         case 9:
//            alert('девять');
//            break;
//     }
// }
// if (lang === 'en'){
//     switch (num) {
//         case 1:
//            alert('one');
//            break;
    
//         case 2:
//            alert('two');
//            break;
   
//         case 3:
//            alert('three');
//            break;
    
//         case 4:
//            alert('four');
//            break;
    
//         case 5:
//            alert('five');
//            break;
    
//         case 6:
//            alert('six');
//            break;
    
//         case 7:
//            alert('seven');
//            break;
    
//         case 8:
//            alert('weight');
//            break;
    
//         case 9:
//            alert('nine');
//            break;
//     }
// }

// ***Task4

// let browser = prompt('');

// if (browser === 'Edge' || browser === 'IE' || browser === 'Opera') {
//     alert ('partial support');
// } 
// if (browser === 'Chrome' || browser === 'Mozila' || browser === 'Safari') {
//     alert ('support');
// } 
// else {
//     alert('not support');
// }


// ***Var 2

// let browser = prompt('');
// switch (browser){
//     case 'Edge':
//     case 'IE': 
//     case 'Opera':
//         alert ('partial support');
//         break;
    
//     case 'Chrome':
//     case 'Mozila': 
//     case 'Safari':
//         alert ('support');
//         break;

//     default:
//     alert('not support');
// }



// ***Task5

// let num = +prompt();
// let i = 1;
// let  factorial = num;
// while(i < num){
// let mult = (num - i);
// factorial *= mult; 
// i++; 
// }
// console.log( factorial)


// ***Task6

// let minimum = +prompt();
// let maximum = +prompt();
// let step = +prompt();
// if (minimum > maximum) {
// minimum = minimum + maximum;
// maximum = minimum - maximum;
// minimum = minimum -maximum;
// }
// for (let series = minimum; series <=maximum; series += step) {
//     console.log(series)
// }


// ***Task7

// let num = +prompt();
// let a = 1;
// let b = 2;
// let i = 3;
// console.log(a)
// console.log(b)
// while(i <= num){
// let c = a;
// a = b; 
// b = c + a; 
// i++; 
// console.log(b);
// }

 // ***Task8

//  for (let i = 0; i < 5; i++){
//  let num = +prompt();
//  let random = Math.floor(Math.random() * 10);
//  console.log(random);

//  if (num === +random){
//      alert('you guessed');
//      break;
//  }
//  else {
//     alert('you did not guessed');
//  }
// }