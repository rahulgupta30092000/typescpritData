// class Greeter {
//   greeting: string;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log("".concat(this.name, " moved ").concat(distanceInMeters, "m."));
    };
    return Animal;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distanceInMeters) {
        console.log("Cobra");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Snake;
}(Animal));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distanceInMeters) {
        console.log("Badal");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Horse;
}(Animal));
var sam = new Snake("David the Python");
var tom = new Horse("Tommy the Palomino");
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
var fullNameMaxLength = 10;
var Employee = /** @class */ (function () {
    function Employee() {
        this._fullName = "";
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (newName && newName.length > fullNameMaxLength) {
                throw new Error("fullName has a max length of " + fullNameMaxLength);
            }
            this._fullName = newName;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var employee = new Employee();
employee.fullName = "Bob Smith"; //if wi take name length greater than 10 then it throw error "david lie warner"
if (employee.fullName) {
    console.log(employee.fullName);
}
//Abstract class
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log("Department name: " + this.name);
    };
    return Department;
}());
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, "Accounting and Auditing") || this;
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log("The Accounting Department meets each Monday at 10am.");
    };
    AccountingDepartment.prototype.generateReports = function () {
        console.log("Generating accounting reports...");
    };
    return AccountingDepartment;
}(Department));
var department; // ok to create a reference to an abstract type
//department = new Department(); // error: cannot create an instance of an abstract class
department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
department.printName();
department.printMeeting();
department.generateReports(); // error: department is not of type AccountingDepartment, cannot access generateReports
