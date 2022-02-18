// Create a object literal personStore, inside personStore object, 
// create a property greet where the value is a function that returns "hello".

const personStore = {
	greet: function() {
    return 'hello';
  }
};

/* Test 1 */
console.log("Test 1,", personStore.greet());
// Log: Test 1, 'hello'

// =================================================================================== //

// Create a function personFromPersonStore that takes as input a name and an age. 
// When called, the function will create person objects using the Object.
// create method on the personStore object.

function personFromPersonStore(name, age) {
	let person = Object.create(personStore);
  
  person.name = name;
  person.age = age;
  
  return person;
}

const sandra = personFromPersonStore('Sandra', 26);

/* Test 2 */
console.log("Test 2,", sandra.name, sandra.age, sandra.greet()); // greet is a inherited property from personStore //
// Log: Test 2, Sandra 26 hello

// =================================================================================== //

// Without editing the code you've already written, add an introduce 
// method to the personStore object that returns "Hi, my name is [name]".

personStore.introduce = function () {
  return `Hi, my name is ${this.name}`;
}

/* Test 3 */
console.log("Test 3,", sandra.introduce());     // explicit binding with sandra object, 'this' points to obj sandra
// Log: Test 3, Hi, my name is Sandra       