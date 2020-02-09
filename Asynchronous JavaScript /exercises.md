### Asynchronicity

Note: We recommend that after you complete a challenge, you re-comment out the test case for that challenge so the console output is not confusing when working on subsequent challenges.

#### Challenge 1

Thinking point (no writing code necessary for this challenge): Inspect the code given to you in Challenge 1. In what order should the console logs come out? Howdy first or Partnah first?

#### Challenge 2

Create a function delayedGreet that console logs welcome after 3 seconds.

#### Challenge 3

Create a function helloGoodbye that console logs hello right away, and good bye after 2 seconds.

#### Challenge 4

Create a function brokenRecord that console logs hi again every second. Use the End Code button to stop the console logs when you are satisfied that it is working.

#### Challenge 5

Create a function limitedRepeat that console logs hi for now every second, but only for 5 seconds. Research how to use clearInterval if you are not sure how to do this.

#### Challenge 6

Write a function called everyXsecsForYsecs that will accept three arguments: a function func, a number interval, and another number duration. everyXsecsForYsecs will execute the given function every interval number of milliseconds, but then automatically stop after duration milliseconds. Then pass the below sayHi function into an invocation of everyXsecsForYsecs with 1000 interval time an 5000 duration time. What do you expect to happen?

#### Challenge 7

Write a function delayCounter that accepts a number (called 'target') as the first argument and a number of milliseconds (called 'wait') as the second argument, and returns a function. When the returned function is invoked, it should log to the console all of the numbers between 1 and the target number, spaced apart by 'wait' milliseconds.
