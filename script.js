//a.print odd number in an array
//anonymous function
// let oddNumber=function(...number){
//   for(let i=0;i<=number.length;i++){
//     if(number[i]%2==1){
//      console.log(number[i]);
//     }
//   }
// }
// oddNumber(1,2,3,4,5,6,7,8,9,10);

//IIFE
// ((...number)=>
// {
//   for(let i=0;i<=number.length;i++){
//     if(number[i]%2==1){
//      console.log(number[i]);
//     }
//   }
// })(1,2,3,4,5,6,7,8,8,13);

//B.Convert all the strings to title caps in a string array

//  let titled=function(str){
//   let words=str.toLowerCase().split(" ");
//   // console.log(words)
//   for(let i=0;i<words.length;i++){
//   words[i]=words[i][0].toUpperCase()+words[i].slice(1);
//   }
//   return words.join(" ")
//  }
//  console.log(titled("Lorem ipsum dolor sit amet consectetur adipisicing elit"));
 
// ((str)=>{
//   let words=str.toLowerCase().split(" ");
//   // console.log(words)
//   for(let i=0;i<words.length;i++){
//   words[i]=words[i][0].toUpperCase()+words[i].slice(1);
//   }
//  console.log(words.join(" "));
//  })(titled("Lorem ipsum dolor sit amet consectetur adipisicing elit"))

//c.sum of all numbers in a array
// let sumOfNumbers=function(...num){
//   let sum=0;
//   for(let i=0;i<num.length;i++){
//     sum=sum+num[i];
//   }
//  console.log(sum)
// }
// sumOfNumbers(1,2,3,4,5,6,7,8,9,10)
// sumOfNumbers(1,2,3,4,5)


//IIFE
// ((...num)=>{
//   let sum=0;
//   for(let i=0;i<num.length;i++){
//     sum=sum+num[i];
//   }
//  console.log(sum)
// })(1,2,3,4,5,6,7,8,9,10)


//d.Return all the prime number in an array
// const numbers = [1, 2, 3, 4, 5,6,7,8,9,11];
// let findPrimeNum=function (arr){
//   return arr.filter(num => {
//     for (let i = 2; i < num; i++) {
//       if (num % i === 0) {
//         return false;
//       }
//     }
//     return num > 1;
//   });
// }
// console.table(findPrimeNum(numbers));

//IIFE
// ((arr)=>{
//   return arr.filter(num => {
//     for (let i = 2; i < num; i++) {
//       if (num % i === 0) {
//         return false;
//       }
//     }
//     return num > 1;
//   });
// })
// console.table(findPrimeNum(numbers));

// e.Return all the palindromes in an array


