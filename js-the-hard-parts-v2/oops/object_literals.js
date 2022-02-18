/* 
  Create a function that has two parameters (name and age) and returns an object. 
  Let's call this function makePerson. This function will:
  
  1. Create an empty object
  2. Add a name property to the newly created object with its value being the 'name' argument passed into the function
  3. Add an age property to the newly created object with its value being the 'age' argument passed into the function
  4. Return the object
*/

function makePerson(name, age) {
  let obj = {};
  obj.name = name;
  obj.age = age;

  return obj;
}

const vicky = makePerson('Vicky', 24);

/* Test 1 */
console.log(vicky.name); // Log: 'Vicky'
console.log(vicky.age); // Log; 24
