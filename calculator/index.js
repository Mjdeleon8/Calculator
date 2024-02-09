// let button = document.querySelectorAll(".style");
// let firstLetter = document.getElementsByClassName(".style ");
// let seven = document.getElementsByClassName(".seven");
// let four = document.getElementsByClassName(".four");
// let one = document.getElementsByClassName(".one");
// let twoZero = document.getElementsByClassName(".twozero");
// let percentage = document.getElementsByClassName(".percentage");
// let eight = document.getElementsByClassName(".eight");
// let five = document.getElementsByClassName(".five");
// let two = document.getElementsByClassName(".two");
// let zero = document.getElementsByClassName(".zero");
// let ekIs = document.getElementsByClassName(".ekIs");
// let nine = document.getElementsByClassName(".nine");
// let six = document.getElementsByClassName(".six");
// let three = document.getElementsByClassName(".three");
// let dot = document.getElementsByClassName(".dot");
// let divide = document.getElementsByClassName(".divide");
// let times = document.getElementsByClassName(".times");
// let minus = document.getElementsByClassName(".minus");
// let plus = document.getElementsByClassName(".plus");
// let equal = document.getElementsByClassName(".equal");

// for (let i = 0; i < button.length; i++) {
//   button[i].addEventListener("click", function () {
//     console.log("hello");
//   });
// }

// firstLetter.addEventListener("click", () => {
//   console.log("hello");
// }
// const allButtons = document.querySelectorAll("elements");

// allButtons.forEach("click", () => {
//   console.log("hello");
// });

let show = document.getElementById("display");

function calculatorFunction(input) {
  show.value += input;
}

function displayClear() {
  show.value = "";
}

function calculateFunction() {
  try {
    show.value = eval(show.value);
  } catch (error) {
    show.value = "Error";
  }
}
