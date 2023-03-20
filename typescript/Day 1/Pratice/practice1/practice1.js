//Boolean
var x = false;
console.log(x);
//Number
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
console.log(decimal);
console.log(hex);
console.log(binary);
console.log(octal);
//String 
var color = "pink";
color = 'yellow';
console.log(color);
var fullName = "David warner";
var age = 40;
var sentence = "Hello, my name is ".concat(fullName, ".I'll be ").concat(age + 1, " years old next month.");
console.log(sentence);
//Array
var arr = [1, 2, 3, 4, 5, 10];
var arr1 = [1, 2, 3, 2, 4, 6];
console.log(arr);
console.log(arr1);
//Tuple
var y;
y = ["hello-world", 100];
//y= [100",hello-world"]; 
console.log(y);
// console.log(x[0].substring(1));
// console.log(x[1].substring(1));
//Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var colorName = Color[2]; //it give color name
console.log(colorName);
(function (Color) {
    Color[Color["Purple"] = 1] = "Purple";
    Color[Color["Pink"] = 2] = "Pink";
    Color[Color["Yellow"] = 4] = "Yellow";
})(Color || (Color = {}));
var c = Color.Yellow; //Its give value
console.log(c);
//Unknown
var notSure = 4;
notSure = "maybe a string instead";
notSure = false;
console.log(notSure);
//Any
function mydata(x, y) {
    return x + y;
}
var result;
result = mydata("Hello", "world");
console.log(result);
result = mydata(2, 3);
console.log(result);
//Void
function hello() {
    console.log("this is void method ");
}
hello();
//Never
// Function returning never must not have a reachable end point
function error(message) {
    throw new Error(message);
}
// Inferred return type is never
function fail() {
    return error("Something failed");
}
// Function returning never must not have a reachable end point
function infiniteLoop() {
    while (true) {
        console.log(true);
    }
}
//Object
//   declare function create(o: object | null): void;
// create({ prop: 0 });
// create(null);
// create(undefined); 
// create(42);
// create("string");
// create(false);                
//type assertion
var someValue = "this is a string";
var strLength = someValue.length;
console.log(someValue);
console.log(strLength);
