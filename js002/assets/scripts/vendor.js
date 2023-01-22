const userInput = document.getElementById('input-number');
const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');

const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');

function outputResult(result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}

let errorMessage1 = 'An error '
    + 'occured!';
let errorMessage2 = 'An error\n'
    + 'occured!';
let errorMessage3 = `An error 
                    occured!`;
let errorMessage4 = `An error
occured!`;
let errorMessage5 = `An error\noccured!`;

document.getElementById('error1').textContent = errorMessage1;
document.getElementById('error2').textContent = errorMessage2;
document.getElementById('error3').textContent = errorMessage3;
document.getElementById('error4').textContent = errorMessage4;
document.getElementById('error5').textContent = errorMessage5;