//key functionality
const keyReset = document.querySelector("#reset")
keyReset.addEventListener("click", () => {
    console.log("you clicked C")
})

const key0 = document.querySelector("#num0")
key0.addEventListener("click", () => {
    console.log("you clicked 0")
})

const key1 = document.querySelector("#num1")
key1.addEventListener("click", () => {
    console.log("you clicked 1")
})

const key2 = document.querySelector("#num2")
key2.addEventListener("click", () => {
    console.log("you clicked 2")
})

const key3 = document.querySelector("#num3")
key3.addEventListener("click", () => {
    console.log("you clicked 3")
})

const key4 = document.querySelector("#num4")
key4.addEventListener("click", () => {
    console.log("you clicked 4")
})

const key5 = document.querySelector("#num5")
key5.addEventListener("click", () => {
    console.log("you clicked 5")
})

const key6 = document.querySelector("#num6")
key6.addEventListener("click", () => {
    console.log("you clicked 6")
})

const key7 = document.querySelector("#num7")
key7.addEventListener("click", () => {
    console.log("you clicked 7")
})

const key8 = document.querySelector("#num8")
key8.addEventListener("click", () => {
    console.log("you clicked 8")
})

const key9 = document.querySelector("#num9")
key9.addEventListener("click", () => {
    console.log("you clicked 9")
})

const keyDivide = document.querySelector("#divide")
keyDivide.addEventListener("click", () => {
    console.log("you clicked divide")
})

const keySubtract = document.querySelector("#subtract")
keySubtract.addEventListener("click", () => {
    console.log("you clicked subtract")
})

const keyAdd = document.querySelector("#add")
keyAdd.addEventListener("click", () => {
    console.log("you clicked add")
})

const keyMultiply = document.querySelector("#multiply")
keyMultiply.addEventListener("click", () => {
    console.log("you clicked multiply")
})

const keyEquals = document.querySelector("#equals")
keyEquals.addEventListener("click", () => {
    console.log("you clicked equals")
})

const keyDecimal = document.querySelector("#decimal")
keyDecimal.addEventListener("click", () => {
    console.log("you clicked decimal")
})

//display screen logic
const display = document.querySelector(".display")


// calculation logic

let operate = function(a, b, c) {
    // a is user input int/float
    // b is user input operator
    // c is user input int/float

    if (b == "/"){
        return a / c
    }
    if (b == "-") {
        return a - c
    }
    if (b == "+") {
        return a + c
    }
    if (b == "*") {
        return a * c
    }
}