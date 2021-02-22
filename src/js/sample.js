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
  }

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
    alert(this === Rabbit);
  }
}

const rabbit = new Rabbit("White Rabbit", 10);
alert(rabbit.name);
alert(rabbit.earLength);
Rabbit.staticMethod();
