## Functions And Callbacks

### Generalizing functions

'Parameters' (placeholders) mean we don't need to decide what data to run our functionality on until we run the function

- Then provide an actual value ('argument') when we run the function

Higher order functions follow this same principle.

- We may not want to decide exactly what some of our functionality is until we run our function.

### Repeating Functionality

```javascript
function copyArrayAndMultiplyBy2(array) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] * 2);
  }
  return output;
}

const myArray = [1, 2, 3];
const result = copyArrayAndMultiplyBy2(myArray);
// [2, 4, 6]
```

```javascript
function copyArrayAndDivideBy2(array) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] / 2);
  }
  return output;
}

const myArray = [1, 2, 3];
const result = copyArrayAndDivideBy2(myArray);
// [0.5, 1, 1.5]
```

```javascript
function copyArrayAndAdd2(array) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] + 2);
  }
  return output;
}

const myArray = [1, 2, 3];
const result = copyArrayAndAdd2(myArray);
// [3, 4, 5]
```

What principle do we break ??? **DRY**

We could generalize our function - So we pass in our specific instruction only when we run copyArrayAndManipulate !

```javascript
function copyArrayAndManipulate(array, instructions) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(instructions(array[i]));
  }
  return output;
}

function multiplyBy2(input) {
  return input * 2;
}
const myArray = [1, 2, 3];
const result = copyArrayAndManipulate(myArray, multiplyBy2);
```

### Who was this possible?

Functions in javascript = first class objects
They can co-exist with and can be treated like any other javascript object

- Assigned to variables and properties of other ojects
- Passed as arguments into functions
- Returned as values from functions

### Higher order functions

Takes in a function or passes out a function.

Just a term to describe these functions - any function that does it we call that - but there's nothing different about them inherently.

### Callbacks and Higher Order Functions simplify our code and keep it DRY

**Declarative readable code**: Map, filter, reduce - the most readable way to write code to work with data

**Asynchronous JavaScript**: Callbacks are core aspect of async javaScript and are under-the-hood of promises, async/await

### Introducing arrow functions - a shorthand way to save functions

```javascript
function add2(input) {
  return input + 2;
}

const add2 = input => {
  return input + 2;
};

const add2 = input => input + 2;
```

### Anonymous and arrow functions

- Improve immediate legibility of the code
- But at least for our purposes here they are 'syntactic sugar' - we'll see their full effects later
- Understand how they're working under-the-hood is vital to avoid confusion
