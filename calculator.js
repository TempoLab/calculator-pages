// fix special interactions

let formula = ''
let input = '0'

const updateText = () => {
    document.querySelector('#formulaText').innerHTML = formula
    document.querySelector('#inputText').innerHTML = input
}

const addToFormula = (i) => formula = `${formula}${i}`

const checkForSpecial = () => {
    if (input !== Number) {
        console.log('hit')
    }
}

const ac = () => {
    formula = ''
    input = 0
    updateText()
}

const divide = () => {
    checkForSpecial()
    input = '/'
    addToFormula('/')
    updateText()
}

const multiply = () => {
    input = '*'
    addToFormula('*')
    updateText()
}

const minus = () => {
    input = '-'
    addToFormula('-')
    updateText()
}

const plus = () => {
    input = '+'
    addToFormula('+')
    updateText()
}

const decimal = () => {
    input = `${input}.`
    addToFormula('.')
    updateText()
}

const one = () => {
    input = 1
    addToFormula(1)
    updateText()
}

const two = () => {
    input = 2
    addToFormula(2)
    updateText()
}

const three = () => {
    input = 3
    addToFormula(3)
    updateText()
}

const four = () => {
    input = 4
    addToFormula(4)
    updateText()
}

const five = () => {
    input = 5
    addToFormula(5)
    updateText()
}

const six = () => {
    input = 6
    addToFormula(6)
    updateText()
}

const seven = () => {
    input = 7
    addToFormula(7)
    updateText()
}

const eight = () => {
    input = 8
    addToFormula(8)
    updateText()
}

const nine = () => {
    input = 9
    addToFormula(9)
    updateText()
}

const zero = () => {
    input = 0
    addToFormula(0)
    updateText()
}

const equals = () => {
    input = eval(formula)
    addToFormula(`= ${input}`)
    updateText()
}

document.querySelector('#ac').addEventListener("click", ac)
document.querySelector('#divide').addEventListener("click", divide)
document.querySelector('#multiply').addEventListener("click", multiply)
document.querySelector('#minus').addEventListener("click", minus)
document.querySelector('#plus').addEventListener("click", plus)
document.querySelector('#one').addEventListener("click", one)
document.querySelector('#two').addEventListener("click", two)
document.querySelector('#three').addEventListener("click", three)
document.querySelector('#four').addEventListener("click", four)
document.querySelector('#five').addEventListener("click", five)
document.querySelector('#six').addEventListener("click", six)
document.querySelector('#seven').addEventListener("click", seven)
document.querySelector('#eight').addEventListener("click", eight)
document.querySelector('#nine').addEventListener("click", nine)
document.querySelector('#zero').addEventListener("click", zero)
document.querySelector('#decimal').addEventListener("click", decimal)
document.querySelector('#equals').addEventListener("click", equals)

updateText()