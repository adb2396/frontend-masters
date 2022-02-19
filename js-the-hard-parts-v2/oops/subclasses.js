const userFunctionStore = {
  sayType: function () {
    console.log('I am a ' + this.type);
  },
};

function userFactory(name, score) {
  let user = Object.create(userFunctionStore);
  user.type = 'User';
  user.name = name;
  user.score = score;
  return user;
}

// Create an object adminFunctionStore that has access to all
// methods in the userFunctionStore object, without copying them over individually.

const adminFunctionStore = Object.create(userFunctionStore);

// =================================================================================== //

// Create an adminFactory function that creates an object with
// all the same data fields(and default values) as objects of
// the userFactory class, but without copying each data field individually.
// Then make sure the value of the 'type' field for adminFactory objects is 'Admin' instead of 'User'.
// Make sure that adminFactory objects have access to adminFunctionStore methods, without copying them over.

function adminFactory(name, score) {
  let admin = userFactory(name, score);
  Object.setPrototypeOf(admin, adminFunctionStore);

  admin.type = 'Admin';

  return admin;
}

/* Test 1 */
const john = adminFactory('John', 22);
console.log(john.name, john.score); // Log: John 22
console.log(john.type); // Log: admin
john.sayType(); // I am a Admin

/* Test 2 */
adminFunctionStore.sayName = function () {
  console.log(`My name is ${this.name}`);
};

const user = userFactory('Barney', 43);
// user.sayName(); // TypeError: user.sayName is not a function
user.sayType(); // I am a User
john.sayName(); // My name is John

// =================================================================================== //

// Created a method called sharePublicMessage that logs 'Welcome users!'
// and will be available to adminFactory objects, but not userFactory
// objects. Do not add this method directly in the adminFactory function.

adminFunctionStore.sharePublicMessage = function () {
  console.log(`Welcome users!`);
};

/* Test */
john.sharePublicMessage();
// Log: Welcome users!
