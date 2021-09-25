//  String Properties and method

let text = '  John adam  ';

let result = text.length;
console.log(result);

console.log(text.length);
console.log(text.toLowerCase());
console.log(text.toUpperCase());
console.log(text.charAt(2));
console.log(text.charAt(12));
console.log(text.charAt(text.length-1));
console.log(text.indexOf('d'));
console.log(text.indexOf('a'));
console.log(text);
console.log(text.trim());
console.log(text.startsWith('John'));
//  '  John adam  '  --> 'John adam' --> 'john adam'  --> true
console.log(text.trim().toLowerCase().startsWith('john'));
// 'John adam' -->> John 
//  --> hn 
console.log(text.slice(2,5));  // will not include index of 5


console.log(text.slice(-3));  // we get the end of the string