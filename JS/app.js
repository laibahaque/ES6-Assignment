
// 1. Variable Scoping
function showVariableScopes() {
    if (true) {
        var varVariable = "I'm a var variable";
        let letVariable = "I'm a let variable";
        const constVariable = "I'm a const variable";
        document.getElementById(
            "output1"
        ).innerHTML = `Var: ${varVariable}, Let: ${letVariable}, Const: ${constVariable}`;
    }
}

// 2. Create Multiplier (Closures)
function createMultiplier(multiplier) {
    return function (num) {
        return num * multiplier;
    };
}
function testMultiplier() {
    const double = createMultiplier(2);
    const triple = createMultiplier(3);
    document.getElementById("output2").innerHTML = `Double of 5: ${double(
        5
    )}, Triple of 5: ${triple(5)}`;
}

// 3. Object Destructuring
function showUserDetails() {
    const user = { name: "Alice", age: 25, country: "USA", city: "NY" };
    const { name, country = "Unknown", city = "Unknown" } = user;
    document.getElementById(
        "output3"
    ).innerHTML = `Name: ${name}, Country: ${country}, City: ${city}`;
}

// 4. Calculate Total with Discounts
function calculateDiscountedPrice() {
    const calculateTotal = (price, ...discounts) =>
        discounts.reduce((acc, discount) => acc - discount, price);
    const result = calculateTotal(100, 10, 5, 2);
    document.getElementById("output4").innerHTML = `Discounted Price: ${result}`;
}

// 5. Calculator Object
const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
};
function testCalculator() {
    const sum = calculator.add(10, 5);
    const diff = calculator.subtract(10, 5);
    document.getElementById(
        "output5"
    ).innerHTML = `Addition: ${sum}, Subtraction: ${diff}`;
}

// 6. Books Array
function showBooks() {
    const books = [
        { title: "Book 1", author: "Author 1", year: 2000 },
        { title: "Book 2", author: "Author 2", year: 2010 },
    ];
    let output = "";
    for (const book of books) {
        output += `Title: ${book.title}, Author: ${book.author}, Year: ${book.year}<br>`;
    }
    document.getElementById("output6").innerHTML = output;
}

// 7. ID Generator
function* idGenerator() {
    let id = 1;
    while (true) {
        yield id++;
    }
}
const generator = idGenerator();
function generateIDs() {
    const ids = [generator.next().value, generator.next().value];
    document.getElementById("output7").innerHTML = `IDs: ${ids.join(", ")}`;
}

// 8. Fetch Data (Promise)
function fetchDataPromise() {
    const fetchData = new Promise((resolve) =>
        setTimeout(() => resolve("Data received!"), 2000)
    );
    fetchData.then((data) => {
        document.getElementById("output8").innerHTML = data;
    });
}

// 9. Fetch Data (Async/Await)
async function fetchDataAsync() {
    const fetchData = () =>
        new Promise((resolve) => setTimeout(() => resolve("Data received!"), 2000));
    const data = await fetchData();
    document.getElementById("output9").innerHTML = data;
}

// 10. Number Squaring
function squareNumbers() {
    const numbers = [1, 2, 3, 4];
    const squares = numbers.map((num) => num ** 2);
    document.getElementById(
        "output10"
    ).innerHTML = `Original: ${numbers}, Squares: ${squares}`;
}
 // 11. Operate with Callback
 function operate(num1, num2, callback) {
    return callback(num1, num2);
}
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function testOperate() {
    const sum = operate(10, 5, add);
    const diff = operate(10, 5, subtract);
    document.getElementById(
        "output11"
    ).innerHTML = `Addition: ${sum}, Subtraction: ${diff}`;
}

// 12. Set Timeout
function sayHello() {
    setTimeout(() => {
        document.getElementById("output12").innerHTML = "Hello, World!";
    }, 3000);
}

// 13. Set Interval
let intervalId;
function startInterval() {
    intervalId = setInterval(() => {
        document.getElementById("output13").innerHTML = `Current time: ${new Date().toLocaleTimeString()}`;
    }, 2000);
}

function stopInterval() {
    clearInterval(intervalId);
    document.getElementById("output13").innerHTML = "Interval stopped.";
}

// 14. Fetch Data with Promise
function fetchDataWithPromise() {
    const fetchData = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Data received!"), 2000);
    });
    fetchData.then((data) => {
        document.getElementById("output14").innerHTML = data;
    }).catch((error) => {
        document.getElementById("output14").innerHTML = `Error: ${error}`;
    });
}

// 15. Fetch Data with Async/Await
async function fetchDataAsyncAwait() {
    const fetchData = () => new Promise((resolve) => setTimeout(() => resolve("Data received!"), 2000));
    try {
        const data = await fetchData();
        document.getElementById("output15").innerHTML = data;
    } catch (error) {
        document.getElementById("output15").innerHTML = `Error: ${error}`;
    }
}

// 16. Exponentiation
function exponentiate(base, exponent) {
    return base ** exponent;
}
function testExponentiation() {
    const result = exponentiate(2, 3); // 2^3 = 8
    document.getElementById("output16").innerHTML = `2^3 = ${result}`;
}

// 17. Animal Class
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }

    speak() {
        document.getElementById(
            "output17"
        ).innerHTML = `${this.name} says ${this.species === "Dog" ? "Woof!" : "Meow!"}`;
    }
}
function testAnimalClass() {
    const dog = new Animal("Buddy", "Dog");
    const cat = new Animal("Whiskers", "Cat");
    dog.speak();
    cat.speak();
}

// 18. Even or Odd Check
function checkEvenOdd() {
    const number = 5; 
    const result = number % 2 === 0 ? "Even" : "Odd";
    document.getElementById("output18").innerHTML = `Number ${number} is ${result}`;
}

// 19. Optional Chaining
function checkCity() {
    const user = { address: { city: "New York" } };
    const city = user?.address?.city || "City not available";
    document.getElementById("output19").innerHTML = `City: ${city}`;
}