let fruits = ['apple', 'banana'];
console.log(fruits.length);

// 2D array
let array = [
    [1, 2, 3],
    [3, 4, 4],
];

console.log(array.length);
console.log(array[0].length);


Common Operations:

Loop over an Array:
fruits.forEach( (item, index) => {console.log(item, index})
                                  
Add an item to the end of an Array:
fruit.push('Orange')
                                  
push()
pop()

remove an item from the beginning of an Array:
fruits.shift()
                                  
Add an item to the beginning of an Array:
fruits.unshift('strawberry')
                                  
                                  
find the index of an item in the Array:
fruits.indexOf('Banana')
                                  
remove items by index position:
fruits.splice(pos,1) // this is how to remove an item
let vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot']
console.log(vegetables)
// ["Cabbage", "Turnip", "Radish", "Carrot"]

let pos = 1
let n = 2

let removedItems = vegetables.splice(pos, n)
// this is how to remove items, n defines the number of items to be removed,
// starting at the index position specified by pos and progressing toward the end of array.

console.log(vegetables)
// ["Cabbage", "Carrot"] (the original array is changed)

console.log(removedItems)
// ["Turnip", "Radish"]
                                  
                                  
Copy an array:                                  
let shallowCopy = fruits.slice() // this is how to make a copy
// ["Strawberry", "Mango"]        





