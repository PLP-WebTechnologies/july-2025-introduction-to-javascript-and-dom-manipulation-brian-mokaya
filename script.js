//Variables, Data Types, Conditionalsy
let name = "Brian";       // String variable
let age = 20;             // Number variable
let isStudent = true;     // Boolean variable

console.log("Name:", name, "Age:", age, "Student:", isStudent);

// Capture user input and check age with conditionals
document.getElementById("checkAgeBtn").addEventListener("click", function () {
  let userAge = parseInt(document.getElementById("ageInput").value);

  if (userAge >= 18) {
    document.getElementById("ageResult").textContent = "You are an adult ";
  } else {
    document.getElementById("ageResult").textContent = "You are a minor ";
  }
});

//Calculate total price
function calculateTotal(prices) {
  let sum = 0;
  for (let price of prices) {
    sum += price;
  }
  return sum;
}

// Format a string
function greetUser(userName) {
  return `Hello, ${userName}! Welcome back.`;
}

// Use functions
document.getElementById("totalBtn").addEventListener("click", function () {
  let prices = [10, 20, 30]; 
  let total = calculateTotal(prices);
  document.getElementById("totalResult").textContent =
    greetUser(name) + " Your total is $" + total;
});

// for loop countdown
for (let i = 5; i > 0; i--) {
  console.log("Countdown:", i);
}

// forEach loop
let foods = ["Pizza", "Burger", "Pasta", "Sushi"];

document.getElementById("listBtn").addEventListener("click", function () {
  let listElement = document.getElementById("foodList");
  listElement.innerHTML = ""; // clear list
  foods.forEach(function (food) {
    let li = document.createElement("li");
    li.textContent = food;
    listElement.appendChild(li);
  });
});

// Change text
document.querySelector("h1").textContent = "JavaScript in Action!";

//Toggle class (Dark Mode)
document.getElementById("toggleBtn").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

//Create and insert new element
let newPara = document.createElement("p");
newPara.textContent = "This paragraph was added using JavaScript!";
document.body.appendChild(newPara);
