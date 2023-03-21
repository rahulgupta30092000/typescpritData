function printLabel(labeledObj: { label: string }) {
    console.log(labeledObj.label);
  }
   
  let myObj = { size: 10, label: "Size 10 Object" };
  printLabel(myObj);



  interface LabeledValue {
    label: string;
  }
   
  function printtext(labeledObj: LabeledValue) {
    console.log(labeledObj.label);
  }
   
  let Obj = { size: 10, label: "Size of  10 Object" };
  printtext(Obj);



  interface SquareConfig {
    color?: string;
    width?: number;
  }
   
  function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
      newSquare.color = config.color;
    }
    if (config.width) {
      newSquare.area = config.width * config.width;
    }
    return newSquare;
  }
   
  let mySquare = createSquare({ color: "black" });
  console.log(mySquare)


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


let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
 
a = ro as number[];
console.log(a)


// interface SearchFunc {
//     (source: string, subString: string): boolean;
//   }
// let mySearch: SearchFunc;
 
// mySearch = function (src: string, sub: string): boolean {
//   let result = src.search(sub);
//   return result > -1;
// };
// console.log(mySearch())

interface StringArray {
    [index: number]: string;
  }
   
  let myArray: StringArray;
  myArray = ["David", "Freedy"];
   
  let myStr: string = myArray[1];
  console.log(myStr)




//   interface ClockConstructor {
//     new (hour: number, minute: number): ClockInterface;
//   }
   
//   interface ClockInterface {
//     tick(): void;
//   }
   
//   function createClock(
//     ctor: ClockConstructor,
//     hour: number,
//     minute: number
//   ): ClockInterface {
//     return new ctor(hour, minute);
//   }
   
//   class DigitalClock implements ClockInterface {
//     constructor(h: number, m: number) {}
//     tick() {
//       console.log("beep beep");
//     }
//   }
   
//   class AnalogClock implements ClockInterface {
//     constructor(h: number, m: number) {}
//     tick() {
//       console.log("tick tock");
//     }
//   }
   
//   let digital = createClock(DigitalClock, 0, 0);
//   let analog = createClock(AnalogClock, 0, 0);



interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
  }
  
  interface ClockInterface {
    tick(): void;
  }
  
  const Clock: ClockConstructor = class Clock implements ClockInterface {
    constructor(h: number, m: number) {}
    tick() {
      console.log("beep beep");
    }
  };
  
  let clock = new Clock(12, 17);
  clock.tick();




  interface Shape {
    color: string;
  }
   
  interface PenStroke {
    penWidth: number;
  }
   
  interface Square extends Shape, PenStroke {
    sideLength: number;

  }
   
  let square = {} as Square;
  square.color = "blue";
  square.sideLength = 10;
  square.penWidth = 5.0;





//   class Control {
//     private state: any;
//   }
   
//   interface SelectableControl extends Control {
//     select(): void;
//   }
   
//   class Button extends Control implements SelectableControl {
//     select() {}
//   }
   
//   class TextBox extends Control {
//     select() {}
//   }
   
//   class ImageControl implements SelectableControl {
//     private state: any;
//     select() {}
//   }