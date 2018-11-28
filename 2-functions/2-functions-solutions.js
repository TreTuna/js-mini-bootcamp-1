// Part II: Functions

// Before getting started, make sure that you have a JavaScript console open
// http://www.repl.it/languages/javascript so you can complete these exercises.

// Exercises

// Basic Requirements

// 1. In your console, copy the following function and verify that the following
//    invocations match your expectations:

function square(num) {
  return num * num;
}

square(10) + 2; /*?*/
square(100) + square(77); /*?*/
square(8 / 2); /*?*/
square(2 + 17); /*?*/
square(square(15)); /*?*/

// 2. Write a sentence in plain English describing how `square(square(15))` is evaluated.
//    The inner function square(15) is called and returns 225, which is then passed
//    to the outer function and squared again.

// 3. Rename the parameter to `square` in your above code to `monkey`, and
//    rename the uses of that parameter in the body to `monkey` as well. Will the
//    function `square` still work? Why or why not?
// Yes, it will work because the name of the argument is simply a variable that we control

// 4. What is wrong with the following definitions of `square`? Write a sentence or
//    two describing the issue(s); then, try copying the erroneous examples into a
//    console one-at-a-time and observing the error(s) generated (you may have to
//    attempt to invoke the functions to see the error). What errors are produced
//    (if any) for each erroneous version? Do the errors make sense ?

// function square(monkey) {
//   return x * x;
// }
// We never declare an argument of x, it should be monkey * monkey

// function square(5) {
//   return 5 * 5;
// }
// While this will return the square of 5, the argument is unneeded, and the
// function is hard coded to the square of 5.

// function square("x") {
//   return "x" * "x";
// }
// We are trying to square a set of strings.

// 5. Fix the invalid syntax in the following functions (you can copy and paste these
//    invalid definitions into your console and then edit them there):

// func square1(x {
//   return x * x;
// }
function square1(x) {
  return x * x;
}

// functionsquare2 x)
//   return x * x;
// }
function square2(x) {
  return x * x;
}

// function (x) square3 {
//   return x * x;
function square3(x) {
  return x * x;
}

// 6. The following functions exhibit poor style -- fix these issues using the
//    original version of `square` as a reference.

// function square(x){return x*x;}
function square(x) {
  return x * x;
}

// function square (x) { return x *x;
function square(x) {
  return x * x;
}

// function square(x)
// {
// return x * x;
// }
function square(x) {
  return x * x;
}

// 7. Complete the function `cube` that returns the cube of x:

function cube(x) {
  return x * x * x;
}

// 8. Complete the function `fullName` that should take two parameters, `firstName`
//    and`lastName`, and returns the `firstName` and `lastName` concatenated
//    together with a space in between.

// don't forget the parameters!
function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}
fullName("John", "Doe"); // => "John Doe"

// 9. Write a function `average` that takes two numbers as input (parameters), and
//    returns the average of those numbers.

function average(num1, num2) {
  return (num1 + num2) / 2;
}

// 10. Write a function `greeter` that takes a name as an argument and *greets*
//     that name by returning something along the lines of `"Hello, <name>!"`

function greeter(name) {
  return "Hello " + name + "!";
}

// 11. Using the document found at http://www.gbcnv.edu/documents/ASC/docs/00000005.pdf,
//     translate the first page of geometric formulas into JavaScript functions.

// As an example, a function to compute the perimeter of a rectangle might look
// like this:

function perimeterRect(l, w) {
  return 2 * (l + w);
}

function areaSquare(side) {
  return square(side);
}

function perimeterSquare(side) {
  return side * 4;
}

function areaRect(l, w) {
  return l * w;
}

function perimeterRect(l, w) {
  return 2 * (l + w);
}

function areaParallelogram(l, h) {
  return l * h;
}

function perimeterParallelogram(l, w) {
  return 2 * l + 2 * w;
}

function areaTrapezoid(h, b1, b2) {
  return 0.5 * (h * (b1 + b2));
}

function perimeterTrapezoid(s1, s2, b1, b2) {
  return s1 + s2 + b1 + b2;
}

function areaTriangle(b, h) {
  return 0.5 * (h * b);
}

function perimeterTriangle(s1, s2, b) {
  return s1 + s2 + b;
}

function areaCircle(r) {
  return Math.PI * (r * r);
}

function circumferenceCircle(d) {
  return Math.PI * d;
}

// NOTE: JavaScript provides some nifty mathematical functions and
// constants built into the language that you'll need for this exercise. The
// two that we'll be making use of are:

Math.PI; // => 3.141592653589793
Math.sqrt(256); // => 16

// To test your answers, you'll need to:

// 1. Code your function in the console in the way that you think it will work
// 2. Call the function with arguments in the console to see the result, e.g.
//    `perimeterRect(2, 6)`.
// 3. Eventually, you may want to verify that the output is correct. Google is a
//    great tool for this: google perimeter rectangle

// More Practice

// Translate the rest of the geometric formulas found http://www.gbcnv.edu/documents/ASC/docs/00000005.pdf
// into JavaScript functions.

function volumeRectSolid(l, w, h) {
  return l * w * h;
}

function surfaceAreaRectSolid(l, w, h) {
  return 2 * l * h + 2 * w * h + 2 * l * w;
}

function volumeCube(s) {
  return cube(s);
}

function surfaceAreaCube(s) {
  return 6 * square(s);
}

function volumeRightCircCyl(r, h) {
  return Math.PI * (square(r) * h);
}

function surfaceAreaRightCircCyl(r, h) {
  const doublePI = 2 * Math.PI;
  return doublePI * (r * h) + doublePI * square(r);
}

function volumeSphere(r) {
  return (4 / 3) * Math.PI * cube(r);
}

function surfaceAreaSphere(r) {
  return (4 * Math.PI) * square(r);
}

function volumeRightCylCone(r, h) {
  return (1 / 3) * Math.PI * (square(r) * h);
}

function surfaceAreaCylCone(r, h) {
  return Math.PI * (r * Math.sqrt((square(r) + square(h))));
}

function volumeRectPyramid(l, w, h) {
  return (1 / 3) * (l * w * h);
}

function volumeFrustrumRightCirCone(r, R, h) {
  return (Math.PI * (square(r) + (r * R) + square(R)) * h) / 3;
}

function surfaceAreaFrustrumRightCirCone(s, r, R) {
  return Math.PI * (s * (R + r))
}

// Advanced(extra practice)

// 1. Compound interest can be calculated with the formula:

// F = P(1 + i/n)^nt

// F: future value
// P: present value
// i: nominal interest rate
// n: compounding frequency
// t: time

// Write a function `futureValue` that can be used to calculate the *future value*
// of a quantity of money using compound interest.

function futureValue(P, i, n, t) {
  return P * Math.pow((1 + i / n), (n * t))
}

futureValue(1700, .047, 4, 6) /*?*/

// Use the function to calculate what the future value of $1700(* P * = 1700)
// deposited in a bank that pays an annual interest rate of 4.7 % (* i * = 0.047),
// compounded quarterly(* n * = 4) after 6 years(* t * = 6)(you can use`Math.pow`
// to do exponentiation).

// 2. Write a `power` function that accepts the parameters`base` and`exponent`
//    and returns the result. Replace `square` and `cube` with the `power` function
//    you just wrote. Do not use `Math.pow`.

function power(base, exp) {
  var result = base;
  for(var i = 1; i < exp; i++) {
    result = result * base;
  }
  return result;
}

power(3, 3) /*? */
Math.pow(3, 3) /*? */

function square(n) {
  return power(n, 2);
}

function cube(n) {
  return power(n, 3);
}

// 3. Write your own square-root function called `sqrt` that accepts a`number`
//    parameter and returns an approximate square root.Square-root approximations
//    make use of averages. Be sure to use the `average` function you previously
//    wrote. The first version of your square root function should perform no more
//    than 3 successive averages.

function sqrt(num) {

}
