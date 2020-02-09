### Promises, Async & the Event Loop

- Promises - the most signficant ES6 feature
- Asynchronicity - the feature that makes dynamic web applications possible
- The event loop - JavaScript’s triage
- Microtask queue, Callback queue and Web Browser features (APIs)

#### A reminder of how JavaScript executes code

```javascript
const num = 3;
function multiplyBy2(inputNumber) {
  const result = inputNumber * 2;
  return result;
}
const output = multiplyBy2(num);
const newOutput = multiplyBy2(10);
```

#### Asynchronicity is the backbone of modern web development in JavaScript yet...

JavaScript is:

- Single threaded (one command runs at a time)
- Synchronously executed (each line is run in order the code appears)

So what if we have a task:

- Accessing Twitter’s server to get new tweets that takes a long time
- Code we want to run using those tweets

**Challenge**: We want to wait for the tweets to be stored in tweets so that they’re there to run displayTweets on - but no code can run in the meantime

#### Slow function blocks further code running

```javascript
const tweets = getTweets("http://twitter.com/will/1");
// ⛔350ms wait while a request is sent to Twitter HQ
displayTweets(tweets);
// more code to run
console.log("I want to runnnn!");
```

#### What if we try to delay a function directly using setTimeout?

setTimeout is a built in function - its first argument is the function to delay followed by ms to delay by

```javascript
function printHello() {
  console.log("Hello");
}
setTimeout(printHello, 1000);
console.log("Me first!");

// In what order will our console logs appear?
```

#### So what about a delay of 0ms

Now, in what order will our console logs occur?

```javascript
function printHello() {
  console.log("Hello");
}
setTimeout(printHello, 0);
console.log("Me first!");
```

#### JavaScript is not enough - We need new pieces (some of which aren’t JavaScript at all)

Our core JavaScript engine has 3 main parts:

- Thread of execution
- Memory/variable environment
- Call stack

We need to add some new components:

- Web Browser APIs/Node background APIs
- Promises
- Event loop, Callback/Task queue and micro task queue

#### ES5 solution: Introducing ‘callback functions’, and Web Browser APIs

```javascript
function printHello() {
  console.log("Hello");
}
setTimeout(printHello, 1000);
console.log("Me first!");
```

#### We’re interacting with a world outside of JavaScript now - so we need rules

```javascript
function printHello(){ console.log("Hello"); }
function blockFor1Sec(){ //blocks in the JavaScript thread for
1 sec }
setTimeout(printHello,0);
blockFor1Sec()
console.log("Me first!");
```

#### ES5 Web Browser APIs with callback functions

**Problems**

- Our response data is only available in the callback function - Callback hell
- Maybe it feels a little odd to think of passing a function into another function only for it to run much later

**Benefits**

- Super explicit once you understand how it works under-the-hood
