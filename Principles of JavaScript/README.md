## Javascript Principles

when javascript code runs, it:

- Goes through the code line-by-line and runs/ 'executes each line - known as the **thread of execution**
- Saves 'data' like strings and arrays so we can use that data later - in its **memory**

We can even save code ('functions')

```javascript
const num = 3;
function multiplyBy2(inputNumer) {
  const result = inputNumer * 2;
  return result;
}

const output = multiplyBy2(num);
const newOutput = multiplyBy2(10);
```

### Functions

Code we save ('define') functions & can use (call/invoke/execute/run)
later with the function name & ()

### Execution Context

Created to run the code of a function - has 2 parts ( we have already seen them!)

- Thread of execution
- Memory

### Call stack

- javaScript keeps track of what function is currently running
  (where is the thread of execution)
- Run a function - add to call stack
- Finish running the function - JS removes it from call stack
- Whatever is top of the call stack
  - that's the function we're currently running

```javascript
const num = 3;
function multiplyBy2(inputNumber) {
  const result = inputNumber * 2;
  return result;
}
const output = multiplyBy2(num);
const newOutput = multiplyBy2(10);
```
