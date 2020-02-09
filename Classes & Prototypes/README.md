### Classes, Prototypes - Object Oriented JavaScript

- An enormously popular paradigm for structuring our complex code
- Prototype chain - the feature behind-the-scenes that enables emulation of
  OOP but is a compelling tool in itself
- Understanding the difference between **proto** and prototype
- The new and class keywords as tools to automate our object & method
  creation

### Core of development (and running code)

1. Save data (e.g. in a quiz game the scores of user1 and user2)
2. Run code (functions) using that data (e.g. increase user 2’s score)

Easy! So why is development hard?

In a quiz game I need to save lots of users, but also admins, quiz questions, quiz outcomes, league tables - all have data and associated functionality

In 100,000 lines of code

- Where is the functionality when I need it?
- How do I make sure the functionality is only used on the right data!

### That is, I want my code to be:

1. Easy to reason about
   But also
2. Easy to add features to (new functionality)
3. Nevertheless efficient and performant

The Object-oriented paradigm aims is to let us achieve these three goals

### So if I’m storing each user in my app with their respective data (let’s simplify)

user1:

- name: ‘Tim’
- score: 3

user2:

- name: ‘Stephanie’
- score: 5

And the functionality I need to have for each user (again simplifying!)

- increment functionality (there’d be a ton of functions in practice)

How could I store my data and functionality together in one place?

### Objects - store functions with their associated data!

This is the principle of encapsulation - and it’s going to transform how we can ‘reason about’ our code

```javascript
const user1 = {
  name: "Will",
  score: 3,
  increment: function() {
    user1.score++;
  }
};
user1.increment(); //user1.score -> 4
```

Let's keep creating our objects. What alternative techniques do we have for creating objects?

### Creating user2 user dot notation

Declare an empty object and add properties with dot notation

```javascript
const user2 = {}; //create an empty object
//assign properties to that object
user2.name = "Tim";
user2.score = 6;
user2.increment = function() {
  user2.score++;
};
```

### Creating user3 using Object.create

Object.create is going to give us fine-grained control over our object later on

```javascript
const user3 = Object.create(null);
user3.name = "Eva";
user3.score = 9;
user3.increment = function() {
  user3.score++;
};
```

Our code is getting repetitive, we're breaking our DRY principle. And suppose we have millions of users! What could we do?

### Solution 1. Generate objects using a function

```javascript
function userCreator(name, score) {
  const newUser = {};
  newUser.name = name;
  newUser.score = score;
  newUser.increment = function() {
    newUser.score++;
  };
  return newUser;
}
const user1 = userCreator("Will", 3);
const user2 = userCreator("Tim", 5);
user1.increment();
```

**Problems**: Each time we create a new user we make space in our computer's
memory for all our data and functions. But our functions are just copies

Is there a better way?

**Benefits**: It's simple and easy to reason about!
