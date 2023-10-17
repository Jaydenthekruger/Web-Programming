//a)
let arrFruits = ["Apple", "Grape","Pear"]
let arrVegetable = ["Carrots", "Beets","Potatoes"]

//b)
console.log("The length of the vegetable array: " + arrFruits.length);

//c)
let food = arrFruits.concat(arrVegetable);
console.log("Food: ", food);

//d)
food.pop(2);
console.log("Food remove only the last 2 element: ", food);

//e)
food.reverse();
console.log("Food reverse: ", food);

//f)
food.shift(2);
console.log("Food remove only the first element: ",food);