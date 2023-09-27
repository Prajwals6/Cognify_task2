// Color Changing Button
const colorButton = document.getElementById("colorButton");
colorButton.addEventListener("click", () => {
    const randomColor = "#" + ((1 << 24) * Math.random() | 0).toString(16);
    colorButton.style.backgroundColor = randomColor;
});

// Greeting Message
const currentTime = new Date();
const currentHour = currentTime.getHours();
let greeting;

if (currentHour < 12) {
    greeting = "Good morning!";
} else if (currentHour < 18) {
    greeting = "Good afternoon!";
} else {
    greeting = "Good evening!";
}

const greetingMessage = document.getElementById("greetingMessage");
greetingMessage.textContent = greeting;

// Basic Calculator
const calculateButton = document.getElementById("calculateButton");
calculateButton.addEventListener("click", () => {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const resultElement = document.getElementById("result");

    if (!isNaN(num1) && !isNaN(num2)) {
        const sum = num1 + num2;
        resultElement.textContent = "Result: " + sum;
    } else {
        resultElement.textContent = "Please enter valid numbers.";
    }

    resultElement.classList.add("button-click-animation");
    setTimeout(() => {
        resultElement.classList.remove("button-click-animation");
    }, 100);
});


// Function to get a greeting message based on the current time
function getGreetingMessage() {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    let greeting;

    if (currentHour < 12) {
        greeting = "Good morning!";
    } else if (currentHour < 18) {
        greeting = "Good afternoon!";
    } else {
        greeting = "Good evening!";
    }

    return greeting;
}

// Show the greeting message in an alert when the page is loaded
window.addEventListener("load", () => {
    const greeting = getGreetingMessage();
    alert("Welcome! " + greeting);
});
