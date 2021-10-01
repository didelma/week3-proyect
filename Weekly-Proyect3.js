//PROBLEM 1: Create a function that takes numbers 1 - 10 and console logs them. Use a for loop
function count() {
  for (var i = 1; i <= 10; i++) {
    console.log(i);
  }
}

count();


//PROBLEM 2: Using a while loop, return an array that contains all odd numbers between 3 and 103
function* unevenNumbers(start, end) {
  let i = start % 2 ? start : ++start;
  while (i <= end) {
    yield i;
    i += 2
  }
}

console.log(...unevenNumbers(2, 103));



//PROBLEM 3: arraySum(num) receives an array of numbers as an argument and returns the sum of all numbers,
//for example: arraySum([1, 2, 3, 4, 5, 6]) => 21, use any loop.
function getSum () {
  return Array.from(arguments).reduce((sum, value) => {
    if (Array.isArray(value)) {
      sum += getSum.apply(this, value)
    } else {
      sum += Number(value)
    }

    return sum
  }, 0)
}

var sum = getSum (1, 2, 3, 4, 5, 6);

console.log(sum);



//PROBLEM 4: Use a loop to display the numbers 9 to 0 in descending order.
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}




//PROBLEM 5: Write a function computing the factorial of n
function factorial() {
  let answer = 1;
  if (n == 0 || n == 1) {
    return answer;
  }
  else {
    for (let i = n; i >= 1; i--){
      answer = answer * i;
    }
    return answer;
  }
}
let n = 5; //n is any factorized number 
answer = factorial(n)
console.log(`The factorial of ${n} is ${answer}`);




//PROBLEM 6: Write a function using a for loop that returns the sum of all numbers from 1 to n.
function loopReturn(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  
}
console.log(loopReturn(100));



//PROBLEM 7: Using any loop, Given a string change the every second letter to an uppercase ‘Z’. Assume there are no spaces.
//Let string = “donuts”
//Expected output => dZnZtZ
let string = ['donuts'];

for (let i = 0; i < string.length; i++) {
  if ((i+1) % 2 == 0) {
    return 'Z';
  }
}

console.log(string('donut'));

// https://discord.com/channels/889639505626267668/890366523011657748/892163396563263509