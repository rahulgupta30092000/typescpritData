// class Greeter {
//   greeting: string;
 
//   constructor(message: string) {
//     this.greeting = message;
//   }
 
//   greet() {
//     return "Hello, " + this.greeting;
//   }
// }
// var k="David"
// let greeter = new Greeter(k);
// console.log(greeter.greet());




class  Animal {
 public  name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}
 
class Snake extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters) {
    console.log("Cobra");
    super.move(distanceInMeters);
  }
}
 
class Horse extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters) {
    console.log("Badal");
    super.move(distanceInMeters);
  }
}
 
let sam = new Snake("David the Python");
let tom: Animal = new Horse("Tommy the Palomino");
 
sam.move(10);
tom.move(34);

//priavte property

// class An {
//   private name: string;
 
//   constructor(theName: string) {
//     this.name = theName;
//   }
// }
//  new An("Cat").name;

//Protected

// class Person {
//   protected name: string;
//   protected constructor(theName: string) {
//     this.name = theName;
//   }
// }
 
// // Employee can extend Person
// class Employee extends Person {
//   private department: string;
 
//   constructor(name: string, department: string) {
//     super(name);
//     this.department = department;
//   }
 
//   public getElevatorPitch() {
//     return `Hello, my name is ${this.name} and I work in ${this.department}.`;
//   }
// }
 
// let howard = new Employee("Howard", "Sales");
// let john = new Person("John"); //this line show error because Person constructor is protected


//read_only

// class Octopus {
//   readonly name: string;
//   readonly numberOfLegs: number = 8;
 
//   constructor(theName: string) {
//     this.name = theName;
//   }
// }
 
// let dad = new Octopus("Man");
// dad.name = "is strong";
// dad.numberOfLegs = 6;

//Accessors(Getter and Setter)

const fullNameMaxLength = 10;
 
class Employee {
  private _fullName: string = "";
 
  get fullName(): string {
    return this._fullName;
  }
 
  set fullName(newName: string) {
    if (newName && newName.length > fullNameMaxLength) {
      throw new Error("fullName has a max length of " + fullNameMaxLength);
    }
 
    this._fullName = newName;
  }
}
 
let employee = new Employee();
employee.fullName = "Bob Smith"; //if wi take name length greater than 10 then it throw error "david lie warner"
 
if (employee.fullName) {
  console.log(employee.fullName);
}

//Abstract class

abstract class Department {

  constructor(public name: string) {}
 
  printName(): void {
    console.log("Department name: " + this.name);
  }
 
  abstract printMeeting(): void; // must be implemented in derived classes
  abstract generateReports(): void;
}
 
class AccountingDepartment extends Department {
  constructor() {
    super("Accounting and Auditing"); // constructors in derived classes must call super()
  }
 
  printMeeting(): void {
    console.log("The Accounting Department meets each Monday at 10am.");
  }
 
  generateReports(): void {
    console.log("Generating accounting reports...");
  }
}
 
let department: Department; // ok to create a reference to an abstract type
//department = new Department(); // error: cannot create an instance of an abstract class

department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
department.printName();
department.printMeeting();
department.generateReports(); // error: department is not of type AccountingDepartment, cannot access generateReports
