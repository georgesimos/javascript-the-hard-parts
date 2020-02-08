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
