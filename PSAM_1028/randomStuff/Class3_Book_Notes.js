
// Chapter 3
// 
var myFruitArray = ["Apple","Banana","Coconut","Divine Fruit", "Earlobe Grapes", "Figs"]

//call it
myFruitArray

// call an "element" by it's next 
myFruitArray[2]


//  Write over
myFruitArray[0] = "Pinapple"

myFruitArray

// Add a Big Number
myFruitArray[10] = "Zookeyknee"
"Zookeyknee"

// See What happens
myFruitArray

myFruitArray[20]
undefined
myFruitArray

var myFruitArray = ["Apple","Banana","Coconut","Divine Fruit", "Earlobe Grapes", "Figs"]

undefined
myFruitArray[2]
"Coconut"

// Call Last Element In Array
var lastElementInArray =  myFruitArray[myFruitArray.length-1]
undefined
lastElementInArray
"Figs"

// 
// Not All Array Elements Need To Be of Same Type
// Let's nest and array into an array
undefined
var myNestArrayOfFruit = []
undefined
myNestArrayOfFruit
[]length: 0__proto__: Array(0)
myNestArrayOfFruit = ["","",""]
(3) ["", "", ""]
myNestArrayOfFruit = [["","",""],["","",""],["","","]]
VM379:1 Uncaught SyntaxError: Invalid or unexpected token
myNestArrayOfFruit = [["","",""],["","",""],["","",""]]
(3) [Array(3), Array(3), Array(3)]0: (3) ["", "", ""]1: (3) ["", "", ""]2: (3) ["", "", ""]length: 3__proto__: Array(0)
myNestArrayOfFruit = [["Apple","Red","Worm"],["Banana","Yellow","Bruise"],["Cucumber","Green","Freezer Burn"]]
(3) [Array(3), Array(3), Array(3)]
