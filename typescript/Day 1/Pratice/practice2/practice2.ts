function padLeft(value: string, padding: any) {
    if (typeof padding === "number") {
      return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
      return padding + value;
    }
    throw new Error(`Expected string or number, got '${typeof padding}'.`);
  }
   
  console.log(padLeft("Hello world", 40)); 
  console.log(padLeft("Hello world", "hello")); 




  interface Bird {
    fly(): void;
    layEggs(): void;
  }
   
  interface Fish {
    swim(): void;
    layEggs(): void;
  }
   
  declare function getSmallPet(): Fish | Bird;
   
  var pet = getSmallPet();
  console.log(pet.layEggs());
   
  // Only available in one of the two possible types
//   pet.swim();