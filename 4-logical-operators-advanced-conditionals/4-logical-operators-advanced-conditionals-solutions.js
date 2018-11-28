// Part IV: Logical Operators & Advanced Conditionals

// Before getting started, make sure that you have a JavaScript console open
// http://www.repl.it/languages/javascript so you can complete these exercises.

// Exercises

// Basic Requirements

// Logical Operators

// 1. Is the `!` operator a *unary* operator, or *binary* operator ?

// 2. Evaluate each of the following expressions first on a whiteboard, and then in
//    a console:

!(2 >= 2);/*? */
!(4 === 4);/*? */
!(5 !== 5);/*? */

// 3. Evaluate each of the following expressions first on a whiteboard, and then in a
//    console:

1 > 2 || 2 > 2 || 3 > 2;
5 < 5 || 75 < 74;

// Conditionals: `else if` & `else`

// 1. This guy named "Joe" keeps blacking out at the bar that your function,
//    `bouncer` (from the previous module), is in charge of; thus, management has
//    decided to add him to the "blacklist" -- modify the `bouncer` function from
//    the previous section so that the person named "Joe" is rejected with an
//    appropriate message, regardless of his age.

function bouncer(name, age) {
  if(name === "Joe" || age < 21) {
    return "Go home, " + name;
  }
  return "Welcome, " + name;
}

bouncer("Tre", 36)
bouncer("Adrian", 3)
bouncer("Joe", 36)
bouncer("joe", 36)


// 2. Write a function called `scoreToGrade` that accepts a *number* as a parameter
//    and returns a *string* representing a letter grade corresponding to that
//    score.

// For example, the following grades should be returned given these scores:

// 'A' > 90
// 'B' >= 80
// 'C' >= 70
// 'D' >= 60
// 'F' < 60

function scoreToGrade(score) {
  if(score > 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

scoreToGrade(95); // => 'A'
scoreToGrade(72); // => 'C'

// 3. Modify the `scoreToGrade` function so that it returns `'INVALID SCORE'` if
//    the score is greater than `100` or less than `0`.

function scoreToGrade(score) {
  if(score > 100 || score < 0) {
    return "INVALID SCORE"
  } else if (score > 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

scoreToGrade(195); // => "INVALID SCORE"
scoreToGrade(-95); // => "INVALID SCORE"
scoreToGrade(95); // => 'A'
scoreToGrade(72); // => 'C'

// More Practice

// 1. Think of at least three activities that you enjoy doing outdoors and the
//    range of temperatures and weather patterns (*e.g* sunny, windy, snowy, rainy,
//    etc.) that are best for these activities. Write a function `whatToDoOutside`
//    that accepts a *temperature* and *condition* as parameters and outputs a
//    string of the format: "The weather is ideal for: ACTIVITY" (where ACTIVITY is
//    an actual activity). Make sure to include an `else` that indicates what
//    should be done if the conditions do not match any activities. If you're short
//    on inspiration, here are some ideas:

//    Snow Sports: snowboarding, skiing
//    Water Sports: surfing, sailing, paddle boarding, swimming
//    Team Sports: basketball, baseball, football(American or everywhere
//                 else), etc.

function whatToDoOutside(temperature, condition) {
  var strStart = "The weather is ideal for: "
  if (temperature > 70 && condition === "sunny"){
    return strStart + "mountain biking";
  } else if (condition === "snowy") {
    return strStart + "snowboarding";
  } else if (temperature > 85) {
    return strStart + "swimming"
  } else {
    return strStart + "Meh, forget it, just chill."
  }
}

// 2. The `guessMyNumber` function from the **Booleans & Conditionals** module
//    (**More Practice** section) accepts a guess `n` and checks it against a
//    random number from `0` to`5` -- if the guess `n` is greater than `5`, output
//    a different message indicating that the guess is out of bounds.

// NOTE: It will be helpful to *first* write a `randInt` function that
//       accepts a number `n` and computes a random integer from `0` to `n`; then,
//       you can use this function in `guessMyNumber`.

function randInt(n) {
  return Math.floor(Math.random() * (n + 1))
}

function guessMyNumber(n) {
  if(n > 5) {
    return "Guess is out of bounds (too high)."
  } else if(randInt(5) === n) {
    return "You guessed my number!"
  } else {
    return "Nope! That wasn't it!"
  }
}

guessMyNumber(6)


// 3. Modify the `scoreToGrade` function so that it returns `'A+/A-'` for
//    scores of 98 - 100 / 90 - 92 respectively. Apply the same logic for all other
//    letter grades.

function scoreToGrade(score) {
  if(score > 100 || score < 0) {
    return "INVALID SCORE"
  } else if (score > 98) {
    return "A+";
  } else if (score >= 93) {
    return "A";
  } else if (score >= 90) {
    return "A-";
  } else if (score >= 88) {
    return "B+";
  } else if (score >= 83) {
    return "B";
  } else if (score >= 80) {
    return "B-";
  } else if (score >= 78) {
    return "C+";
  } else if (score >= 73) {
    return "C";
  } else if (score >= 70) {
    return "C-";
  } else if (score >= 68) {
    return "D+";
  } else if (score >= 63) {
    return "D";
  } else if (score >= 60) {
    return "D-";
  } else {
    return "F";
  }
}

scoreToGrade(195); // => "INVALID SCORE"
scoreToGrade(-95); // => "INVALID SCORE"
scoreToGrade(95); // => 'A'
scoreToGrade(72); // => 'C'

// Advanced

// 1. The bar that employs our`bouncer` function has decided to do live music on
//    Friday and Saturday nights, and will be admitting those that are over 18 to
//    the bar on those nights; the catch however, is that all who are 21 or older
//    will need to be given a wristband to distinguish them from the minors. Modify
//    your `bouncer` function to handle this situation.

function bouncer(name, age) {
  var welcome = "Welcome, " + name + ".";
  if(name === "Joe" || age < 18) {
    return "Go home, " + name;
  } else if (age < 21) {
    return welcome + " Wrist please.";
  }
  return welcome;
}


bouncer("Tre", 36)
bouncer("Adrian", 3)
bouncer("Joe", 36)
bouncer("joe", 36)
bouncer("Oliver", 18)

// 2. You should have noticed a large amount of repetitive code when modifying
//    `scoreToGrade` to accommodate `+` or `-` grades. When we do lots of repetitive
//    things, that's a clear signal that there's a better way. Write a helper function
//    `letterGrade` that accepts two arguments, *letter* and *score*, and works as
//    follows:

function letterGrade(letter, score) {
  var mod = score % 10;
  if (mod >= 8) {
    return letter + "+"
  } else if (mod < 3) {
    return letter + "-"
  } else {
    return letter
  }
}

// These are examples of what a *working* function would output.
letterGrade('A', 95);// => 'A'
letterGrade('A', 91);// => 'A-'
letterGrade('B', 88);// => 'B+'
letterGrade('monkey', 160);// => 'monkey-'

// Finally, use `letterGrade` to remove the repetition in `scoreToGrade`.


function scoreToGrade(score) {
  if(score > 100 || score < 0) {
    return "INVALID SCORE"
  } else if (score > 90) {
    return letterGrade("A", score);
  } else if (score >= 80) {
    return letterGrade("B", score);
  } else if (score >= 70) {
    return letterGrade("C", score);
  } else if (score >= 60) {
    return letterGrade("D", score);
  } else {
    return "F";
  }
}

scoreToGrade(195); // => "INVALID SCORE"
scoreToGrade(-95); // => "INVALID SCORE"
scoreToGrade(98);/*? */ // => 'A'
scoreToGrade(95);/*? */ // => 'A'
scoreToGrade(72);/*? */ // => 'C'

// 3. It turns out that we can write logical *and* and logical *or* in terms of each
//    other and logical *not* using De Morgan's Laws.
//    (https://en.wikipedia.org/wiki/De_Morgan%27s_laws)

// Write a function `or` that works like `||`, but only uses `!` and `&&`.

function or(arg1, arg2) {
  return !(!arg1 && !arg2)
}

true || false
true || true
false || true
false || false

or(true, false)
or(true, true)
or(false, true)
or(false, false)

// Write a function `and` that works like `&&`, but only uses `!` and `||`.

function and(arg1, arg2) {
  return !(!arg1 || !arg2)
}

true && false
true && true
false && true
false && false

and(true, false)
and(true, true)
and(false, true)
and(false, false)
