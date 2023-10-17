//a) Add a new element at the start of the array. Do not use any inbuilt array methods (exceptfor the .length property.
let arr = [3, 67, 2, 12, 9];
let newValue = 99;

let newArray = [newValue];

for (let i = 0; i < arr.length; i++) {
  newArray.push(arr[i]);
}

console.log(newArray); 

//b) Sort the array in ascending order. Do not use the sort method. Ascending order means thatafter sorting, the array should look like [2,3,9,12,67]
function Ascending(arr) {
  let y = arr.length;
  let swap;

  do {
    swap = false;

    for (let i = 0; i < y - 1; i++) {
      if (arr[i] > arr[i + 1]) {

        let sort = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = sort;

        swap = true;
      }
    }
  } while (swap);
}

Ascending(arr);
console.log(arr); 


//c) Find the highest value in the array.
let max = arr[0]; 
arr.forEach(function(num) {
  if (num > max) {
    max = num;
  }
});

console.log("The highest value in the array is:", max);

