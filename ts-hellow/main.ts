import {Point} from './point';

//When defining an instance of a custom type, you must specifically allocate memory for it
//This down below is an object. An object is an instances of a class.
let point = new Point(1,4);
let pointWithoutParameters = new Point(); //This is possible because of the ? in the constructor arguments
//We can use constructors instead of defining each variable one by one
// point.x = 1;
// point.y = 4;
point.draw(); //Methods in instances are accessed by point

// let value: number[] = [1,2,3,4];

// //Enums automatically asign values of 0, 1, 2, etc to the values assigned to it 
// enum color {red,blue,green};
// let backgroundColor = color.blue;
// //Can be safer to assign values explicitely to avoid issues when expanding it
// enum color2 {red=0, blue=1, green=2};

// //This assigns a type to it when defined
// let value1 = 5; 
// //When no value is assigned, type is 'any' and behaves like a variable in JS
// let value2;
// value2 = 2;
// value2 = true;
// value2 = 'through';
// //To define the type of a variable when value is not know, specify in the definition
// let value3: number;
// value3 = 4;
// //value3 = 'for'; //throws error
// //Defining an typed array
// let arrayOfNumbers: number[] = [1,2,3];

// let message;
// message = 'abc';
// //These are to assert the type of the variable before accessing when type is 'any'. It does not change the type of that variable in memory.
// let findValue = (<string>message).endsWith('c');
// let findValueAlt = (message as string).endsWith('c');

/*
  Classes give you the opportunity to associate variables and functions together under one roof.
  
  Functions in a class are called METHODS.
  Variables in a class are called PROPERTIES.

  All properties are exposed and accessible by any method in the class.
*/




/*-----< INTERFACES >-----*/
interface MyInterface {
  x: number,
  y: number,
}

//This lets you standardize objects that functions are expecting as arguments
let IntFunction = (myVar: MyInterface) => {}

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