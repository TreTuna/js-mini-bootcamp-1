// Part III: Booleans, Comparisons & Conditionals

// Before getting started, make sure that you have a JavaScript console open
// http://www.repl.it/languages/javascript so you can complete these exercises.

// Exercises

// Basic Requirements

// Comparison Operators

// 1. Type the two boolean values -- `true` and`false` -- into your console.

// 2. Use the console to accomplish the following:

// Write an expression using `>` that will evaluate to`false`
// Write an expression using `>` that will evaluate to`true`
// Write an expression using `<` that will evaluate to`false`
// Write an expression using `<` that will evaluate to`true`
// Write an expression using two numbers and`===` that will evaluate to`true`
// Write an expression using two numbers and`===` that will evaluate to`false`
// Write an expression using two strings and`===` that will evaluate to`true`
// Write an expression using two strings and`===` that will evaluate to`false`

// 3. Fill in the `???` with the following operators or values to make the statements
//    output the expected Boolean value.

12 < 78
// => true

24 < 16
// => false

45 !== 49
// => true

"45" === 45
// => false

"6" == "six"
// => true

// 4. Write a function `oldEnoughToDrink` that takes an `age` as an argument and
//    returns `true` if the person with that age is old enough to drink.

function oldEnoughToDrink(age) {
  return age >= 21;
}

oldEnoughToDrink(20);
oldEnoughToDrink(21);
oldEnoughToDrink(74);

// 5. There's an easy way to figure out how long a string is by adding `.length` to
//    the end of it. Try this out in the console:

"hello".length;
"".length;
"John Doe".length;

// Write a function `sameLength` that accepts two strings as arguments, and
// returns `true` if those strings have the same length, and `false` otherwise.

function sameLength(str1, str2) {
  return str1.length === str2.length;
}

sameLength("Hello", "class")
sameLength("Goodbye", "class")

// 6. Write a function `passwordLongEnough` that accepts a "password" as a
//    parameter and returns `true` if that password is *long enough* -- you get to
//    decide what constitutes *long enough*.

function passwordLongEnough(password) {
  return password.length >= 8;
}

passwordLongEnough("hello")
passwordLongEnough("helloworld")

// Conditionals: `if`

// 1. Write a function `bouncer` that accepts a person's name and age as arguments,
//    and returns either "Go home, NAME.", or "Welcome, NAME!" (where NAME is the
//    parameter that represents the person's name) depending on whether or not the
//    person is old enough to drink.

function bouncer(name, age) {
  if(age < 21) {
    return "Go home, " + name;
  }
  return "Welcome, " + name;
}

bouncer("Tre", 36)
bouncer("Adrian", 3)

// 2. Write a function `max` that takes two numbers as arguments, and returns the
//    larger one.

function max(num1, num2) {
  if(num1 > num2) {
    return num1
  }
  return num2

  // return num1 > num2 ? num1 : num 2;
}

max(3, 5)
max(9, 5)

// 3. Write a function `min` that takes two numbers as arguments, and returns the
//    smaller one.

function min(num1, num2) {
  if(num1 < num2) {
    return num1
  }
  return num2

  // return num1 < num2 ? num1 : num 2;
}

min(3, 5)
min(9, 5)

// 4. Write functions `larger` and `smaller` that each accept two strings as
//    arguments, and return the *larger* and *smaller* strings, respectively.


function larger(str1, str2) {
  if(str1.length > str2.length) {
    return str1
  }
  return str2

  // return str1.length > str2.length ? str1 : str 2;
}

larger("Hello", "everyone")
larger("perhaps", "yes")

function smaller(str1, str2) {
  if(str1.length < str2.length) {
    return str1
  }
  return str2

  // return str1.length < str2.length ? str1 : str 2;
}

smaller("Hello", "everyone")
smaller("perhaps", "yes")

// More Practice

// 1. Fill in the `???` with the following operators or values to make the statements
//    output the expected Boolean value.

106 < 12
// => false

"wiz" === "wiz"
// => true

7 * 7  === 49
// => true

12 > (24 / 2);
// => false

(20 % 2) <= 0;
// => true

(9 / 3) + (5 * 5) === 28
// => true

// 2. Write the following functions that each accept a single number as an argument:

// `even`: returns `true` if its argument is even, and `false` otherwise.

function even(num){
  return num % 2 === 0;
}

even(82)
even(87)

// `odd`: the opposite of the above.

function odd(num) {
  return num % 2 !== 0;
}

odd(82)
odd(87)

// `positive`: returns `true` if its argument is positive, and `false` otherwise.

function positive(num){
  return num >= 0
}

positive(3)
positive(0)
positive(-3)

// `negative`: the opposite of the above.
function negative(num){
  return num < 0
}

negative(3)
negative(0)
negative(-3)

// 3. A couple of other useful built-in mathematical functions are `Math.random`,
//   `Math.floor` and `Math.ceil`. Look these functions up on
//   MDN (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
//   to learn how they work, and use them to implement the following functions:

// `randInt`: Should accept a single numeric argument (`n`), and return a
// number from `0` to `n`.

function randInt(n) {
  return Math.floor(Math.random() * (n + 1))
}

// `guessMyNumber`: Should accept a single numeric argument and compare it to
// a random number between `0` and`5`.It should return one of the following
// strings:
// "You guessed my number!" if the argument matches the random number.
// "Nope! That wasn't it!" if the argument did not match the random number.

function guessMyNumber(n) {
  if(randInt(5) === n) {
    return "You guessed my number!"
  }
  return "Nope! That wasn't it!"
}

guessMyNumber(4)
