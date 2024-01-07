// function greet(name, callback) {
//   const greeting = `Hello, ${name}!`;
//   callback(greeting);
// }

// function displayGreeting(message) {
//   console.log(message);
// }

// // Using the greet function with a callback
// greet("Alice", displayGreeting);



// // Using the map function
// const numbers = [1, 2, 3, 4, 5];

// const doubledNumbers = numbers.map((number) => number * 2);

// console.log(doubledNumbers);

function customMap(array, callback) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }

  return result;
}

// Example usage of customMap
const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = customMap(function (num) {
  return num * num;
});

console.log(squaredNumbers);


// TODO: 
