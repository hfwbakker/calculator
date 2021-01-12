//key functionality
const key0 = document.querySelector("#num0")
key0.addEventListener("click", () => {
    console.log("you clicked 0")
    displayValue += "0"
    // dasArr = dasArr.concat(0)
    displayUpdater()
})

const key1 = document.querySelector("#num1")
key1.addEventListener("click", () => {
    console.log("you clicked 1")
    displayValue += "1"
    displayUpdater()
})

const key2 = document.querySelector("#num2")
key2.addEventListener("click", () => {
    console.log("you clicked 2")
    displayValue += "2"
    displayUpdater()
})

const key3 = document.querySelector("#num3")
key3.addEventListener("click", () => {
    console.log("you clicked 3")
    displayValue += "3"
    displayUpdater()
})

const key4 = document.querySelector("#num4")
key4.addEventListener("click", () => {
    console.log("you clicked 4")
    displayValue += "4"
    displayUpdater()
})

const key5 = document.querySelector("#num5")
key5.addEventListener("click", () => {
    console.log("you clicked 5")
    displayValue += "5"
    displayUpdater()
})

const key6 = document.querySelector("#num6")
key6.addEventListener("click", () => {
    console.log("you clicked 6")
    displayValue += "6"
    displayUpdater()
})

const key7 = document.querySelector("#num7")
key7.addEventListener("click", () => {
    console.log("you clicked 7")
    displayValue += "7"
    displayUpdater()
})

const key8 = document.querySelector("#num8")
key8.addEventListener("click", () => {
    console.log("you clicked 8")
    displayValue += "8"
    displayUpdater()
})

const key9 = document.querySelector("#num9")
key9.addEventListener("click", () => {
    console.log("you clicked 9")
    displayValue += "9"
    displayUpdater()
})

const keyDecimal = document.querySelector("#decimal")
keyDecimal.addEventListener("click", () => {
    console.log("you clicked decimal")
    displayValue += "."
    displayUpdater()
})

/////////////////////
///   OPERATORS   ///
/////////////////////

const keyAdd = document.querySelector("#add")
keyAdd.addEventListener("click", () => {
    console.log("you clicked add")
    dasArr = dasArr.concat(parseFloat(displayValue))
    operatorSymbol = "+"
    updater()
})

const keyDivide = document.querySelector("#divide")
keyDivide.addEventListener("click", () => {
    console.log("you clicked divide")
    operatorSymbol = "/"
    updater()
})

const keySubtract = document.querySelector("#subtract")
keySubtract.addEventListener("click", () => {
    console.log("you clicked subtract")
    operatorSymbol = "-"
    updater()
})

const keyMultiply = document.querySelector("#multiply")
keyMultiply.addEventListener("click", () => {
    console.log("you clicked multiply")
    operatorSymbol = "*"
    updater()
})

const keyEquals = document.querySelector("#equals")
keyEquals.addEventListener("click", () => {
    console.log("you clicked equals")
    displayValue = testFunc()
    displayUpdater()
})

const keyReset = document.querySelector("#reset")
keyReset.addEventListener("click", () => {
    console.log("you clicked C")
    displayValue = ""
    lastDisplayValue = ""
    dasArr = []
    displayUpdater()
})


//display screen logic
const display = document.querySelector("#display")

let displayValue = ""
let lastDisplayValue = ""
let runningValue = 0
let operatorSymbol = ""
let dasArr = []

let displayNum = document.createElement("h3")

const displayUpdater = function() {
    // some if statement or function that rounds numbers to max 8 digits
    displayNum.textContent = displayValue
    display.appendChild(displayNum)
}

const updater = function() {
    // lastDisplayValue = displayValue
    lastDisplayValue = parseFloat(displayValue)
    runningValue += parseFloat(displayValue) + lastDisplayValue
    displayUpdater()
    displayValue = ""
}


// calculation logic
let testFunc = function() {
    let ans = 0
    a = parseFloat(lastDisplayValue)
    console.log(`lastDisplayValue (a) = ${lastDisplayValue}`)
    b = operatorSymbol
    console.log(`operatorSymbol (b) = ${operatorSymbol}`)
    c = parseFloat(displayValue)
    console.log(`displayValue (c) = ${displayValue}`)
    if (b == "/"){
        console.log(a / c)
        ans = a / c
    }
    if (b == "-") {
        console.log(a - c)
        ans = a - c
    }
    if (b == "+") {
        console.log(a + c)
        ans = a + c
    }
    if (b == "*") {
        console.log(a * c)
        ans = a * c
    }
    return ans.toString()
}

