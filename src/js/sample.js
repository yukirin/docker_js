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
}

const rabbit = new Rabbit("White Rabbit", 10);
alert(rabbit.name);
alert(rabbit.earLength);
