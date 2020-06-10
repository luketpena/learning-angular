export class Point {
  // NOTE: defining the varialbes at the start is not necessary with a constructor
  // private x: number; //This prevents the x from being accessible outside of the object
  // y: number;
  //The ? makes it optional. If one parameter is option, all should be optional.
  //The _ is used to name the private fields to allow the getters and setters to use the camel case name
  constructor(private _x?: number, private _y?: number) {
    // NOTE: if an access modifier (eg private) is used, the constructor initializes and assigns a value to that variable
    // this.x = x;
    // this.y = y;
  }
  draw() {
    console.log('x:', this._x, 'y:', this._y);
    //..draw something. It can access both x and y because they are defined in the same class
  }
  getDistance(another: Point) {
    //Needs to access a point aside from itself as an argument
  }
  //These property accessers (getters and setters) allow you to access these private values
  get x() {
    //This gives access to a private property to the public
    return this._x;
  }
  set x(value: number) {
    //This allows the public to set a private property
    if (value<0) throw new Error('Value cannot be less than 0.');
    this._x = value;
  }
}