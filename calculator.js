let formula = ''
let input = 0

const updateText = () => {
    document.querySelector('#formulaText').innerHTML = formula
    document.querySelector('#inputText').innerHTML = input
}

const addToFormula = (i) => formula = `${formula}${i}`

const errorText = () => {
    formula = 'error'
    updateText()
    setTimeout(() => {
        ac()
    }, 1000)
}

const checkForSpecial = () => {
    if (isNaN(input)) {
        formula = formula.substring(0, formula.length - 1)
    }
}

const addToResult = () => {
    if (formula.includes('=')) {
        formula = `${input}`
    }
}

const ac = () => {
    formula = ''
    input = 0
    updateText()
}

const divide = () => {
    addToResult()
    checkForSpecial()
    input = '/'
    addToFormula('/')
    updateText()
}

const multiply = () => {
    addToResult()
    checkForSpecial()
    input = '*'
    addToFormula('*')
    updateText()
}

const minus = () => {
    addToResult()
    checkForSpecial()
    input = '-'
    addToFormula('-')
    updateText()
}

const plus = () => {
    addToResult()
    checkForSpecial()
    input = '+'
    addToFormula('+')
    updateText()
}

const decimal = () => {
    addToResult()
    checkForSpecial()
    input = `${input}.`
    addToFormula('.')
    updateText()
}

const one = () => {
    addToResult()
    input = 1
    addToFormula(1)
    updateText()
}

const two = () => {
    addToResult()
    input = 2
    addToFormula(2)
    updateText()
}

const three = () => {
    addToResult()
    input = 3
    addToFormula(3)
    updateText()
}

const four = () => {
    addToResult()
    input = 4
    addToFormula(4)
    updateText()
}

const five = () => {
    addToResult()
    input = 5
    addToFormula(5)
    updateText()
}

const six = () => {
    addToResult()
    input = 6
    addToFormula(6)
    updateText()
}

const seven = () => {
    addToResult()
    input = 7
    addToFormula(7)
    updateText()
}

const eight = () => {
    addToResult()
    input = 8
    addToFormula(8)
    updateText()
}

const nine = () => {
    addToResult()
    input = 9
    addToFormula(9)
    updateText()
}

const zero = () => {
    addToResult()
    input = 0
    addToFormula(0)
    updateText()
}

const equals = () => {
    if (isNaN(formula.substring(0, 1))) {
        errorText()
        return
    }
    if (formula.includes('=')) {
        return
    }
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