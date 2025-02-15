export const javascriptQuestions = [
  {
    id: 'q1',
    text: 'What is the purpose of the "use strict" directive in JavaScript?',
    answers: [
      'To enforce stricter parsing and error handling in JavaScript code.',
      'To define a block of strict mode code.',
      'To enable ES6 features in JavaScript.',
      'To make the code run faster.',
    ],
  },
  {
    id: 'q2',
    text: 'Which of the following is NOT a primitive data type in JavaScript?',
    answers: [
      'Object',
      'String',
      'Boolean',
      'Number',
    ],
  },
  {
    id: 'q3',
    text: 'What does the "typeof" operator return when applied to an array?',
    answers: [
      '"object"',
      '"array"',
      '"list"',
      '"array object"',
    ],
  },
  {
    id: 'q4',
    text: 'What is the difference between "==" and "===" in JavaScript?',
    answers: [
      '"===" checks both value and type, while "==" only checks value.',
      '"==" is a strict comparison, while "===" is a loose comparison.',
      'There is no difference between them.',
      '"===" is used only in ES6, while "==" is used in ES5 and earlier.',
    ],
  },
  {
    id: 'q5',
    text: 'Which keyword is used to declare a block-scoped variable?',
    answers: [
      'let',
      'var',
      'const',
      'define',
    ],
  },
  {
    id: 'q6',
    text: 'What will `console.log(typeof null)` output?',
    answers: [
      '"object"',
      '"null"',
      '"undefined"',
      '"reference"',
    ],
  },
  {
    id: 'q7',
    text: 'Which method removes the last element from an array and returns it?',
    answers: [
      'pop()',
      'shift()',
      'splice()',
      'delete',
    ],
  },
  {
    id: 'q8',
    text: 'What does `Boolean("false")` return?',
    answers: [
      'true',
      'false',
      'undefined',
      'NaN',
    ],
  },
  {
    id: 'q9',
    text: 'How do you create an immediately invoked function expression (IIFE) in JavaScript?',
    answers: [
      '(function() { console.log("Hello!"); })();',
      'function myFunction() { console.log("Hello!"); } myFunction();',
      '(() => { console.log("Hello!"); });',
      'function() { console.log("Hello!"); }();',
    ],
  },
  {
    id: 'q10',
    text: 'What is the purpose of the `map()` method in JavaScript?',
    answers: [
      'To create a new array by applying a function to each element.',
      'To filter elements in an array based on a condition.',
      'To loop through an array and modify each element in place.',
      'To remove elements from an array.',
    ],
  },
  {
    id: 'q11',
    text: 'What is a closure in JavaScript?',
    answers: [
      'A function that has access to its own scope, the outer function’s scope, and the global scope.',
      'A function that runs immediately after it is defined.',
      'A function that only executes once.',
      'A method to encapsulate variables.',
    ],
  },
  {
    id: 'q12',
    text: 'What does `setTimeout` return in JavaScript?',
    answers: [
      'A numerical ID that can be used to cancel the timeout.',
      'A Promise that resolves after a delay.',
      'A boolean indicating whether the timer started.',
      'Nothing, it just executes a function after a delay.',
    ],
  },
  {
    id: 'q13',
    text: 'Which statement about arrow functions is true?',
    answers: [
      'They do not have their own "this" context.',
      'They can only be used as methods inside objects.',
      'They require an explicit return statement always.',
      'They are always synchronous functions.',
    ],
  },
  {
    id: 'q14',
    text: 'What is the event loop in JavaScript?',
    answers: [
      'A mechanism that handles asynchronous operations in JavaScript.',
      'A function that executes at fixed time intervals.',
      'A loop that iterates through an array asynchronously.',
      'A method for handling recursion in JavaScript.',
    ],
  },
  {
    id: 'q15',
    text: 'Which built-in method returns the first index at which a given element is found in an array?',
    answers: [
      'indexOf()',
      'findIndex()',
      'search()',
      'position()',
    ],
  },
  {
    id: 'q16',
    text: 'What does `Object.keys(obj)` return?',
    answers: [
      'An array of an object’s property names.',
      'An array of an object’s values.',
      'A new object with the same keys.',
      'A string of all keys combined.',
    ],
  },
  {
    id: 'q17',
    text: 'Which JavaScript feature allows defining default values for function parameters?',
    answers: [
      'Default function parameters',
      'ES6 template literals',
      'Destructuring assignment',
      'Arrow functions',
    ],
  },
  {
    id: 'q18',
    text: 'Which built-in method sorts the elements of an array in JavaScript?',
    answers: [
      'sort()',
      'order()',
      'arrange()',
      'sortArray()',
    ],
  },
  {
    id: 'q19',
    text: 'What is an example of a falsy value in JavaScript?',
    answers: [
      '0',
      '"false"',
      '"null"',
      '"undefined"',
    ],
  },
  {
    id: 'q20',
    text: 'What is the purpose of the `call()` method in JavaScript?',
    answers: [
      'It calls a function with a specified "this" value and arguments.',
      'It creates a new function and binds it to a new object.',
      'It schedules a function to run after a delay.',
      'It transforms a function into an asynchronous function.',
    ],
  },
  {
    id: 'q21',
    text: 'Which function converts a JSON string into a JavaScript object?',
    answers: [
      'JSON.parse()',
      'JSON.stringify()',
      'JSON.convert()',
      'JSON.objectify()',
    ],
  },
  {
    id: 'q22',
    text: 'Which of the following is a valid way to declare an asynchronous function?',
    answers: [
      'async function myFunc() { }',
      'function async myFunc() { }',
      'function myFunc async() { }',
      'async { function myFunc() { } }',
    ],
  },
  {
    id: 'q23',
    text: 'What is the output of `console.log(0.1 + 0.2 === 0.3)`?',
    answers: [
      'false',
      'true',
      'undefined',
      'NaN',
    ],
  },
  {
    id: 'q24',
    text: 'How can you check if a variable is an array in JavaScript?',
    answers: [
      'Array.isArray(variable)',
      'typeof variable === "array"',
      'variable instanceof array',
      'typeof variable === "object"',
    ],
  },
  {
    id: 'q25',
    text: 'Which method removes the first element from an array and returns it?',
    answers: [
      'shift()',
      'pop()',
      'unshift()',
      'splice()',
    ],
  },
  {
    id: 'q26',
    text: 'What does the `reduce()` method do in JavaScript?',
    answers: [
      'It reduces an array to a single value by applying a function.',
      'It filters elements in an array based on a condition.',
      'It removes elements from an array and returns them.',
      'It creates a new array with modified elements.',
    ],
  },
  {
    id: 'q27',
    text: 'What is the purpose of the `bind()` method in JavaScript?',
    answers: [
      'It creates a new function with a specified "this" value.',
      'It executes a function immediately with a specified "this" value.',
      'It schedules a function to execute after a delay.',
      'It calls a function once after binding it to an event.',
    ],
  },
  {
    id: 'q28',
    text: 'Which statement best describes the behavior of JavaScript’s `const` keyword?',
    answers: [
      'It declares a variable that cannot be reassigned but can have mutable properties.',
      'It declares a variable that can be reassigned.',
      'It prevents an object’s properties from being changed.',
      'It prevents any modifications to a variable, including objects.',
    ],
  },
  {
    id: 'q29',
    text: 'What will `console.log([] == false)` output?',
    answers: [
      'true',
      'false',
      'undefined',
      'NaN',
    ],
  },
  {
    id: 'q30',
    text: 'Which statement is true about JavaScript’s "this" keyword?',
    answers: [
      '"this" refers to the object that owns the function being executed.',
      '"this" always refers to the global object.',
      '"this" always refers to the function itself.',
      '"this" is only defined in arrow functions.',
    ],
  },
  {
    id: 'q31',
    text: 'How do you deep clone an object in JavaScript?',
    answers: [
      'Using `JSON.parse(JSON.stringify(obj))`.',
      'Using `Object.assign({}, obj)`.',
      'Using `obj.clone()`.',
      'Using `Object.copy(obj)`.',
    ],
  },
  {
    id: 'q32',
    text: 'What does the `find()` method return?',
    answers: [
      'The first element that matches a given condition.',
      'An array of all elements that match a condition.',
      'The index of the first matching element.',
      'The number of matching elements.',
    ],
  },
  {
    id: 'q33',
    text: 'What is the difference between `null` and `undefined`?',
    answers: [
      '`null` is explicitly set by the developer, while `undefined` means a variable has been declared but not assigned.',
      '`null` and `undefined` are identical in JavaScript.',
      '`null` is an object, while `undefined` is a primitive value.',
      '`undefined` is explicitly set by the developer, while `null` means a variable has been declared but not assigned.',
    ],
  },
  {
    id: 'q34',
    text: 'Which operator can be used to merge two objects in JavaScript?',
    answers: [
      'The spread operator (`...`).',
      'The `+` operator.',
      'The merge operator (`~~`).',
      'The `&` operator.',
    ],
  },
  {
    id: 'q35',
    text: 'What will `console.log(2 + "2" - 1)` output?',
    answers: [
      '21',
      '3',
      'NaN',
      '"22-1"',
    ],
  },
  {
    id: 'q36',
    text: 'Which method can be used to remove duplicate values from an array?',
    answers: [
      '`Array.from(new Set(arr))`.',
      '`arr.removeDuplicates()`.',
      '`arr.unique()`.',
      '`arr.distinct()`.',
    ],
  },
  {
    id: 'q37',
    text: 'What is the output of `console.log(!!"false")`?',
    answers: [
      'true',
      'false',
      'undefined',
      'NaN',
    ],
  },
  {
    id: 'q38',
    text: 'What does `Object.freeze(obj)` do?',
    answers: [
      'Prevents modifications to an object’s properties.',
      'Makes an object immutable, including its nested properties.',
      'Prevents an object from being assigned to a new value.',
      'Removes all methods from an object.',
    ],
  },
  {
    id: 'q39',
    text: 'Which built-in object can be used to handle dates in JavaScript?',
    answers: [
      '`Date`',
      '`Calendar`',
      '`Time`',
      '`Datetime`',
    ],
  },
  {
    id: 'q40',
    text: 'What will `console.log(typeof NaN)` output?',
    answers: [
      '"number"',
      '"NaN"',
      '"undefined"',
      '"object"',
    ],
  },
  {
    id: 'q41',
    text: 'What is a generator function in JavaScript?',
    answers: [
      'A function that can pause execution and later resume from where it left off.',
      'A function that automatically generates random numbers.',
      'A function that creates new functions dynamically.',
      'A function that generates infinite loops.',
    ],
  },
  {
    id: 'q42',
    text: 'Which of the following is NOT a valid JavaScript loop?',
    answers: [
      'repeat...until',
      'for',
      'while',
      'do...while',
    ],
  },
  {
    id: 'q43',
    text: 'What will `console.log([] + {})` output?',
    answers: [
      '"[object Object]"',
      '0',
      '"{}"',
      'undefined',
    ],
  },
  {
    id: 'q44',
    text: 'Which method checks if an object has a specific property?',
    answers: [
      '`obj.hasOwnProperty("key")`',
      '`obj.contains("key")`',
      '`obj.includes("key")`',
      '`obj.find("key")`',
    ],
  },
  {
    id: 'q45',
    text: 'What will `console.log(typeof function() {})` output?',
    answers: [
      '"function"',
      '"object"',
      '"undefined"',
      '"method"',
    ],
  },
  {
    id: 'q46',
    text: 'What is the main benefit of using a WeakMap over a regular Map?',
    answers: [
      'It allows for garbage collection of keys when there are no references left.',
      'It has faster lookup times for keys.',
      'It prevents object keys from being modified.',
      'It supports asynchronous operations better.',
    ],
  },
  {
    id: 'q47',
    text: 'What will `console.log(0 == "0")` output?',
    answers: [
      'true',
      'false',
      'undefined',
      'NaN',
    ],
  },
  {
    id: 'q48',
    text: 'What does the `every()` method return?',
    answers: [
      'true if all elements in the array pass a test, otherwise false.',
      'A new array with only elements that pass a test.',
      'The first element that satisfies the condition.',
      'The number of elements that satisfy the condition.',
    ],
  },
  {
    id: 'q49',
    text: 'Which method can be used to convert a string into an array?',
    answers: [
      '`split()`',
      '`slice()`',
      '`toArray()`',
      '`parse()`',
    ],
  },
  {
    id: 'q50',
    text: 'What is the output of `console.log(Boolean(""))`?',
    answers: [
      'false',
      'true',
      'undefined',
      'NaN',
    ],
  },
  {
    id: 'q51',
    text: 'Which keyword is used to declare a constant variable in JavaScript?',
    answers: [
      'const',
      'let',
      'var',
      'static',
    ],
  },
  {
    id: 'q52',
    text: 'What will `typeof null` return?',
    answers: [
      '"object"',
      '"null"',
      '"undefined"',
      '"string"',
    ],
  },
  {
    id: 'q53',
    text: 'Which of the following is a valid way to create an empty array?',
    answers: [
      'let arr = [];',
      'let arr = {};',
      'let arr = new Object();',
      'let arr = null;',
    ],
  },
  {
    id: 'q54',
    text: 'Which method is used to remove the last element from an array?',
    answers: [
      '.pop()',
      '.shift()',
      '.splice()',
      '.remove()',
    ],
  },
  {
    id: 'q55',
    text: 'Which operator checks both value and type equality?',
    answers: [
      '===',
      '==',
      '=',
      '!=',
    ],
  },
  {
    id: 'q56',
    text: 'How do you convert a string to an integer in JavaScript?',
    answers: [
      'parseInt("10")',
      'Number.parseFloat("10")',
      'Math.floor("10")',
      '"10".toInteger()',
    ],
  },
  {
    id: 'q57',
    text: 'Which of these array methods creates a new array with modified elements?',
    answers: [
      '.map()',
      '.forEach()',
      '.filter()',
      '.splice()',
    ],
  },
  {
    id: 'q58',
    text: 'Which function is used to schedule a function execution after a delay?',
    answers: [
      'setTimeout()',
      'setInterval()',
      'clearTimeout()',
      'requestAnimationFrame()',
    ],
  },
  {
    id: 'q59',
    text: 'What does the `.filter()` method do in an array?',
    answers: [
      'Creates a new array with elements that pass a test.',
      'Modifies the original array by removing elements.',
      'Sorts the array elements alphabetically.',
      'Iterates through an array and executes a function.',
    ],
  },
  {
    id: 'q60',
    text: 'Which JavaScript method removes the first element from an array?',
    answers: [
      '.shift()',
      '.pop()',
      '.splice()',
      '.delete()',
    ],
  },
  {
    id: 'q61',
    text: 'Which method is used to combine two or more arrays?',
    answers: [
      '.concat()',
      '.join()',
      '.merge()',
      '.combine()',
    ],
  },
  {
    id: 'q62',
    text: 'Which JavaScript method adds elements to the end of an array?',
    answers: [
      '.push()',
      '.unshift()',
      '.splice()',
      '.append()',
    ],
  },
  {
    id: 'q63',
    text: 'How do you define an arrow function in JavaScript?',
    answers: [
      'const add = (a, b) => a + b;',
      'const add = function (a, b) { return a + b; }',
      'const add: function (a, b) => { return a + b; }',
      'function add(a, b) => a + b;',
    ],
  },
  {
    id: 'q64',
    text: 'What is the correct way to prevent an event’s default behavior?',
    answers: [
      'event.preventDefault();',
      'event.stopPropagation();',
      'event.cancel();',
      'return false;',
    ],
  },
  {
    id: 'q65',
    text: 'What is the purpose of `JSON.stringify()`?',
    answers: [
      'Converts an object into a JSON-formatted string.',
      'Parses a JSON string into a JavaScript object.',
      'Encodes a string in Base64 format.',
      'Serializes a function for network requests.',
    ],
  },
  {
    id: 'q66',
    text: 'Which statement is true about `localStorage` in JavaScript?',
    answers: [
      'It stores data with no expiration time.',
      'It clears data after the user closes the browser.',
      'It only works in an HTTPs environment.',
      'It can store functions.',
    ],
  },
  {
    id: 'q67',
    text: 'Which keyword is used to define an asynchronous function?',
    answers: [
      'async',
      'await',
      'promise',
      'defer',
    ],
  },
  {
    id: 'q68',
    text: 'Which method is used to handle errors in a try-catch block?',
    answers: [
      'catch()',
      'finally()',
      'throw()',
      'catchError()',
    ],
  },
  {
    id: 'q69',
    text: 'Which of these values evaluates to false in JavaScript?',
    answers: [
      '0',
      '"false"',
      '{}',
      'new Boolean(false)',
    ],
  },
  {
    id: 'q70',
    text: 'How do you check if an array contains a specific value?',
    answers: [
      '.includes()',
      '.contains()',
      '.has()',
      '.exists()',
    ],
  },
  {
    id: 'q71',
    text: 'What is the output of `typeof NaN`?',
    answers: [
      '"number"',
      '"NaN"',
      '"undefined"',
      '"object"',
    ],
  },
  {
    id: 'q72',
    text: 'Which statement about JavaScript’s event loop is true?',
    answers: [
      'It handles asynchronous operations by managing the call stack and task queue.',
      'It runs JavaScript code line-by-line synchronously.',
      'It only processes user-generated events like clicks and keypresses.',
      'It is used to create infinite loops in JavaScript.',
    ],
  },
  {
    id: 'q73',
    text: 'Which operator is used for optional chaining?',
    answers: [
      '?.',
      '??',
      '->',
      ':?',
    ],
  },
  {
    id: 'q74',
    text: 'Which method removes elements from an array and optionally replaces them with new elements?',
    answers: [
      '.splice()',
      '.slice()',
      '.cut()',
      '.trim()',
    ],
  },
  {
    id: 'q75',
    text: 'What does `Promise.all()` do?',
    answers: [
      'Waits for all promises to resolve and returns an array of results.',
      'Executes all promises sequentially, one after another.',
      'Cancels all promises if one of them fails.',
      'Creates a race condition between promises.',
    ],
  },
  {
    id: 'q76',
    text: 'What is the output of `console.log([] + [])`?',
    answers: [
      '"" (an empty string)',
      '"[object Object]"',
      '[]',
      'undefined',
    ],
  },
  {
    id: 'q77',
    text: 'What will `console.log(0 == "0")` return?',
    answers: [
      'true',
      'false',
      'undefined',
      'null',
    ],
  },
  {
    id: 'q78',
    text: 'Which of the following is **not** a falsy value in JavaScript?',
    answers: [
      '"false"',
      '0',
      '"" (empty string)',
      'null',
    ],
  },
  {
    id: 'q79',
    text: 'What does the `bind()` method do in JavaScript?',
    answers: [
      'Creates a new function with a fixed `this` context.',
      'Executes a function immediately.',
      'Attaches an event listener to an element.',
      'Creates a deep copy of an object.',
    ],
  },
  {
    id: 'q80',
    text: 'Which method is used to remove duplicates from an array?',
    answers: [
      '[...new Set(arr)]',
      'arr.filter()',
      'arr.reduce()',
      'arr.splice()',
    ],
  },
  {
    id: 'q81',
    text: 'Which function is used to delay execution of a function at regular intervals?',
    answers: [
      'setInterval()',
      'setTimeout()',
      'requestAnimationFrame()',
      'delayFunction()',
    ],
  },
  {
    id: 'q82',
    text: 'How do you deep clone an object in JavaScript?',
    answers: [
      'JSON.parse(JSON.stringify(obj))',
      'Object.assign({}, obj)',
      'obj.clone()',
      'Object.copy(obj)',
    ],
  },
  {
    id: 'q83',
    text: 'Which statement correctly describes JavaScript’s `Map` object?',
    answers: [
      'It allows key-value pairs where keys can be any data type.',
      'It is the same as a JavaScript object.',
      'It is a data structure that stores only unique values.',
      'It automatically sorts elements based on keys.',
    ],
  },
  {
    id: 'q84',
    text: 'Which method converts a JavaScript object to a JSON string?',
    answers: [
      'JSON.stringify(obj)',
      'JSON.parse(obj)',
      'obj.toString()',
      'String(obj)',
    ],
  },
  {
    id: 'q85',
    text: 'Which array method executes a provided function once for each element?',
    answers: [
      '.forEach()',
      '.map()',
      '.filter()',
      '.reduce()',
    ],
  },
  {
    id: 'q86',
    text: 'What does the `.some()` array method return?',
    answers: [
      'true if at least one element passes the test.',
      'true if all elements pass the test.',
      'An array of elements that pass the test.',
      'The first element that passes the test.',
    ],
  },
  {
    id: 'q87',
    text: 'What is the output of `console.log(typeof NaN)`?',
    answers: [
      '"number"',
      '"undefined"',
      '"NaN"',
      '"object"',
    ],
  },
  {
    id: 'q88',
    text: 'Which operator is used for nullish coalescing?',
    answers: [
      '??',
      '||',
      '&&',
      '!',
    ],
  },
  {
    id: 'q89',
    text: 'Which JavaScript loop is best suited for iterating over object properties?',
    answers: [
      'for...in',
      'for...of',
      'forEach()',
      'while',
    ],
  },
  {
    id: 'q90',
    text: 'Which of the following is a correct way to remove a property from an object?',
    answers: [
      'delete obj.prop',
      'obj.prop = null',
      'obj.remove(prop)',
      'obj.drop(prop)',
    ],
  },
  {
    id: 'q91',
    text: 'What does the `Promise.race()` method do?',
    answers: [
      'Resolves as soon as one promise in an array resolves or rejects.',
      'Waits for all promises to resolve before returning results.',
      'Cancels all promises if one fails.',
      'Executes promises sequentially in order.',
    ],
  },
  {
    id: 'q92',
    text: 'Which statement about `fetch()` is true?',
    answers: [
      'It returns a Promise that resolves to a Response object.',
      'It sends data only via the GET method.',
      'It is a synchronous function.',
      'It only works in Node.js.',
    ],
  },
  {
    id: 'q93',
    text: 'What does `.reduce()` do in an array?',
    answers: [
      'Executes a reducer function on each element and returns a single value.',
      'Filters elements that meet a condition.',
      'Maps each element to a new array.',
      'Removes duplicates from the array.',
    ],
  },
  {
    id: 'q94',
    text: 'What does `document.querySelectorAll(".class")` return?',
    answers: [
      'A NodeList of elements matching the selector.',
      'The first element matching the selector.',
      'An array of elements.',
      'A single HTMLElement.',
    ],
  },
  {
    id: 'q95',
    text: 'Which statement about `Object.freeze()` is true?',
    answers: [
      'It makes an object immutable.',
      'It deletes properties from an object.',
      'It prevents new properties from being added but allows modification.',
      'It copies an object deeply.',
    ],
  },
  {
    id: 'q96',
    text: 'Which method checks if an object has a specific property?',
    answers: [
      'obj.hasOwnProperty("prop")',
      '"prop" in obj',
      'obj.contains("prop")',
      'obj.includes("prop")',
    ],
  },
  {
    id: 'q97',
    text: 'Which statement about `new Set()` is correct?',
    answers: [
      'It creates a collection of unique values.',
      'It creates a collection of key-value pairs.',
      'It creates a sorted list.',
      'It creates an array-like object.',
    ],
  },
  {
    id: 'q98',
    text: 'How do you add an item to the beginning of an array?',
    answers: [
      '.unshift()',
      '.push()',
      '.append()',
      '.prepend()',
    ],
  },
  {
    id: 'q99',
    text: 'What is the primary difference between `let` and `var`?',
    answers: [
      '`let` has block scope, `var` does not.',
      '`var` is function-scoped, `let` is not.',
      '`let` is globally accessible, `var` is not.',
      '`var` is immutable, `let` is not.',
    ],
  },
  {
    id: 'q100',
    text: 'What does `Object.entries(obj)` return?',
    answers: [
      'An array of key-value pairs from the object.',
      'An array of object keys.',
      'An array of object values.',
      'A single object with all properties.',
    ],
  },
];

export const cssQuestions = [
  {
    id: 'q1',
    text: 'What does CSS stand for?',
    answers: [
      'Cascading Style Sheets',
      'Computer Style System',
      'Creative Styling Syntax',
      'Code Styling Structure',
    ],
  },
  {
    id: 'q2',
    text: 'Which property is used to change the text color in CSS?',
    answers: [
      'color',
      'text-color',
      'font-color',
      'foreground-color',
    ],
  },
  {
    id: 'q3',
    text: 'Which CSS property controls the text size?',
    answers: [
      'font-size',
      'text-size',
      'size',
      'font-style',
    ],
  },
  {
    id: 'q4',
    text: 'How do you apply a class in CSS?',
    answers: [
      '.classname { }',
      '#classname { }',
      'classname { }',
      '@classname { }',
    ],
  },
  {
    id: 'q5',
    text: 'How do you apply an ID selector in CSS?',
    answers: [
      '#idname { }',
      '.idname { }',
      'idname { }',
      '@idname { }',
    ],
  },
  {
    id: 'q6',
    text: 'Which CSS property is used to set the background color of an element?',
    answers: [
      'background-color',
      'bg-color',
      'color-background',
      'background',
    ],
  },
  {
    id: 'q7',
    text: 'Which CSS property makes text bold?',
    answers: [
      'font-weight',
      'font-bold',
      'text-bold',
      'bold',
    ],
  },
  {
    id: 'q8',
    text: 'Which unit is NOT relative in CSS?',
    answers: [
      'px',
      'em',
      'rem',
      'vw',
    ],
  },
  {
    id: 'q9',
    text: 'Which CSS property controls the spacing between elements?',
    answers: [
      'margin',
      'padding',
      'border-spacing',
      'gap',
    ],
  },
  {
    id: 'q10',
    text: 'What is the default position value in CSS?',
    answers: [
      'static',
      'relative',
      'absolute',
      'fixed',
    ],
  },
  {
    id: 'q11',
    text: 'Which CSS property is used to hide an element, but keep its space occupied?',
    answers: [
      'visibility: hidden',
      'display: none',
      'opacity: 0',
      'z-index: -1',
    ],
  },
  {
    id: 'q12',
    text: 'What does the `z-index` property control?',
    answers: [
      'Stacking order of elements',
      'Element width',
      'Text indentation',
      'Grid alignment',
    ],
  },
  {
    id: 'q13',
    text: 'What does the `float` property do in CSS?',
    answers: [
      'Positions elements to the left or right.',
      'Controls background transparency.',
      'Aligns text in columns.',
      'Controls box model behavior.',
    ],
  },
  {
    id: 'q14',
    text: 'Which CSS property controls the space inside an element, between its content and border?',
    answers: [
      'padding',
      'margin',
      'border',
      'outline',
    ],
  },
  {
    id: 'q15',
    text: 'Which of the following is a pseudo-class in CSS?',
    answers: [
      ':hover',
      '::before',
      '.active',
      '#id:hover',
    ],
  },
  {
    id: 'q16',
    text: 'Which CSS property allows you to change the transparency of an element?',
    answers: [
      'opacity',
      'visibility',
      'filter',
      'alpha',
    ],
  },
  {
    id: 'q17',
    text: 'Which property is used to make an element responsive?',
    answers: [
      'max-width',
      'width',
      'height',
      'padding',
    ],
  },
  {
    id: 'q18',
    text: 'Which CSS rule is used to define styles for different screen sizes?',
    answers: [
      '@media',
      '@responsive',
      '@viewport',
      '@screen',
    ],
  },
  {
    id: 'q19',
    text: 'Which CSS display property hides an element and removes it from the document flow?',
    answers: [
      'display: none',
      'visibility: hidden',
      'opacity: 0',
      'z-index: -999',
    ],
  },
  {
    id: 'q20',
    text: 'Which CSS property is used to add shadows to text?',
    answers: [
      'text-shadow',
      'font-shadow',
      'box-shadow',
      'shadow-text',
    ],
  },
  {
    id: 'q21',
    text: 'Which CSS property is used to add rounded corners to an element?',
    answers: [
      'border-radius',
      'corner-round',
      'rounded-border',
      'box-radius',
    ],
  },
  {
    id: 'q22',
    text: 'What is the default value of the "display" property?',
    answers: [
      'block for div, inline for span',
      'inline for all elements',
      'none for all elements',
      'flex for all elements',
    ],
  },
  {
    id: 'q23',
    text: 'Which CSS property aligns items inside a flex container along the main axis?',
    answers: [
      'justify-content',
      'align-items',
      'flex-direction',
      'grid-template-rows',
    ],
  },
  {
    id: 'q24',
    text: 'Which CSS property allows text to wrap inside an element?',
    answers: [
      'word-wrap',
      'text-wrap',
      'overflow-wrap',
      'line-wrap',
    ],
  },
  {
    id: 'q25',
    text: 'Which of these CSS properties is used to create animations?',
    answers: [
      'animation',
      'transform',
      'transition',
      'motion',
    ],
  },
  {
    id: 'q26',
    text: 'Which CSS property is used to specify how an element should behave when it overflows its container?',
    answers: [
      'overflow',
      'clip',
      'text-overflow',
      'resize',
    ],
  },
  {
    id: 'q27',
    text: 'Which CSS property is used to add a shadow around an element?',
    answers: [
      'box-shadow',
      'shadow',
      'element-shadow',
      'border-shadow',
    ],
  },
  {
    id: 'q28',
    text: 'Which value of the `position` property allows an element to remain in the same place when scrolling?',
    answers: [
      'fixed',
      'absolute',
      'relative',
      'sticky',
    ],
  },
  {
    id: 'q29',
    text: 'What does the `clip-path` property do in CSS?',
    answers: [
      'Defines a shape that clips an element.',
      'Resizes an element to fit within a container.',
      'Creates a gradient mask over an element.',
      'Adjusts the transparency of an element.',
    ],
  },
  {
    id: 'q30',
    text: 'Which of the following is NOT a valid CSS color format?',
    answers: [
      'color(hex, 255, 100, 50)',
      'rgba(255, 100, 50, 0.5)',
      'hsl(240, 100%, 50%)',
      '#FF5733',
    ],
  },
  {
    id: 'q31',
    text: 'Which property is used to apply a transformation such as rotation or scaling?',
    answers: [
      'transform',
      'animation',
      'transition',
      'modify',
    ],
  },
  {
    id: 'q32',
    text: 'Which CSS property defines the order of flex items inside a container?',
    answers: [
      'order',
      'position',
      'flex-order',
      'z-index',
    ],
  },
  {
    id: 'q33',
    text: 'What is the difference between `em` and `rem` units?',
    answers: [
      'rem is relative to the root element, while em is relative to its parent.',
      'They are exactly the same.',
      'em is always relative to the viewport size.',
      'rem depends on the element width.',
    ],
  },
  {
    id: 'q34',
    text: 'Which property is used to create space between the border and the content inside an element?',
    answers: [
      'padding',
      'margin',
      'spacing',
      'gap',
    ],
  },
  {
    id: 'q35',
    text: 'What does the `object-fit` property do in CSS?',
    answers: [
      'Controls how an image or video fits inside a container.',
      'Defines the shape of an element.',
      'Adjusts the opacity of an element.',
      'Specifies the height of an element.',
    ],
  },
  {
    id: 'q36',
    text: 'Which value of `position` makes an element scroll along with the page until it reaches a certain point, then becomes fixed?',
    answers: [
      'sticky',
      'fixed',
      'relative',
      'absolute',
    ],
  },
  {
    id: 'q37',
    text: 'Which CSS property specifies whether an element is resizable by the user?',
    answers: [
      'resize',
      'overflow',
      'clip',
      'draggable',
    ],
  },
  {
    id: 'q38',
    text: 'What is the purpose of the `grid-template-columns` property?',
    answers: [
      'Defines the number and size of columns in a CSS Grid layout.',
      'Controls the flow of content in a flex container.',
      'Defines the height of elements inside a grid.',
      'Specifies how text should wrap within a grid.',
    ],
  },
  {
    id: 'q39',
    text: 'Which CSS function is used to apply a transition effect over time?',
    answers: [
      'transition',
      'animation',
      'transform',
      'effect',
    ],
  },
  {
    id: 'q40',
    text: 'Which property determines the spacing between letters in text?',
    answers: [
      'letter-spacing',
      'word-spacing',
      'text-indent',
      'line-height',
    ],
  },
  {
    id: 'q41',
    text: 'Which of the following pseudo-elements is used to insert content before an element?',
    answers: [
      '::before',
      '::after',
      ':hover',
      ':before',
    ],
  },
  {
    id: 'q42',
    text: 'Which CSS property allows text to overflow into multiple lines?',
    answers: [
      'word-wrap',
      'overflow-x',
      'line-break',
      'white-space',
    ],
  },
  {
    id: 'q43',
    text: 'Which of the following values makes a flex container’s children distribute evenly across the main axis?',
    answers: [
      'justify-content: space-between',
      'align-items: center',
      'display: grid',
      'flex-grow: 1',
    ],
  },
  {
    id: 'q44',
    text: 'Which of the following is NOT a valid CSS unit?',
    answers: [
      'dp',
      'vw',
      'ch',
      'vmin',
    ],
  },
  {
    id: 'q45',
    text: 'Which CSS property is used to make text uppercase?',
    answers: [
      'text-transform',
      'text-case',
      'letter-case',
      'font-style',
    ],
  },
  {
    id: 'q46',
    text: 'Which CSS property controls the height of lines in a paragraph?',
    answers: [
      'line-height',
      'letter-spacing',
      'word-spacing',
      'text-indent',
    ],
  },
  {
    id: 'q47',
    text: 'Which CSS property is used to control the direction of flex items?',
    answers: [
      'flex-direction',
      'justify-content',
      'grid-template-rows',
      'display',
    ],
  },
  {
    id: 'q48',
    text: 'What is the difference between `visibility: hidden` and `display: none`?',
    answers: [
      'visibility: hidden hides the element but keeps space occupied, while display: none removes it completely.',
      'Both make the element disappear but keep it in the DOM.',
      'display: none makes the element transparent but clickable.',
      'visibility: hidden completely removes the element from the page.',
    ],
  },
  {
    id: 'q49',
    text: 'Which CSS property is used to apply a gradient background?',
    answers: [
      'background-image: linear-gradient()',
      'gradient-background',
      'color-gradient',
      'background-linear',
    ],
  },
  {
    id: 'q50',
    text: 'Which value of `box-sizing` makes sure padding and border are included in the total element width and height?',
    answers: [
      'border-box',
      'content-box',
      'padding-box',
      'box-shadow',
    ],
  },
  {
    id: 'q51',
    text: 'Which property controls the text size in CSS?',
    answers: [
      'font-size',
      'text-size',
      'size',
      'font-weight',
    ],
  },
  {
    id: 'q52',
    text: 'Which CSS unit is relative to the width of the viewport?',
    answers: [
      'vw',
      'vh',
      'em',
      'px',
    ],
  },
  {
    id: 'q53',
    text: 'Which CSS property is used to hide an element without removing it from the layout?',
    answers: [
      'visibility: hidden',
      'display: none',
      'opacity: 0',
      'z-index: -1',
    ],
  },
  {
    id: 'q54',
    text: 'What does `z-index` control in CSS?',
    answers: [
      'The stack order of elements',
      'The transparency of an element',
      'The positioning of an element',
      'The width of an element',
    ],
  },
  {
    id: 'q55',
    text: 'Which value of `position` makes an element stay fixed in place relative to the viewport?',
    answers: [
      'fixed',
      'absolute',
      'relative',
      'sticky',
    ],
  },
  {
    id: 'q56',
    text: 'What does `display: flex;` do?',
    answers: [
      'Creates a flexible container that arranges items in a row or column',
      'Centers an element inside another',
      'Fixes an element to the screen',
      'Adds space between elements',
    ],
  },
  {
    id: 'q57',
    text: 'Which property is used to create a smooth scrolling effect in CSS?',
    answers: [
      'scroll-behavior',
      'overflow',
      'smooth-scroll',
      'scroll-mode',
    ],
  },
  {
    id: 'q58',
    text: 'How can you set a fallback font in CSS?',
    answers: [
      'By listing multiple fonts in the `font-family` property',
      'By using `font-fallback` property',
      'By defining a secondary `font-style`',
      'By specifying it in `@font-face`',
    ],
  },
  {
    id: 'q59',
    text: 'Which CSS property is used to create a responsive design that adjusts to screen size?',
    answers: [
      'media queries',
      'viewport',
      'breakpoints',
      'flex-wrap',
    ],
  },
  {
    id: 'q60',
    text: 'What does `overflow: auto;` do?',
    answers: [
      'Adds scrollbars only when necessary',
      'Always shows scrollbars',
      'Hides overflowing content',
      'Expands the container size',
    ],
  },
  {
    id: 'q61',
    text: 'What does the `clip-path` property do?',
    answers: [
      'Defines a visible region for an element',
      'Creates an animated mask',
      'Sets an image as a background',
      'Changes the transparency of an element',
    ],
  },
  {
    id: 'q62',
    text: 'Which CSS property creates a shadow behind an element?',
    answers: [
      'box-shadow',
      'text-shadow',
      'filter',
      'outline',
    ],
  },
  {
    id: 'q63',
    text: 'What does `:hover` do in CSS?',
    answers: [
      'Applies styles when the user hovers over an element',
      'Applies styles when the user clicks an element',
      'Applies styles when the element is in focus',
      'Applies styles when the user leaves an element',
    ],
  },
  {
    id: 'q64',
    text: 'Which CSS property allows text to wrap around an element?',
    answers: [
      'float',
      'text-align',
      'position',
      'display',
    ],
  },
  {
    id: 'q65',
    text: 'What does `align-items: center;` do in a flex container?',
    answers: [
      'Centers items along the cross axis',
      'Centers items along the main axis',
      'Aligns items to the start of the container',
      'Aligns items to the end of the container',
    ],
  },
  {
    id: 'q66',
    text: 'What does `gap` do in CSS Grid and Flexbox?',
    answers: [
      'Defines the spacing between grid or flex items',
      'Defines the width of columns',
      'Controls the overall height of elements',
      'Sets the margin of elements',
    ],
  },
  {
    id: 'q67',
    text: 'What does `backdrop-filter` do in CSS?',
    answers: [
      'Applies a filter effect (like blur) to elements behind the current element',
      'Changes the brightness of the background',
      'Adds a shadow effect',
      'Applies a border to the background',
    ],
  },
  {
    id: 'q68',
    text: 'What does `object-fit: cover;` do on an image?',
    answers: [
      'Scales an image to fill its container while maintaining aspect ratio',
      'Stretches an image to fit the container exactly',
      'Aligns an image to the left side of the container',
      'Ensures an image is always fully visible',
    ],
  },
  {
    id: 'q69',
    text: 'What does `letter-spacing` control in CSS?',
    answers: [
      'The space between characters in text',
      'The space between words in a paragraph',
      'The height of a text block',
      'The width of text',
    ],
  },
  {
    id: 'q70',
    text: 'Which CSS property is used to apply animations to elements?',
    answers: [
      'animation',
      'transition',
      'transform',
      'keyframes',
    ],
  },
  {
    id: 'q71',
    text: 'Which pseudo-class selects the first child element?',
    answers: [
      ':first-child',
      ':first-of-type',
      ':nth-child(1)',
      ':first',
    ],
  },
  {
    id: 'q72',
    text: 'Which property defines the alignment of text inside a block?',
    answers: [
      'text-align',
      'text-justify',
      'word-spacing',
      'letter-spacing',
    ],
  },
  {
    id: 'q73',
    text: 'What is the default display value of `<div>`?',
    answers: [
      'block',
      'inline',
      'flex',
      'grid',
    ],
  },
  {
    id: 'q74',
    text: 'Which CSS property is used to control transparency?',
    answers: [
      'opacity',
      'visibility',
      'z-index',
      'background-blur',
    ],
  },
  {
    id: 'q75',
    text: 'Which value of `display` makes an element disappear from the page layout?',
    answers: [
      'none',
      'hidden',
      'invisible',
      'block',
    ],
  },
  {
    id: 'q76',
    text: 'Which CSS property is used to create rounded corners?',
    answers: [
      'border-radius',
      'corner-style',
      'round-corners',
      'border-curve',
    ],
  },
  {
    id: 'q77',
    text: 'Which pseudo-class selects the last child element?',
    answers: [
      ':last-child',
      ':nth-last-child',
      ':final-child',
      ':only-last',
    ],
  },
  {
    id: 'q78',
    text: 'What does `justify-content: space-between;` do in a flex container?',
    answers: [
      'Distributes items evenly with space between them',
      'Aligns items to the start of the container',
      'Centers items within the container',
      'Distributes items evenly with space around them',
    ],
  },
  {
    id: 'q79',
    text: 'Which property is used to add shadow to text?',
    answers: [
      'text-shadow',
      'box-shadow',
      'filter',
      'opacity',
    ],
  },
  {
    id: 'q80',
    text: 'Which property controls the width of an element’s border?',
    answers: [
      'border-width',
      'border-size',
      'outline-width',
      'border-style',
    ],
  },
  {
    id: 'q81',
    text: 'Which value of `overflow` will completely hide overflowing content?',
    answers: [
      'hidden',
      'scroll',
      'clip',
      'visible',
    ],
  },
  {
    id: 'q82',
    text: 'Which CSS property controls the visibility of an element?',
    answers: [
      'visibility',
      'display',
      'opacity',
      'z-index',
    ],
  },
  {
    id: 'q83',
    text: 'Which CSS property allows you to define custom animations?',
    answers: [
      'animation',
      'keyframes',
      'transition',
      'transform',
    ],
  },
  {
    id: 'q84',
    text: 'What does `object-position` do when used on an image?',
    answers: [
      'Controls how an image is positioned inside its container',
      'Determines how an image scales',
      'Defines the height of an image',
      'Changes the background color of an image',
    ],
  },
  {
    id: 'q85',
    text: 'Which property allows an element to be positioned relative to itself?',
    answers: [
      'position: relative',
      'position: absolute',
      'position: fixed',
      'position: sticky',
    ],
  },
  {
    id: 'q86',
    text: 'What does the `transition` property do in CSS?',
    answers: [
      'Creates smooth animations between property changes',
      'Changes the display mode of an element',
      'Modifies the way an element loads',
      'Controls the opacity of an element',
    ],
  },
  {
    id: 'q87',
    text: 'Which property is used to make text italic?',
    answers: [
      'font-style',
      'text-transform',
      'text-italic',
      'font-weight',
    ],
  },
  {
    id: 'q88',
    text: 'Which CSS property is used to define space inside an element?',
    answers: [
      'padding',
      'margin',
      'border',
      'spacing',
    ],
  },
  {
    id: 'q89',
    text: 'Which CSS function is used to apply multiple background images?',
    answers: [
      'background-image',
      'multi-background',
      'background-layer',
      'overlay',
    ],
  },
  {
    id: 'q90',
    text: 'Which CSS property is used to create a fixed navigation bar?',
    answers: [
      'position: fixed',
      'display: flex',
      'overflow: hidden',
      'position: absolute',
    ],
  },
  {
    id: 'q91',
    text: 'What does `grid-template-columns` do in CSS Grid?',
    answers: [
      'Defines the number and size of columns in a grid',
      'Sets the spacing between grid items',
      'Aligns items in a grid layout',
      'Adjusts the height of grid elements',
    ],
  },
  {
    id: 'q92',
    text: 'Which value of `display` makes an element a grid container?',
    answers: [
      'grid',
      'inline-grid',
      'block',
      'table',
    ],
  },
  {
    id: 'q93',
    text: 'Which CSS property defines how text is capitalized?',
    answers: [
      'text-transform',
      'text-decoration',
      'letter-spacing',
      'font-variant',
    ],
  },
  {
    id: 'q94',
    text: 'What is the difference between `em` and `rem` units?',
    answers: [
      '`em` is relative to the parent element’s font-size, `rem` is relative to the root element’s font-size',
      '`rem` is relative to the parent element’s font-size, `em` is relative to the root element’s font-size',
      'They are the same and can be used interchangeably',
      '`rem` is relative to viewport width, while `em` is relative to viewport height',
    ],
  },
  {
    id: 'q95',
    text: 'Which property controls the order of items in a flex container?',
    answers: [
      'order',
      'position',
      'z-index',
      'display',
    ],
  },
  {
    id: 'q96',
    text: 'What does `column-gap` do in CSS Grid?',
    answers: [
      'Defines the spacing between grid columns',
      'Sets the height of a column',
      'Controls the width of a grid item',
      'Aligns text within a grid column',
    ],
  },
  {
    id: 'q97',
    text: 'What is the purpose of `pointer-events: none;`?',
    answers: [
      'Disables mouse interactions on an element',
      'Changes the cursor style when hovering',
      'Hides an element from the DOM',
      'Prevents the element from being resized',
    ],
  },
  {
    id: 'q98',
    text: 'Which property controls the way flex items wrap in a flex container?',
    answers: [
      'flex-wrap',
      'flex-flow',
      'align-content',
      'display',
    ],
  },
  {
    id: 'q99',
    text: 'Which CSS property specifies the stacking order of elements?',
    answers: [
      'z-index',
      'order',
      'position',
      'display',
    ],
  },
  {
    id: 'q100',
    text: 'Which CSS property is used to make a button look disabled?',
    answers: [
      'opacity and cursor',
      'pointer-events',
      'visibility: hidden',
      'display: none',
    ],
  },
];

export const htmlQuestions = [
  {
    id: 'q1',
    text: 'What does HTML stand for?',
    answers: [
      'HyperText Markup Language',
      'Hyper Transfer Markup Language',
      'HighText Machine Language',
      'Hyperlink and Text Markup Language',
    ],
  },
  {
    id: 'q2',
    text: 'Which HTML tag is used to define the largest heading?',
    answers: [
      '<h1>',
      '<h6>',
      '<head>',
      '<title>',
    ],
  },
  {
    id: 'q3',
    text: 'Which attribute is used to provide additional information about an element, typically displayed as a tooltip?',
    answers: [
      'title',
      'alt',
      'tooltip',
      'info',
    ],
  },
  {
    id: 'q4',
    text: 'What is the correct HTML element for inserting a line break?',
    answers: [
      '<br>',
      '<lb>',
      '<break>',
      '<line>',
    ],
  },
  {
    id: 'q5',
    text: 'Which tag is used to create an unordered list?',
    answers: [
      '<ul>',
      '<ol>',
      '<li>',
      '<list>',
    ],
  },
  {
    id: 'q6',
    text: 'Which tag is used to define an internal style sheet in HTML?',
    answers: [
      '<style>',
      '<css>',
      '<script>',
      '<styles>',
    ],
  },
  {
    id: 'q7',
    text: 'Which attribute is used to specify that an input field must be filled out before submitting a form?',
    answers: [
      'required',
      'validate',
      'placeholder',
      'mandatory',
    ],
  },
  {
    id: 'q8',
    text: 'What does the "alt" attribute in an <img> tag specify?',
    answers: [
      'Alternate text for the image if it cannot be displayed',
      'The alignment of the image on the page',
      'The source URL of the image',
      'The image file size',
    ],
  },
  {
    id: 'q9',
    text: 'Which HTML tag is used to define a footer for a document or section?',
    answers: [
      '<footer>',
      '<bottom>',
      '<section>',
      '<div>',
    ],
  },
  {
    id: 'q10',
    text: 'Which of the following is used to create a hyperlink in HTML?',
    answers: [
      '<a>',
      '<link>',
      '<href>',
      '<hyperlink>',
    ],
  },
  {
    id: 'q11',
    text: 'Which input type is used to allow users to select multiple options?',
    answers: [
      'checkbox',
      'radio',
      'select',
      'multiple',
    ],
  },
  {
    id: 'q12',
    text: 'Which tag is used to embed JavaScript inside an HTML document?',
    answers: [
      '<script>',
      '<javascript>',
      '<code>',
      '<js>',
    ],
  },
  {
    id: 'q13',
    text: 'Which HTML tag is used for a container that holds navigation links?',
    answers: [
      '<nav>',
      '<menu>',
      '<sidebar>',
      '<links>',
    ],
  },
  {
    id: 'q14',
    text: 'Which HTML element is used to specify a form input field where users can enter text?',
    answers: [
      '<input>',
      '<textarea>',
      '<text>',
      '<entry>',
    ],
  },
  {
    id: 'q15',
    text: 'Which of the following HTML tags is used to create a table row?',
    answers: [
      '<tr>',
      '<table>',
      '<td>',
      '<th>',
    ],
  },
  {
    id: 'q16',
    text: 'What is the purpose of the `<meta>` tag in HTML?',
    answers: [
      'To specify metadata about the document such as character encoding and description',
      'To create a hyperlink to another web page',
      'To add custom styling to a document',
      'To embed a video file into a webpage',
    ],
  },
  {
    id: 'q17',
    text: 'Which HTML tag is used to define a quotation?',
    answers: [
      '<blockquote>',
      '<quote>',
      '<q>',
      '<citation>',
    ],
  },
  {
    id: 'q18',
    text: 'Which attribute is used to make a text input field non-editable?',
    answers: [
      'readonly',
      'disabled',
      'locked',
      'static',
    ],
  },
  {
    id: 'q19',
    text: 'Which tag is used to create a drop-down list in an HTML form?',
    answers: [
      '<select>',
      '<dropdown>',
      '<list>',
      '<options>',
    ],
  },
  {
    id: 'q20',
    text: 'Which tag is used to define emphasized text?',
    answers: [
      '<em>',
      '<bold>',
      '<strong>',
      '<italic>',
    ],
  },
  {
    id: 'q21',
    text: 'Which of the following tags is used to create a numbered list?',
    answers: [
      '<ol>',
      '<ul>',
      '<li>',
      '<dl>',
    ],
  },
  {
    id: 'q22',
    text: 'Which attribute can be used to open a link in a new tab?',
    answers: [
      'target="_blank"',
      'newtab="true"',
      'open="new"',
      'window="new"',
    ],
  },
  {
    id: 'q23',
    text: 'Which HTML element is used to group together form controls?',
    answers: [
      '<fieldset>',
      '<group>',
      '<form>',
      '<input>',
    ],
  },
  {
    id: 'q24',
    text: 'Which tag is used to define a section of navigation links?',
    answers: [
      '<nav>',
      '<header>',
      '<section>',
      '<aside>',
    ],
  },
  {
    id: 'q25',
    text: 'Which tag is used to define an interactive button in HTML?',
    answers: [
      '<button>',
      '<input>',
      '<click>',
      '<submit>',
    ],
  },
  {
    id: 'q26',
    text: 'What is the correct syntax for creating a comment in HTML?',
    answers: [
      '<!-- This is a comment -->',
      '// This is a comment',
      '/* This is a comment */',
      '<! This is a comment !>',
    ],
  },
  {
    id: 'q27',
    text: 'Which HTML tag is used to define an image?',
    answers: [
      '<img>',
      '<image>',
      '<picture>',
      '<photo>',
    ],
  },
  {
    id: 'q28',
    text: 'Which HTML tag is used to display a horizontal line?',
    answers: [
      '<hr>',
      '<br>',
      '<line>',
      '<break>',
    ],
  },
  {
    id: 'q29',
    text: 'Which of the following tags is used to display computer code?',
    answers: [
      '<code>',
      '<computer>',
      '<script>',
      '<data>',
    ],
  },
  {
    id: 'q30',
    text: 'Which attribute is used to define inline styles?',
    answers: [
      'style',
      'css',
      'inline',
      'class',
    ],
  },
  {
    id: 'q31',
    text: 'Which HTML tag is used to define a title in the browser tab?',
    answers: [
      '<title>',
      '<meta>',
      '<head>',
      '<header>',
    ],
  },
  {
    id: 'q32',
    text: 'Which HTML element is used to specify a contact address?',
    answers: [
      '<address>',
      '<contact>',
      '<info>',
      '<footer>',
    ],
  },
  {
    id: 'q33',
    text: 'Which tag is used to embed a video file in HTML?',
    answers: [
      '<video>',
      '<media>',
      '<movie>',
      '<mp4>',
    ],
  },
  {
    id: 'q34',
    text: 'Which tag is used to mark up a progress bar in HTML?',
    answers: [
      '<progress>',
      '<bar>',
      '<meter>',
      '<range>',
    ],
  },
  {
    id: 'q35',
    text: 'Which tag is used to group related options in a drop-down list?',
    answers: [
      '<optgroup>',
      '<option>',
      '<select>',
      '<fieldset>',
    ],
  },
  {
    id: 'q36',
    text: 'Which HTML element is used to define important text?',
    answers: [
      '<strong>',
      '<b>',
      '<important>',
      '<highlight>',
    ],
  },
  {
    id: 'q37',
    text: 'Which tag is used to define a table cell?',
    answers: [
      '<td>',
      '<tr>',
      '<th>',
      '<table>',
    ],
  },
  {
    id: 'q38',
    text: 'Which tag is used to specify a list of pre-defined options for an input field?',
    answers: [
      '<datalist>',
      '<select>',
      '<option>',
      '<dropdown>',
    ],
  },
  {
    id: 'q39',
    text: 'Which tag is used to define a caption for a table?',
    answers: [
      '<caption>',
      '<title>',
      '<th>',
      '<header>',
    ],
  },
  {
    id: 'q40',
    text: 'What is the purpose of the `<abbr>` tag in HTML?',
    answers: [
      'It defines an abbreviation or acronym with a tooltip when hovered over.',
      'It makes text bold.',
      'It is used for footnotes.',
      'It specifies a link to an external resource.',
    ],
  },
  {
    id: 'q41',
    text: 'Which tag is used to group a set of options within a `<select>` element?',
    answers: [
      '<optgroup>',
      '<fieldset>',
      '<legend>',
      '<option>',
    ],
  },
  {
    id: 'q42',
    text: 'Which attribute is used to specify the URL of a video file in the `<video>` tag?',
    answers: [
      'src',
      'href',
      'url',
      'link',
    ],
  },
  {
    id: 'q43',
    text: 'Which element is used to define a block of navigation links?',
    answers: [
      '<nav>',
      '<menu>',
      '<ul>',
      '<header>',
    ],
  },
  {
    id: 'q44',
    text: 'Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?',
    answers: [
      'alt',
      'title',
      'caption',
      'desc',
    ],
  },
  {
    id: 'q45',
    text: 'Which tag is used to specify self-contained content, like a blog post?',
    answers: [
      '<article>',
      '<section>',
      '<div>',
      '<aside>',
    ],
  },
  {
    id: 'q46',
    text: 'Which HTML tag defines a clickable button?',
    answers: [
      '<button>',
      '<click>',
      '<input>',
      '<submit>',
    ],
  },
  {
    id: 'q47',
    text: 'Which HTML element is used to define a sidebar?',
    answers: [
      '<aside>',
      '<section>',
      '<nav>',
      '<sidebar>',
    ],
  },
  {
    id: 'q48',
    text: 'Which tag is used to define emphasized text in italics?',
    answers: [
      '<em>',
      '<i>',
      '<italic>',
      '<strong>',
    ],
  },
  {
    id: 'q49',
    text: 'Which attribute is used to define an inline JavaScript event in HTML?',
    answers: [
      'onclick',
      'onload',
      'onsubmit',
      'onhover',
    ],
  },
  {
    id: 'q50',
    text: 'Which tag is used to define metadata about an HTML document?',
    answers: [
      '<meta>',
      '<head>',
      '<title>',
      '<header>',
    ],
  },
  {
    id: 'q51',
    text: 'Which HTML tag is used to define the main navigation menu?',
    answers: [
      '<nav>',
      '<menu>',
      '<header>',
      '<section>',
    ],
  },
  {
    id: 'q52',
    text: 'Which tag is used to group elements in a block container?',
    answers: [
      '<div>',
      '<span>',
      '<section>',
      '<container>',
    ],
  },
  {
    id: 'q53',
    text: 'What is the primary purpose of the `<section>` element?',
    answers: [
      'To group related content together',
      'To define navigation elements',
      'To create a generic container',
      'To separate inline elements',
    ],
  },
  {
    id: 'q54',
    text: 'Which attribute is used to specify a unique identifier for an element?',
    answers: [
      'id',
      'class',
      'name',
      'key',
    ],
  },
  {
    id: 'q55',
    text: 'Which HTML tag is used for embedding audio files?',
    answers: [
      '<audio>',
      '<sound>',
      '<music>',
      '<wave>',
    ],
  },
  {
    id: 'q56',
    text: 'Which tag is used for embedding external content such as a webpage?',
    answers: [
      '<iframe>',
      '<embed>',
      '<object>',
      '<frame>',
    ],
  },
  {
    id: 'q57',
    text: 'Which tag is used to define the footer of a webpage?',
    answers: [
      '<footer>',
      '<bottom>',
      '<end>',
      '<section>',
    ],
  },
  {
    id: 'q58',
    text: 'Which attribute is used to open a link in a new tab?',
    answers: [
      'target="_blank"',
      'rel="new"',
      'open="new"',
      'href="_new"',
    ],
  },
  {
    id: 'q59',
    text: 'Which HTML tag is used to define emphasized text?',
    answers: [
      '<em>',
      '<i>',
      '<strong>',
      '<bold>',
    ],
  },
  {
    id: 'q60',
    text: 'Which tag is used to define the title of an HTML document?',
    answers: [
      '<title>',
      '<head>',
      '<meta>',
      '<header>',
    ],
  },
  {
    id: 'q61',
    text: 'Which tag is used to define a table row?',
    answers: [
      '<tr>',
      '<th>',
      '<td>',
      '<table>',
    ],
  },
  {
    id: 'q62',
    text: 'Which attribute is used to merge two or more table columns?',
    answers: [
      'colspan',
      'rowspan',
      'merge',
      'span',
    ],
  },
  {
    id: 'q63',
    text: 'Which HTML tag represents a self-contained piece of content?',
    answers: [
      '<article>',
      '<section>',
      '<aside>',
      '<div>',
    ],
  },
  {
    id: 'q64',
    text: 'Which tag is used to display a horizontal rule?',
    answers: [
      '<hr>',
      '<line>',
      '<border>',
      '<break>',
    ],
  },
  {
    id: 'q65',
    text: 'Which HTML element is used to specify a date and time?',
    answers: [
      '<time>',
      '<date>',
      '<datetime>',
      '<timestamp>',
    ],
  },
  {
    id: 'q66',
    text: 'Which HTML attribute specifies the language of the document?',
    answers: [
      'lang',
      'xml',
      'dir',
      'language',
    ],
  },
  {
    id: 'q67',
    text: 'Which tag is used to define an input field in a form?',
    answers: [
      '<input>',
      '<form>',
      '<field>',
      '<entry>',
    ],
  },
  {
    id: 'q68',
    text: 'Which attribute is used to specify placeholder text in an input field?',
    answers: [
      'placeholder',
      'hint',
      'default',
      'text',
    ],
  },
  {
    id: 'q69',
    text: 'Which tag is used to define a numbered list?',
    answers: [
      '<ol>',
      '<ul>',
      '<li>',
      '<dl>',
    ],
  },
  {
    id: 'q70',
    text: 'Which HTML attribute is used to specify an image source?',
    answers: [
      'src',
      'href',
      'link',
      'img',
    ],
  },
  {
    id: 'q71',
    text: 'Which tag is used to create an interactive button in HTML?',
    answers: [
      '<button>',
      '<input>',
      '<click>',
      '<submit>',
    ],
  },
  {
    id: 'q72',
    text: 'Which HTML tag defines a label for an input element?',
    answers: [
      '<label>',
      '<caption>',
      '<name>',
      '<tag>',
    ],
  },
  {
    id: 'q73',
    text: 'Which HTML tag is used to define a block of preformatted text?',
    answers: [
      '<pre>',
      '<code>',
      '<blockquote>',
      '<tt>',
    ],
  },
  {
    id: 'q74',
    text: 'Which tag is used to create an option in a drop-down list?',
    answers: [
      '<option>',
      '<select>',
      '<choice>',
      '<list>',
    ],
  },
  {
    id: 'q75',
    text: 'Which tag is used to define an inline frame?',
    answers: [
      '<iframe>',
      '<frame>',
      '<embed>',
      '<window>',
    ],
  },
  {
    id: 'q76',
    text: 'Which HTML tag is used to define an image?',
    answers: [
      '<img>',
      '<pic>',
      '<image>',
      '<figure>',
    ],
  },
  {
    id: 'q77',
    text: 'Which tag is used to create a table header?',
    answers: [
      '<th>',
      '<thead>',
      '<tr>',
      '<td>',
    ],
  },
  {
    id: 'q78',
    text: 'Which HTML attribute specifies that an input field must be filled out?',
    answers: [
      'required',
      'validate',
      'mandatory',
      'needed',
    ],
  },
  {
    id: 'q79',
    text: 'Which tag is used to group related elements in a form?',
    answers: [
      '<fieldset>',
      '<form>',
      '<group>',
      '<container>',
    ],
  },
  {
    id: 'q80',
    text: 'Which tag is used to specify an alternative content for browsers that do not support scripting?',
    answers: [
      '<noscript>',
      '<script>',
      '<alt>',
      '<fallback>',
    ],
  },
  {
    id: 'q81',
    text: 'Which tag is used to represent a thematic break?',
    answers: [
      '<hr>',
      '<br>',
      '<line>',
      '<separator>',
    ],
  },
  {
    id: 'q82',
    text: 'Which tag is used to define a definition list?',
    answers: [
      '<dl>',
      '<ol>',
      '<ul>',
      '<list>',
    ],
  },
  {
    id: 'q83',
    text: 'Which HTML attribute is used to make an element non-editable?',
    answers: [
      'readonly',
      'disabled',
      'locked',
      'static',
    ],
  },
  {
    id: 'q84',
    text: 'Which tag is used to embed an external web page?',
    answers: [
      '<iframe>',
      '<embed>',
      '<object>',
      '<div>',
    ],
  },
  {
    id: 'q85',
    text: 'Which tag is used to define a clickable hyperlink?',
    answers: [
      '<a>',
      '<link>',
      '<href>',
      '<connect>',
    ],
  },
  {
    id: 'q86',
    text: 'Which HTML attribute specifies a tooltip for an element?',
    answers: [
      'title',
      'tooltip',
      'alt',
      'hint',
    ],
  },
  {
    id: 'q87',
    text: 'Which tag is used to create a text area for user input?',
    answers: [
      '<textarea>',
      '<input type="text">',
      '<textbox>',
      '<text>',
    ],
  },
  {
    id: 'q88',
    text: 'Which tag is used to define an abbreviation or acronym?',
    answers: [
      '<abbr>',
      '<acronym>',
      '<short>',
      '<define>',
    ],
  },
  {
    id: 'q89',
    text: 'Which tag is used to define keyboard input?',
    answers: [
      '<kbd>',
      '<key>',
      '<input>',
      '<shortcut>',
    ],
  },
  {
    id: 'q90',
    text: 'Which HTML attribute specifies an input field should automatically receive focus?',
    answers: [
      'autofocus',
      'focus',
      'selected',
      'default',
    ],
  },
  {
    id: 'q91',
    text: 'Which HTML tag is used to display a progress bar?',
    answers: [
      '<progress>',
      '<bar>',
      '<meter>',
      '<load>',
    ],
  },
  {
    id: 'q92',
    text: 'Which tag is used to define the metadata of a document?',
    answers: [
      '<meta>',
      '<head>',
      '<info>',
      '<data>',
    ],
  },
  {
    id: 'q93',
    text: 'Which HTML tag is used to define a caption for a table?',
    answers: [
      '<caption>',
      '<summary>',
      '<thead>',
      '<desc>',
    ],
  },
  {
    id: 'q94',
    text: 'Which tag is used to define an emphasized text with strong importance?',
    answers: [
      '<strong>',
      '<bold>',
      '<em>',
      '<i>',
    ],
  },
  {
    id: 'q95',
    text: 'Which tag is used to define a clickable button in HTML?',
    answers: [
      '<button>',
      '<click>',
      '<submit>',
      '<form>',
    ],
  },
  {
    id: 'q96',
    text: 'Which attribute specifies the character encoding for an HTML document?',
    answers: [
      'charset',
      'encoding',
      'lang',
      'meta',
    ],
  },
  {
    id: 'q97',
    text: 'Which tag is used to create a drop-down selection list?',
    answers: [
      '<select>',
      '<dropdown>',
      '<list>',
      '<option>',
    ],
  },
  {
    id: 'q98',
    text: 'Which attribute is used to specify an image’s alternative text?',
    answers: [
      'alt',
      'title',
      'description',
      'tooltip',
    ],
  },
  {
    id: 'q99',
    text: 'Which tag is used to create a hyperlink?',
    answers: [
      '<a>',
      '<link>',
      '<href>',
      '<connect>',
    ],
  },
  {
    id: 'q100',
    text: 'Which HTML element is used to group header elements in a table?',
    answers: [
      '<thead>',
      '<head>',
      '<th>',
      '<table-header>',
    ],
  },
];

