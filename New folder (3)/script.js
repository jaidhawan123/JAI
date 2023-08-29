 // String methods
 let str = "Hello, World!";
 console.log("Length: " + str.length);
 console.log("Uppercase: " + str.toUpperCase());
 console.log("Substring: " + str.substring(0, 5));
 console.log("Index of 'World': " + str.indexOf("World"));
 console.log("Replace: " + str.replace("Hello", "Hi"));

 // Number methods
 let num = 42.5678;
 console.log("Fixed: " + num.toFixed(2));
 console.log("Exponential: " + num.toExponential(2));
 console.log("Precision: " + num.toPrecision(4));
 console.log("Square root: " + Math.sqrt(num));
 console.log("Rounded: " + Math.round(num));

 // Array methods
 let arr = [1, 2, 3, 4, 5];
 console.log("Join: " + arr.join(", "));
 console.log("Reverse: " + arr.reverse());
 console.log("Pop: " + arr.pop());
 console.log("Push: " + arr.push(6));
 console.log("Slice: " + arr.slice(1, 4));

 // Date methods
 let now = new Date();
 console.log("Current date: " + now);
 console.log("Day of week: " + now.getDay());
 console.log("Full year: " + now.getFullYear());
 console.log("Milliseconds since 1970: " + now.getTime());
 console.log("Locale date string: " + now.toLocaleDateString());

 // Function methods
 function greet(name) {
   console.log("Hello, " + name + "!");
 }
 greet("Alice");

 let multiply = function(a, b) {
   return a * b;
 };
 console.log("Multiplication: " + multiply(5, 3));