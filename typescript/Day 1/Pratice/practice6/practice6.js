function printLabel(labeledObj) {
    console.log(labeledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
function printtext(labeledObj) {
    console.log(labeledObj.label);
}
var Obj = { size: 10, label: "Size of  10 Object" };
printtext(Obj);
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
console.log(mySquare);
//   interface SquareConfig {
//     color?: string;
//     width?: number;
//   }
//   function cSquare(config: SquareConfig): { color: string; area: number } {
//     let newSquare = { color: "white", area: 100 };
//     if (config.clor) {
//   //Property 'clor' does not exist on type 'SquareConfig'. Did you mean 'color'?
//       // Error: Property 'clor' does not exist on type 'SquareConfig'
//       newSquare.color = config.clor;
//   //Property 'clor' does not exist on type 'SquareConfig'. Did you mean 'color'?
//     }
//     if (config.width) {
//       newSquare.area = config.width * config.width;
//     }
//     return newSquare;
//   }
//   let Square = cSquare({ color: "black" });
//   console.log(Square)
// let a: number[] = [1, 2, 3, 4];
// let ro: ReadonlyArray<number> = a;
// //ro[0] = 12; // error!
// ro.push(5); // error!
// ro.length = 100; // error!
// a = ro; // error!
var a = [1, 2, 3, 4];
var ro = a;
a = ro;
console.log(a);
var myArray;
myArray = ["David", "Freedy"];
var myStr = myArray[1];
console.log(myStr);
var Clock = /** @class */ (function () {
    function Clock(h, m) {
    }
    Clock.prototype.tick = function () {
        console.log("beep beep");
    };
    return Clock;
}());
var clock = new Clock(12, 17);
clock.tick();
