//Create a function that takes numbers 1 - 10 and console logs them. Use a for loop
function count() {
  for (var i = 1; i <= 10; i++) {
    console.log(i);
  }
}

count();


//Using a while loop, return an array that contains all odd numbers between 3 and 103
function* unevenNumbers(start, end) {
  let i = start % 2 ? start : ++start;
  while (i <= end) {
    yield i;
    i += 2
  }
}

console.log(...unevenNumbers(2, 103));



// arraySum(num) receives an array of numbers as an argument and returns the sum of all numbers,
//for example: arraySum([1, 2, 3, 4, 5, 6]) => 21, use any loop.
let numbers2 = [1, 2, 3, 4, 5, 6];
for (let i = 0, sum = 0; i < numbers2.length; i++ sum += numbers2[i++]) {
  console.log(sum);
}



//Use a loop to display the numbers 9 to 0 in descending order.

let descend = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < descend.length; i--) {

}

//Write a function computing the factorial of n




//Write a function using a for loop that returns the sum of all numbers from 1 to n.




//Using any loop, Given a string change t=the every second letter to an uppercase ‘Z’. Assume there are no spaces.
//Let string = “donuts”
//Expected output => dZnZtZ
