// import using require
let Shape = require("./shape");
class Circle extends Shape {
  constructor() {
    super();
    this.color = "blue";
  }
  calculateArea() {
    console.log("calculate");
  }
}

module.exports = Circle;

// declare class

// export class using module.exports