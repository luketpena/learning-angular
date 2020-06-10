"use strict";
exports.__esModule = true;
var point_1 = require("./point");
//When defining an instance of a custom type, you must specifically allocate memory for it
//This down below is an object. An object is an instances of a class.
var point = new point_1.Point(1, 4);
var pointWithoutParameters = new point_1.Point(); //This is possible because of the ? in the constructor arguments
//We can use constructors instead of defining each variable one by one
// point.x = 1;
// point.y = 4;
point.draw(); //Methods in instances are accessed by point
//This lets you standardize objects that functions are expecting as arguments
var IntFunction = function (myVar) { };
/*
  The problem with interfaces is that it is not cohesive. Definition of a thing to be used in an object should be
  associated with that thing. That is what classes are used for.
*/
/*
//References the type Point as what it expects, to prevent it from accepting arguments that do not work
let someFunction = (point: Point) => {
  //do something
}

someFunction({x: 1, y: "hi"});
*/ 
