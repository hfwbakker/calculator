//key functionality
const key0 = document.querySelector("#num0")
key0.addEventListener("click", () => {
    console.log("you clicked 0")
    inputLengthChecker("0")
    // displayValue += "0"
    displayUpdater(displayValue)
})

const key1 = document.querySelector("#num1")
key1.addEventListener("click", () => {
    console.log("you clicked 1")
    inputLengthChecker("1")
    // displayValue += "1"
    displayUpdater(displayValue)
})

const key2 = document.querySelector("#num2")
key2.addEventListener("click", () => {
    console.log("you clicked 2")
    inputLengthChecker("2")
    // displayValue += "2"
    displayUpdater(displayValue)
})

const key3 = document.querySelector("#num3")
key3.addEventListener("click", () => {
    console.log("you clicked 3")
    inputLengthChecker("3")
    // displayValue += "3"
    displayUpdater(displayValue)
})

const key4 = document.querySelector("#num4")
key4.addEventListener("click", () => {
    console.log("you clicked 4")
    inputLengthChecker("4")
    // displayValue += "4"
    displayUpdater(displayValue)
})

const key5 = document.querySelector("#num5")
key5.addEventListener("click", () => {
    console.log("you clicked 5")
    inputLengthChecker("5")
    // displayValue += "5"
    displayUpdater(displayValue)
})

const key6 = document.querySelector("#num6")
key6.addEventListener("click", () => {
    console.log("you clicked 6")
    inputLengthChecker("6")
    // displayValue += "6"
    displayUpdater(displayValue)
})

const key7 = document.querySelector("#num7")
key7.addEventListener("click", () => {
    console.log("you clicked 7")
    inputLengthChecker("7")
    // displayValue += "7"
    displayUpdater(displayValue)
})

const key8 = document.querySelector("#num8")
key8.addEventListener("click", () => {
    console.log("you clicked 8")
    inputLengthChecker("8")
    // displayValue += "8"
    displayUpdater(displayValue)
})

const key9 = document.querySelector("#num9")
key9.addEventListener("click", () => {
    console.log("you clicked 9")
    inputLengthChecker("9")
    // displayValue += "9"
    displayUpdater(displayValue)
})

const keyDecimal = document.querySelector("#decimal")
keyDecimal.addEventListener("click", () => {
    console.log("you clicked decimal")
    x = displayValue.toString()
    if (x.includes(".")) {
        console.log("max 1 decimal")
    } else {
        displayValue += "."
        displayUpdater(displayValue)
    }
})

/////////////////////
///   OPERATORS   ///
/////////////////////

const keyAdd = document.querySelector("#add")
keyAdd.addEventListener("click", () => {
    console.log("you clicked add")
    mainOperator()
    operatorSymbol = 0
    runningValue = outputLengthChecker(runningValue)
    displayUpdater(runningValue)
})

const keyDivide = document.querySelector("#divide")
keyDivide.addEventListener("click", () => {
    console.log("you clicked divide")
    mainOperator()
    operatorSymbol = 1
    runningValue = outputLengthChecker(runningValue)
    displayUpdater(runningValue)
})

const keySubtract = document.querySelector("#subtract")
keySubtract.addEventListener("click", () => {
    console.log("you clicked subtract")
    mainOperator()
    operatorSymbol = 2
    runningValue = outputLengthChecker(runningValue)
    displayUpdater(runningValue)
})

const keyMultiply = document.querySelector("#multiply")
keyMultiply.addEventListener("click", () => {
    console.log("you clicked multiply")
    mainOperator()
    operatorSymbol = 3
    runningValue = outputLengthChecker(runningValue)
    displayUpdater(runningValue)
})

const keyEquals = document.querySelector("#equals")
keyEquals.addEventListener("click", () => {
    console.log("you clicked equals")
    if (parseFloat(displayValue) == 0 || runningValue == 0 && operatorSymbol == 1) {
        displayUpdater("DUDE NO")
    } else {
        mainOperator()
        displayValue = runningValue
        runningValue = 0
        displayValue = outputLengthChecker(displayValue)
        displayUpdater(displayValue)
    }
})

const keyReset = document.querySelector("#reset")
keyReset.addEventListener("click", () => {
    console.log("you clicked C")
    displayValue = ""
    lastDisplayValue = ""
    dasArr = []
    runningValue = 0
    displayUpdater("0")
})

//display screen logic
const display = document.querySelector("#display")

let displayValue = ""
let lastDisplayValue = ""
let runningValue = 0
let operatorSymbol = ""

let displayNum = document.createElement("h3")

const displayUpdater = function(x) {
    console.log(`display updating with ${typeof(x)} ${x}`)
    if (x.toString().length > 15) {
        x = Math.round((x + Number.EPSILON) * 1000) / 1000
    }
    displayNum.textContent = x
    display.appendChild(displayNum)
}

const inputLengthChecker = function(x) {
    if (displayValue.length > 7) {
        console.log("max length reached")
    } else {
        displayValue += x
    }
}

const outputLengthChecker = function(x) {
    console.log(x.toString().length)
    if (x.toString().length > 15) {
        x = Math.round((x + Number.EPSILON) * 1000000000) / 1000000000
        return x
    } else {
        return x
    }
}

let mainOperator = function() {    
    let tempVal = parseFloat(displayValue)

    if (runningValue == 0) {
        runningValue = tempVal
        displayValue = ""
        console.log("first num")
        return "first num"
    } else {
        if (runningValue == 0 || tempVal == 0 && operatorSymbol == 1) {
            alert("don't divide by 0")
        } else {
            x = calcFunc(runningValue, operatorSymbol, tempVal)
            displayValue = ""
            return x
        }
    }
}

// calculation logic
let calcFunc = function(a, b, c) {
    if (b == 0) {
        console.log(`${a} + ${c}`)
        result = a + c
        runningValue = runningValue + c
        console.log(`runningValue = ${runningValue}`)
    }
    if (b == 1){
        console.log(`${a} / ${c}`)
        result = a / c
        runningValue = runningValue / c
        console.log(`runningValue = ${runningValue}`)
    }
    if (b == 2) {
        console.log(`${a} - ${c}`)
        result = a - c
        runningValue = runningValue - c
        console.log(`runningValue = ${runningValue}`)
    }
    if (b == 3) {
        console.log(`${a} * ${c}`)
        result = a * c
        runningValue = runningValue * c
        console.log(`runningValue = ${runningValue}`)
    }
}

displayUpdater("welcome")