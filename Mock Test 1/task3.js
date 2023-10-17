// Create a function that creates an array with 12 random numbers between 60 (min) and 200(max).
const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

function RandomNumbers() {
  let randomNumbers = [];
  let min = 60;
  let max = 200;

  for (let i = 0; i < 12; i++) {
    const randomNumber = random(min, max);
    randomNumbers.push(randomNumber);
  }

  console.log(randomNumbers);
}

const randomNumbersArray = RandomNumbers();
console.log("Random Numbers Array:", randomNumbersArray);