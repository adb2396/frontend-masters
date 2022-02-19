class Dog {
  constructor() {
    this.legs = 4;
  }
  speak() {
    console.log('Woof!');
  }
}

const robotMixin = {
  skin: 'metal',
  speak: function () {
    console.log(`I have ${this.legs} legs and am made of ${this.skin}`);
  },
};

// =================================================================================== //

// Mixins are a tool in object-oriented programming that allows objects
// to be given methods and properties beyond those provided by their inheritance.
// Give all of the robotMixin properties to robotFido, without adding the properties individually.

let robotFido = new Dog();

robotFido = Object.assign(robotFido, robotMixin);

/* Test 1 */
robotFido.speak(); // Log: I have 4 legs and am made of metal
