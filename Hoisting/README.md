## Hoisting

---

When our code is executed it goes through the environment called **Execution Context**. There are two phases:

1. Creation Phase
2. Execution Phase

### Creation Phase

During Creation phase JS engine parses - run throught our code and identifies variables and functions that where created during Author Time. It setup memory space for variables & functions (Variable enviroment) - **Hoisting**

> Hoisting: Before your code is executed, the JS Engine set asides memory space for Var / Func used inside the code. All Variables in JS are initially set to **undefined**.

```js
hey(); // Hey
console.log(name); // undefined

var name = "George";
function hey() {
  console.log("Hey");
}
```

### Execution Phase

In JS our code is executed **line-by-line** and can access the variables defined in Execution Context. Variables assignment are done during this phase.

> A new Executionn context is created in every function run/invocation.
