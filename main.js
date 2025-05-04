
// Challenge 1
let connectionType = "fiber";
let speed = 500;

if (speed < 0) {
    console.log("Invalid speed value")
} else {
    if (connectionType === "fiber") {
        if (speed >= 500) {
            console.log("Excellent fiber connection");
        }
        else if (200 <= speed && speed <= 499) {
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
let grade = 92;
if (90 <= grade <= 100) {
    console.log("A");
} else if (80 <= grade <= 89) {
    console.log("B");
} else if (70 <= grade <= 79) {
    console.log("C");
} else if (60 <= grade <= 69) {
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
} else if (dish === "pizza" && size !== "large" && extraCheese === true) {
    console.log("Custom pizza size selected");
} else if (dish === "pizza" && size === "large" && extraCheese === false) {
    console.log("Pizza without extra cheese");
} else if (dish !== "pizza" ) {
    console.log("Not a pizza");
}

