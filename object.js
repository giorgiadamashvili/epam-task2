//Objects and functions practical task //

//car object..//
const car = {
    color: "black",

    power() {
        this.power = 200;
    }
}

car.color = "green";
car.power();
console.log(car);


//Pears and apples..//

function wareHouse(a, b) {
    return (a + b)
}

let pears = 10;
let apples = 20;

console.log(`Number of accepted pears and apples is warehouse is ${wareHouse(pears, apples)}`)



// payment terminal//

const terminal = {
    name: "Giorgi"
}

let userName = prompt("Enter your name")

if (userName == terminal.name) {
    console.log(`hello ${userName}`)
} else {
    console.log("there is no such name")
}


// function for calculating the type of argument//

function type(value) {
    console.log(typeof (value))
}

type(true);


//prime number//
function primeNumber(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
        return number > 1;
    }
}

console.log(primeNumber(4));

