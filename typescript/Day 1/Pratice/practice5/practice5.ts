// Named function
function add(x, y) {
    return x + y;
  }
   console.log(add(5,10))
  // Anonymous function
  let myAdd = function (x, y) {
    return x + y;
  };
  console.log(myAdd(5,10))


  function addSec(x: number, y: number): number {
    return x + y;
  }
  console.log(addSec(55,10))
   
  let myAddSec = function (x: number, y: number): number {
    return x + y;
  };
  console.log(myAddSec(55,10))





  let myAddthird: (x: number, y: number) => number = function (
    x: number,
    y: number
  ): number {
    return x + y;
  };
  console.log(myAddthird(55,100))


  let myAdded = function (x: number, y: number): number {
    return x + y;
  };
  console.log(myAdded(505,100))




  function buildName(firstName: string, lastName: string) {
    return firstName + " " + lastName;
  }
   
  //let result1 = buildName("Bob"); // error, because require 2 parameter and getting one
  
  //let result2 = buildName("Bob", "Adams", "Sr."); // error, because require 2 parameter and getting three
  
  let result = buildName("Bob", "Adams"); // ah, just right
  console.log(result)





  function NameBuilder(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
  }
   
  // employeeName will be "Joseph Samuel Lucas MacKinzie"
  let employeeName = NameBuilder("Joseph", "Samuel", "Lucas", "MacKinzie");
  console.log(employeeName)






  interface Card {
    suit: string;
    card: number;
  }
   
  interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card;
  }
   
  let deck: Deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    // NOTE: The function now explicitly specifies that its callee must be of type Deck
    createCardPicker: function (this: Deck) {
      return () => {
        let pickedCard = Math.floor(Math.random() * 52);
        let pickedSuit = Math.floor(pickedCard / 13);
   
        return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
      };
    },
  };
   
  let cardPicker = deck.createCardPicker();
  let pickedCard = cardPicker();
   
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);






let suits = ["hearts", "spades", "clubs", "diamonds"];
 
function pickCard(x: { suit: string; card: number }[]): number;
function pickCard(x: number): { suit: string; card: number };
function pickCard(x: any): any {
  // Check to see if we're working with an object/array
  // if so, they gave us the deck and we'll pick the card
  if (typeof x == "object") {
    let pickedCard = Math.floor(Math.random() * x.length);
    return pickedCard;
  }
  // Otherwise just let them pick the card
  else if (typeof x == "number") {
    let pickedSuit = Math.floor(x / 13);
    return { suit: suits[pickedSuit], card: x % 13 };
  }
}
 
let myDeck = [
  { suit: "diamonds", card: 2 },
  { suit: "spades", card: 10 },
  { suit: "hearts", card: 4 },
];
 
let pickedCard1 = myDeck[pickCard(myDeck)];
console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);
 
let pickedCard2 = pickCard(15);
console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);