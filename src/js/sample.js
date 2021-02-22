/**
 * Animal Class
 *
 * @class Animal
 */
class Animal {
  /**
   * Creates an instance of Animal.
   * @param {String} name
   * @memberof Animal
   */
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
}

/**
 * Rabbit Class
 *
 * @class Rabbit
 * @extends {Animal}
 */
class Rabbit extends Animal {
  /**
   * Creates an instance of Rabbit.
   * @param {String} name
   * @param {Number} earLength
   * @memberof Rabbit
   */
  constructor(name, earLength) {
    super(name);
    this.earLength = earLength;
    this.#pValue = 50;
  }

  /**
   * private value
   *
   * @memberof Rabbit
   */
  #pValue = 20;
  /**
   * Static Property
   *
   * @static
   * @memberof Rabbit
   */
  static publisher = "aiueo";
  /**
   * Static Method
   *
   * @static
   * @memberof Rabbit
   */
  static staticMethod() {
    console.log(this === Rabbit);
  }
}

const rabbit = new Rabbit("White Rabbit", 10);
console.log(`name = ${rabbit.name}, earLength = ${rabbit.earLength}`);
Rabbit.staticMethod();

const promise = new Promise((res, rej) => {
  res(1);
});

promise
  .then((result) => {
    console.log(result);
    return result * 2;
  })
  .catch((err) => console.log(er))
  .then((result) => {
    console.log(result);
    return result * 2;
  })
  .finally(() => console.log("final"));
