// We want to create an example for destructing in javascript

let myArray = [
  "Philippines",
  "Japan",
  "Korea",
  "China",
  "Taiwans",
  "Greece",
  "Austria",
  "Switzerland"
];

// Destructuring an array
// Order matters when destructuing an array

// let [country1, x] = myArray;
// let [country1, , country3, country4] = myArray;

// The Long Way
// console.log(myArray[3]);

let person = {
  name: "Alice",
  age: 25,
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "Anystate",
    zip: 12345
  }
};

// Destructuring an object

// THE LONG WAY
// console.log(person.name);
// console.log(person.address.city);

let { name } = person;

// console.log(name);

let { address: { city } } = person;

console.log(city);
