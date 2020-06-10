"use strict";
exports.__esModule = true;
exports.Point = void 0;
var Point = /** @class */ (function () {
    // NOTE: defining the varialbes at the start is not necessary with a constructor
    // private x: number; //This prevents the x from being accessible outside of the object
    // y: number;
    //The ? makes it optional. If one parameter is option, all should be optional.
    //The _ is used to name the private fields to allow the getters and setters to use the camel case name
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
        // NOTE: if an access modifier (eg private) is used, the constructor initializes and assigns a value to that variable
        // this.x = x;
        // this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('x:', this._x, 'y:', this._y);
        //..draw something. It can access both x and y because they are defined in the same class
    };
    Point.prototype.getDistance = function (another) {
        //Needs to access a point aside from itself as an argument
    };
    Object.defineProperty(Point.prototype, "x", {
        //These property accessers (getters and setters) allow you to access these private values
        get: function () {
            //This gives access to a private property to the public
            return this._x;
        },
        set: function (value) {
            //This allows the public to set a private property
            if (value < 0)
                throw new Error('Value cannot be less than 0.');
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    return Point;
}());
exports.Point = Point;
