const initValue = 0;
let result = initValue;
let logs = [];  // 빈 배열 생성

function getUserInput() {       // userInput 값을 직접 구하지 않고 함수를 이용해 구함 : 로직 아웃소싱
    return +userInput.value;
}

function writeLog(operator, prevValue, inputValue) {    // 계산 내용 및 결과 텍스트 출력
    console.log(operator, prevValue, inputValue);
    const description = `${prevValue} ${operator} ${inputValue}`;
    outputResult(result, description);
}

function dataLog(operation, prevValue, inputValue, newValue) {
    const log = {
        operation: operation,
        previous: prevValue,
        input: inputValue,
        current: newValue
    };
    logs.push(log);
    console.log(logs);
}

function add() {
    const inputNumber = getUserInput();
    const prevResult = result;
    result = result + inputNumber; // <input>의 value는 값에 상관 없이 항상 문자열 -> 숫자로 변환
    // result = result + parseInt(userInput.value);    // 항상 정수로 변환
    // result = result + parseFloat(userInput.value);  // 항상 실수로 변환
    writeLog('+', prevResult, inputNumber);
    dataLog('ADD', prevResult, inputNumber, result);
}

function substract() {
    const inputNumber = getUserInput();
    const prevResult = result;
    result = result - inputNumber;
    writeLog('-', prevResult, inputNumber);
    dataLog('SUBSTRACT', prevResult, inputNumber, result);
}

function multiply() {
    const inputNumber = getUserInput();
    const prevResult = result;
    result = result * inputNumber;
    writeLog('*', prevResult, inputNumber);
    dataLog('MULTIPLY', prevResult, inputNumber, result);
}

function divide() {
    const inputNumber = getUserInput();
    const prevResult = result;
    result = result / inputNumber;
    writeLog('/', prevResult, inputNumber);
    dataLog('DIVIDE', prevResult, inputNumber, result);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', substract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
