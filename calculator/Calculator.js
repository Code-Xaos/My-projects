class Calculator{
  constructor(prevOperandTextElement, curentOperandTextElement){
    this.prevOperandTextElement = prevOperandTextElement
    this.curentOperandTextElement = curentOperandTextElement
    this.clear()
  }

  clear(){
this.curentOperand = ''
this.prevOperand =''
this.operation = undefined
  }

  delete(){
this.curentOperand = this.curentOperand.toString().slice(0, -1)
  }

  appendNumber(number){
    if(number === '.' && this.curentOperand.includes('.')) return
this.curentOperand = this.curentOperand.toString() + number.toString()
  }

  chooseOperation( operation){
    if(this.curentOperand === '') return
    if(this.prevOperand !==''){
      this.compute()
    }
this.operation = operation
this.prevOperand =this.curentOperand
this.curentOperand =''
  }

  compute(){
let computation
const prev = parseFloat(this.prevOperand)
const current =parseFloat(this.curentOperand)
if (isNaN(prev) || isNaN(current)) return
switch(this.operation){
  case '+':
    computation = prev + current
    break
  case '-':
    computation = prev - current
    break
  case '/':
    computation = prev / current
    break
  case '*':
    computation = prev * current
    break
    default:
      return
}
this.curentOperand = computation
this.operation = undefined
this.prevOperand = ''
  }

getDisplayNumber(number) {
  const stringNumber = number.toString()
  const integerDigits = parseFloat(stringNumber.split('.')[0])
  const decimalDigits = stringNumber.split('.')[1]
let integerDisplay
if(isNaN(integerDigits)){
  integerDisplay =''
}else{
 integerDisplay = integerDigits.toLocaleString('en', {
   maximumFractionDigits:0})
}
if (decimalDigits !=null){
  return `${integerDisplay}.${decimalDigits}`
}else{
  return integerDisplay
}
}

  updateDisplay(){
this.curentOperandTextElement.innerText= 
this.getDisplayNumber(this.curentOperand)
if(this.operation !=null){
this.prevOperandTextElement.innerText= 
`${this.getDisplayNumber(this.prevOperand)} ${this.operation}`
} else{
  this.prevOperandTextElement.innerText = ''
}
  }
}



const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const eqButton = document.querySelector('[data-eq]')
const acButton = document.querySelector('[data-ac]')
const delButton = document.querySelector('[data-del]')
const prevOperandTextElement = document.querySelector('[data-prev]')
const curentOperandTextElement = document.querySelector('[data-curent]')


const calculator = new Calculator(prevOperandTextElement,curentOperandTextElement)

numberButtons.forEach(button =>{
  button.addEventListener('click', ()=>{
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
  })
  operationButtons.forEach(button =>{
    button.addEventListener('click', ()=>{
      calculator.chooseOperation(button.innerText)
      calculator.updateDisplay()
    })
    })

    eqButton.addEventListener('click', button =>{
      calculator.compute()
      calculator.updateDisplay()
    })
    acButton.addEventListener('click', button =>{
      calculator.clear()
      calculator.updateDisplay()
    })
    delButton.addEventListener('click', button =>{
      calculator.delete()
      calculator.updateDisplay()
    })