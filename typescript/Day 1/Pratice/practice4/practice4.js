var UserResponse;
(function (UserResponse) {
    UserResponse[UserResponse["No"] = 0] = "No";
    UserResponse[UserResponse["Yes"] = 1] = "Yes";
})(UserResponse || (UserResponse = {}));
function respond(recipient, message) {
    console.log(recipient + " " + message);
}
respond("Princess Caroline", UserResponse.No);
var FileAccess;
(function (FileAccess) {
    // constant members
    FileAccess[FileAccess["None"] = 0] = "None";
    FileAccess[FileAccess["Read"] = 2] = "Read";
    FileAccess[FileAccess["Write"] = 4] = "Write";
    FileAccess[FileAccess["ReadWrite"] = 6] = "ReadWrite";
    // computed member
    FileAccess[FileAccess["G"] = "123".length] = "G";
})(FileAccess || (FileAccess = {}));
console.log(FileAccess.None + " " + FileAccess.Read + " " + FileAccess.Write + " " + FileAccess.ReadWrite + " " + FileAccess.G + " ");
//   enum ShapeKind {
//     Circle=90,
//     Square,
//   }
//   interface Circle {
//     kind: ShapeKind.Circle;
//     radius: number;
//   }
//   interface Square {
//     kind: ShapeKind.Square;
//     sideLength: number;
//   }
//   let c: Circle = {
//     kind: ShapeKind.Square,
//     radius: 100,
//   };
var E;
(function (E) {
    E[E["X"] = 0] = "X";
    E[E["Y"] = 1] = "Y";
    E[E["Z"] = 2] = "Z";
})(E || (E = {}));
function f(obj) {
    return obj.Y;
}
console.log(f(E));
var directions = [
    0 /* Direction.Up */,
    1 /* Direction.Down */,
    2 /* Direction.Left */,
    3 /* Direction.Right */,
];
console.log(directions);
console.log(directions[0 /* Direction.Up */]);
