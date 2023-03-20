//Boolean
let x: boolean = false;
console.log(x)


//Number

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
console.log(decimal)
console.log(hex)
console.log(binary)
console.log(octal)

//String 

let color: string = "pink";
 color = 'yellow';
console.log(color);

let fullName: string = `David warner`;
let age: number = 40;
let sentence: string = `Hello, my name is ${fullName}.I'll be ${age + 1} years old next month.`;
console.log(sentence)



//Array

let arr: number[] = [1, 2, 3,4,5,10];
let arr1: Array<number> = [1, 2, 3,2,4,6];
console.log(arr);
console.log(arr1);

//Tuple


let y: [string, number];

y = ["hello-world", 100]; 
//y= [100",hello-world"]; 
console.log(y)
// console.log(x[0].substring(1));
// console.log(x[1].substring(1));


//Enum

enum Color {
    Red = 1,
    Green,
    Blue,
  }
  let colorName: string = Color[2]; //it give color name
   
 
  console.log(colorName);

  enum Color {
   Purple= 1,
    Pink = 2,
    Yellow = 4,
  }
  let c: Color = Color.Yellow; //Its give value
  console.log(c);


  //Unknown

  let notSure: unknown = 4;
  notSure = "maybe a string instead";
  notSure = false;
  console.log(notSure);

  //Any

function mydata(x:any ,y:any){
  return x+y;
}
let result:any;
result=mydata("Hello","world");
console.log(result);
result=mydata(2,3)
console.log(result)


//Void

function hello():void{
  console.log("this is void method ")
}
hello()

//Never

// Function returning never must not have a reachable end point
function error(message: string): never {
    throw new Error(message);
   
  }
   
  // Inferred return type is never
  function fail() {
    return error("Something failed");
  }
   
  // Function returning never must not have a reachable end point
  function infiniteLoop(): never {
    while (true) {
        console.log(true)
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

let someValue: unknown = "this is a string";
 
let strLength: number = (someValue as string).length;

console.log(someValue);
console.log(strLength);

























































