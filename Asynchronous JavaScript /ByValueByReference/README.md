# By Value, By Reference

---

- By Value - Copy Primitive values
- By Reference - Reference an Object (All Object including functions)

#### A reminder of how JavaScript executes code

```javascript
// By Value
var a = 2;
var b;

b = a; // 2
a = 3; // 3

console.log(a, b); // 2 , 3

// By Reference
var c = { test: "test value" };
var d;

d = c;

console.log(c.test); // test value
console.log(d.test); // test value

c.test = "new test value";

console.log(c.test); // new test value
console.log(d.test); // new test value
```
