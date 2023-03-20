// Named function
function add(x, y) {
    return x + y;
}
console.log(add(5, 10));
// Anonymous function
var myAdd = function (x, y) {
    return x + y;
};
console.log(myAdd(5, 10));
function addSec(x, y) {
    return x + y;
}
console.log(addSec(55, 10));
var myAddSec = function (x, y) {
    return x + y;
};
console.log(myAddSec(55, 10));
var myAddthird = function (x, y) {
    return x + y;
};
console.log(myAddthird(55, 100));
var myAdded = function (x, y) {
    return x + y;
};
console.log(myAdded(505, 100));
function buildName(firstName, lastName) {
    return firstName + " " + lastName;
}
//let result1 = buildName("Bob"); // error, because require 2 parameter and getting one
//let result2 = buildName("Bob", "Adams", "Sr."); // error, because require 2 parameter and getting three
var result = buildName("Bob", "Adams"); // ah, just right
console.log(result);
function NameBuilder(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
// employeeName will be "Joseph Samuel Lucas MacKinzie"
var employeeName = NameBuilder("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employeeName);
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    // NOTE: The function now explicitly specifies that its callee must be of type Deck
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    },
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
var suits = ["hearts", "spades", "clubs", "diamonds"];
function pickCard(x) {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        var pickedCard_1 = Math.floor(Math.random() * x.length);
        return pickedCard_1;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        var pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
var myDeck = [
    { suit: "diamonds", card: 2 },
    { suit: "spades", card: 10 },
    { suit: "hearts", card: 4 },
];
var pickedCard1 = myDeck[pickCard(myDeck)];
console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);
var pickedCard2 = pickCard(15);
console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);
