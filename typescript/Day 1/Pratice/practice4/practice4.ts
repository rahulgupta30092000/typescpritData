enum UserResponse {
    No = 0,
    Yes = 1,
  }
   
  function respond(recipient: string, message: UserResponse): void {
 console.log(recipient+" "+message)
  }
   
  respond("Princess Caroline", UserResponse.No);



  enum FileAccess {
    // constant members
    None,
    Read = 1 << 1,
    Write = 1 << 2,
    ReadWrite = Read | Write,
    // computed member
    G = "123".length,
  }
  console.log(FileAccess.None+" "+FileAccess.Read+" "+FileAccess.Write+" "+FileAccess.ReadWrite+" "+FileAccess.G+" ")



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


enum E {
    X,
    Y,
    Z,
  }
   
  function f(obj: { Y: number }) {
    return obj.Y;
  }
   
  
  console.log(f(E));



  const enum Direction {
    Up,
    Down,
    Left,
    Right,
  }
   
  let directions = [
    Direction.Up,
    Direction.Down,
    Direction.Left,
    Direction.Right,
  ];
  console.log(directions);
  console.log(directions[Direction.Up]);