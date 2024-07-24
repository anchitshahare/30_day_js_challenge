// task 1: template literal with name and age as variables
const name = "Anchit";
const age = 31;
console.log(`Hello ${name}, your age is ${age}`);

// task 2: multi-line string
console.log(`This
    is
    a
    multi-
    line
    string`);

// task 3: array destructuring
const arr = [1, 2, 3];
const [first, second] = arr;
console.log(`First: ${first}, Second: ${second}`);

// task 4: object destructuring
const book = {
  author: "Brandon Sanderson",
  title: "Mistborn",
};
const { author, title } = book;
console.log(`Author: ${author}, Title: ${title}`);

// task 5: spread operator
const newArr = [...arr, 4, 5];
console.log("Old Array: ", arr);
console.log("New Array: ", newArr);

// task 6: rest operator
function sum(...numbers) {
  return numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
}

console.log("Sum: ", sum(1, 2, 3));

// task 7: default parameter
function prod(a, b = 1) {
  return a * b;
}

console.log("With second parameter: ", prod(2, 3));
console.log("Without second parameter: ", prod(2));

// task 8: enhanced object literals
const dog = {
  name: "Trevor",
  age: 7,
  bark() {
    console.log("Woof Woof!");
  },
};

console.log(`Name: ${dog.name}, Age: ${dog.age}`);
dog.bark();

// task 9: computed property in an object
const prop1 = "name";
const prop2 = "age";

const person = {
  [prop1]: "Prachi",
  [prop2]: 31,
};

console.log(`Person's Name: ${person.name}, Person's Age: ${person.age}`);
