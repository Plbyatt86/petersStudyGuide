const data = [
  {
    id: 1,
    name: "John",
    details: {
      age: 30,
      address: {
        street: "123 Main St",
        city: "Anytown"
      }
    },
    hobbies: ["reading", "painting"],
    price: 10,
  },
  {
    id: 2,
    name: "Alice",
    details: {
      age: 25,
      address: {
        street: "456 Elm St",
        city: "Sometown"
      }
    },
    hobbies: ["hiking", "photography"],
    price: 10
  }
];

console.log(data[0].hobbies[1]);


let finalSum = 0;
for (let i = 0; i < data.length; i++) {
  finalSum += data[i].price;
}
