a.print odd number in an array
//anonymous function
let oddNumber=function(...number){
  for(let i=0;i<=number.length;i++){
    if(number[i]%2==1){
     console.log(number[i]);
    }
  }
}
oddNumber(1,2,3,4,5,6,7,8,9,10);

//IIFE
((...number)=>
{
  for(let i=0;i<=number.length;i++){
    if(number[i]%2==1){
     console.log(number[i]);
    }
  }
})(1,2,3,4,5,6,7,8,8,13);

//arrow
let oddNumber= (...number)=>{
  for(let i=0;i<=number.length;i++){
    if(number[i]%2==1){
     console.log(number[i]);
    }
  }
}
oddNumber(1,2,3,4,5,6,7,8,9,10);

B.Convert all the strings to title caps in a string array

 let titled=function(str){
  let words=str.toLowerCase().split(" ");
  // console.log(words)
  for(let i=0;i<words.length;i++){
  words[i]=words[i][0].toUpperCase()+words[i].slice(1);
  }
  return words.join(" ")
 }
 console.log(titled("Lorem ipsum dolor sit amet consectetur adipisicing elit"));
 
((str)=>{
  let words=str.toLowerCase().split(" ");
  // console.log(words)
  for(let i=0;i<words.length;i++){
  words[i]=words[i][0].toUpperCase()+words[i].slice(1);
  }
 console.log(words.join(" "));
 })(titled("Lorem ipsum dolor sit amet consectetur adipisicing elit"))

//arrow
let titled=(str)=>{
    let words=str.toLowerCase().split(" ");
    // console.log(words)
    for(let i=0;i<words.length;i++){
    words[i]=words[i][0].toUpperCase()+words[i].slice(1);
    }
    return words.join(" ")
   }
   console.log(titled("Lorem ipsum dolor sit amet consectetur adipisicing elit"));

c.sum of all numbers in a array
let sumOfNumbers=function(...num){
  let sum=0;
  for(let i=0;i<num.length;i++){
    sum=sum+num[i];
  }
 console.log(sum)
}
sumOfNumbers(1,2,3,4,5,6,7,8,9,10)
sumOfNumbers(1,2,3,4,5)


//IIFE
((...num)=>{
  let sum=0;
  for(let i=0;i<num.length;i++){
    sum=sum+num[i];
  }
 console.log(sum)
})(1,2,3,4,5,6,7,8,9,10)

//arrow
let sumOfNumbers= (...num)=>{
  let sum=0;
  for(let i=0;i<num.length;i++){
    sum=sum+num[i];
  }
 console.log(sum)
}
sumOfNumbers(1,2,3,4,5,6,7,8,9,10)
sumOfNumbers(1,2,3,4,5)

d.Return all the prime number in an array
const numbers = [1, 2, 3, 4, 5,6,7,8,9,11];
let findPrimeNum=function (arr){
  return arr.filter(num => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  });
}
console.table(findPrimeNum(numbers));

//IIFE
((arr)=>{
  return arr.filter(num => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  });
})
console.table(findPrimeNum(numbers));

//arrow
const numbers = [1, 2, 3, 4, 5,6,7,8,9,11];
let findPrimeNum=(arr)=>{
  return arr.filter(num => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  });
}
console.table(findPrimeNum(numbers));

e.Return all the palindromes in an array
let palindrome=function(str){
  let resversed=str.split("").reverse().join("")
  if(resversed === str) return true;
  return false;
}
console.log(palindrome('eye'));

//IIFE
((str)=>{
  let resversed=str.split("").reverse().join("")
  if(resversed === str) return true;
  return false;
})
(palindrome('eye'));

//arrow
let palindrome= (str)=>{
  let resversed=str.split("").reverse().join("")
  if(resversed === str) return true;
  return false;
}
console.log(palindrome('eye'));

// f.Return median of two sorted arrays of the same size.
let num1=[1,2,3]
let num2=[4,6,9]
let medianSortArray=function(num1,num2){
  let array=num1.concat(num2)
  array.sort((a,b)=>(a-b))
  let n=array.length;
  if(array%2===0)
  return ((array[n/2]+array[n/2+1])/2)
  else
  return array[Math.floor(n/2)]
}
 medianSortArray();

//arrow
let num1=[1,2,3]
let num2=[4,6,9]
let medianSortArray= (num1,num2)=>{
  let array=num1.concat(num2)
  array.sort((a,b)=>(a-b))
  let n=array.length;
  if(array%2===0)
  return ((array[n/2]+array[n/2+1])/2)
  else
  return array[Math.floor(n/2)]
}
 medianSortArray();

g.Remove duplicates from an array
let removeDuplicates=function(arr){
  return [...new Set(arr)]
}
console.table(removeDuplicates([1,2,3,1,3,4,"C","JAVA","PYTHON","JAVA","C"]))

//IIFE
let list=[1,2,3,1,3,4,"C","JAVA","PYTHON","JAVA","C"]
( (arr)=>{
    return [...new Set(arr)]
  })
  (list)

//arrow
let removeDuplicates= (arr)=>{
  return [...new Set(arr)]
}
console.table(removeDuplicates([1,2,3,1,3,4,"C","JAVA","PYTHON","JAVA","C"]))

h.Rotate an array by k times
let nums=[1,2,3,4,5,6,7];
let k=3;
let arrayRotate=function (arr, numOfShifts){
  for(let i=0;i< numOfShifts; i++){
    arr.unshift(arr.pop());
    console.log(arr)
  }
}
 arrayRotate(nums,k)

((arr, numOfShifts)=> { 
  for(let i=0;i< numOfShifts; i++){
    arr.unshift(arr.pop());
    console.log(arr)
  }
})
(nums,k)


//arrow
let nums=[1,2,3,4,5,6,7];
let k=3;
let arrayRotate= (arr, numOfShifts)=>{
  for(let i=0;i< numOfShifts; i++){
    arr.unshift(arr.pop());
    console.log(arr)
  }
}
 arrayRotate(nums,k)
