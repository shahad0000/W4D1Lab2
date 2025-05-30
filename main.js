// Challenge 1
let connectionType = "dsl";
let speed = 200;

if (speed < 0) {
  console.log("Invalid speed value");
} else {
  if (connectionType === "fiber") {
    if (speed >= 500) {
      console.log("Excellent fiber connection");
    } else if (200 <= speed && speed <= 499) {
      console.log("Good fiber connection");
    } else {
      console.log("Weak fiber connection");
    }
  } else if (connectionType === "dsl") {
    if (speed >= 50) {
      console.log("Acceptable DSL connection");
    } else {
      console.log("Poor DSL connectiom");
    }
  } else {
    console.log("Unknown connection");
  }
}

// Challenge 2
let grade = 60;
if (90 <= grade && grade <= 100) {
  console.log("A");
} else if (80 <= grade && grade <= 89) {
  console.log("B");
} else if (70 <= grade && grade <= 79) {
  console.log("C");
} else if (60 <= grade && grade <= 69) {
  console.log("D");
} else {
  console.log("F");
}

// Challenge 3
let dish = "pizza";
let size = "large";
let extraCheese = true;

if (dish === "pizza" && size === "large" && extraCheese === true) {
  console.log("Large pizza with extra cheese is ready");
} else if (size !== "large") {
  console.log("Custom pizza size selected");
} else if (dish === "pizza" && size === "large" && extraCheese === false) {
  console.log("Pizza without extra cheese");
} else if (dish !== "pizza") {
  console.log("Not a pizza");
}

// Challenge 4
let eatsPlants = false;
let eatsAnimals = true;

let result =
  eatsPlants && !eatsAnimals
    ? "herbivore"
    : eatsAnimals && !eatsPlants
    ? "carnivore"
    : eatsAnimals && eatsPlants
    ? "omnivore"
    : "undefined";

console.log(result);
