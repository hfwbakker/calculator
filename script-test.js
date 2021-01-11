//key functionality
const key0 = document.querySelector("#num0")
key0.addEventListener("click", () => {
    // console.log("you clicked 0")
    displayValue += "0"
    displayUpdater(displayValue)
})

const key1 = document.querySelector("#num1")
key1.addEventListener("click", () => {
    // console.log("you clicked 1")
    displayValue += "1"
    displayUpdater(displayValue)
})

const key2 = document.querySelector("#num2")
key2.addEventListener("click", () => {
    // console.log("you clicked 2")
    displayValue += "2"
    displayUpdater(displayValue)
})

const key3 = document.querySelector("#num3")
key3.addEventListener("click", () => {
    // console.log("you clicked 3")
    displayValue += "3"
    displayUpdater(displayValue)
})

const key4 = document.querySelector("#num4")
key4.addEventListener("click", () => {
    // console.log("you clicked 4")
    displayValue += "4"
    displayUpdater(displayValue)
})

const key5 = document.querySelector("#num5")
key5.addEventListener("click", () => {
    // console.log("you clicked 5")
    displayValue += "5"
    displayUpdater(displayValue)
})

const key6 = document.querySelector("#num6")
key6.addEventListener("click", () => {
    // console.log("you clicked 6")
    displayValue += "6"
    displayUpdater(displayValue)
})

const key7 = document.querySelector("#num7")
key7.addEventListener("click", () => {
    // console.log("you clicked 7")
    displayValue += "7"
    displayUpdater(displayValue)
})

const key8 = document.querySelector("#num8")
key8.addEventListener("click", () => {
    // console.log("you clicked 8")
    displayValue += "8"
    displayUpdater(displayValue)
})

const key9 = document.querySelector("#num9")
key9.addEventListener("click", () => {
    // console.log("you clicked 9")
    displayValue += "9"
    displayUpdater(displayValue)
})

const keyDecimal = document.querySelector("#decimal")
keyDecimal.addEventListener("click", () => {
    // console.log("you clicked decimal")
    displayValue += "."
    displayUpdater(displayValue)
})

/////////////////////
///   OPERATORS   ///
/////////////////////

const keyAdd = document.querySelector("#add")
keyAdd.addEventListener("click", () => {
    // console.log("you clicked add")
    daFuncMeister()
    operatorSymbol = 0
    displayUpdater(displayValue)
})

const keyDivide = document.querySelector("#divide")
keyDivide.addEventListener("click", () => {
    // console.log("you clicked divide")
    daFuncMeister()
    operatorSymbol = 1
    displayUpdater(displayValue)
})

const keySubtract = document.querySelector("#subtract")
keySubtract.addEventListener("click", () => {
    // console.log("you clicked subtract")
    daFuncMeister()
    operatorSymbol = 2
    displayUpdater(displayValue)
})

const keyMultiply = document.querySelector("#multiply")
keyMultiply.addEventListener("click", () => {
    // console.log("you clicked multiply")
    daFuncMeister()
    operatorSymbol = 3
    displayUpdater(displayValue)
})

const keyEquals = document.querySelector("#equals")
keyEquals.addEventListener("click", () => {
    // console.log("you clicked equals")
    daFuncMeister()
    displayUpdater(runningValue)
})

const keyReset = document.querySelector("#reset")
keyReset.addEventListener("click", () => {
    // console.log("you clicked C")
    displayValue = ""
    lastDisplayValue = ""
    dasArr = []
    runningValue = 0
    displayUpdater(displayValue)
})


//display screen logic
const display = document.querySelector("#display")

let displayValue = ""
let lastDisplayValue = ""
let runningValue = 0
let operatorSymbol = ""
let dasArr = []

let displayNum = document.createElement("h3")

const displayUpdater = function(x) {
    // some if statement or function that rounds numbers to max 8 digits
    displayNum.textContent = x
    display.appendChild(displayNum)
}


// some function that: 
// 1) takes whatever value is in display as a Float 
// 2) adds that to dasArr
// 3) check whatever operator linked to operator that was clicked
// 4) if previous display value = 0, then do something
// 5) if not, do the operator thingy. check behavior of other calculators
// 6) update display as string

let daFuncMeister = function() {    
    let tempVal = parseFloat(displayValue)
    // if (dasArr.length == 0) {
    //     dasArr = dasArr.concat(tempVal)
    //     displayValue = ""
    //     return "first num"
    // } else {
    //     dasArr = dasArr.concat(tempVal)
    //     bert = calcFunc(dasArr[dasArr.length-2], operatorSymbol, tempVal)
    //     displayValue = ""
    //     return bert
    // }

    if (runningValue == 0) {
        runningValue = tempVal
        displayValue = ""
        console.log("first num")
        return "first num"
    } else {
        bert = calcFunc(runningValue, operatorSymbol, tempVal)
        displayValue = ""
        return bert
    }

}

// dasArr = [0]
// operatorSymbol = 2
// result = 0

// calculation logic
let calcFunc = function(a, b, c) {
    // console.log("engaging calcFunc")
    if (b == 0) {
        console.log(`${a} + ${c}`)
        result = a + c
        runningValue = runningValue + c
    }
    if (b == 1){
        console.log(`${a} / ${c}`)
        result = a / c
        runningValue = runningValue / c
    }
    if (b == 2) {
        console.log(`${a} - ${c}`)
        result = a - c
        runningValue = runningValue - c
    }
    if (b == 3) {
        console.log(`${a} * ${c}`)
        result = a * c
        runningValue = runningValue * c
    }
    // return result
}
