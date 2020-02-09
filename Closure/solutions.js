// Type JavaScript here and click "Run Code" or press Ctrl + s
// console.log("Hello, world!");

function createFunction() {
  return function() {
    console.log("hello");
  };
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// const function1 = createFunction();
// function1();

function createFunctionPrinter(input) {
  return function() {
    console.log(input);
  };
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// const printSample = createFunctionPrinter("sample");
// printSample();
// const printHello = createFunctionPrinter("hello");
// printHello();

function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter() {
    counter++;
    console.log("counter", counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// willCounter();
// willCounter();
// willCounter();

// jasCounter();
// willCounter();

function addByX(x) {
  return function(y) {
    console.log(x + y);
    return x + y;
  };
}

const addByTwo = addByX(2);

// now call addByTwo with an input of 1
// addByTwo(1);
// now call addByTwo with an input of 2
// addByTwo(2);
//--------------------------------------------------
// Extension
//--------------------------------------------------

function once(func) {
  let memo = undefined;
  return function(arg) {
    memo = memo ? memo : func(arg);
    return memo;
  };
}

const onceFunc = once(addByTwo);

// UNCOMMENT THESE TO TEST YOUR WORK!
// console.log(onceFunc(4)); //should log 6
// console.log(onceFunc(10)); //should log 6
// console.log(onceFunc(9001)); //should log 6

function after(count, func) {
  let times = 0;
  return function() {
    times++;
    if (times >= count) {
      func();
    }
  };
}

const called = function() {
  console.log("hello");
};
const afterCalled = after(3, called);

// afterCalled(); // -> nothing is printed
// afterCalled(); // -> nothing is printed
// afterCalled(); // -> 'hello' is printed

function delay(func, wait) {
  const [, , ...rest] = arguments;
  setTimeout(() => func(...rest), wait);
}
// delay(value => console.log(value), 1000, "test");

function rollCall(names) {
  let index = 0;
  return function() {
    if (index === names.length) {
      console.log("Everyone accounted for");
    } else {
      console.log(names[index]);
      index++;
    }
  };
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const rollCaller = rollCall(["Victoria", "Juan", "Ruth"]);
rollCaller(); // -> Should log 'Victoria'
rollCaller(); // -> Should log 'Juan'
rollCaller(); // -> Should log 'Ruth'
rollCaller(); // -> Should log 'Everyone accounted for'
