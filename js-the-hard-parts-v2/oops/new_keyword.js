// Create a function PersonConstructor that uses the this keyword
// to save a single property onto its scope called greet.
// greet should be a function that logs the string 'hello'.

function PersonConstructor() {
  this.greet = function () {
    console.log('hello');
  };
}

/* Test 1 */
const john = new PersonConstructor();
john.greet();
// Log: hello

// =================================================================================== //

// Create a function personFromConstructor that takes as input a
// name and an age.When called, the function will create person objects
// using the new keyword.

function personFromConstructor(name, age) {
  let person = new PersonConstructor();
  person.name = name;
  person.age = age;

  return person;
}

/* Test 2 */
const mike = new personFromConstructor('Mike', 30);
console.log(mike.name, mike.age); // Log: Mike 30
mike.greet(); // Log: hello

// =================================================================================== //

// Without editing the code you've already written, add an introduce
// method to the PersonConstructor function that logs "Hi, my name is [name]".

PersonConstructor.prototype.introduce = function () {
  return `Hi, my name is ${this.name}`;
};

console.log(mike.introduce());
// Log: Hi, my name is Mike
