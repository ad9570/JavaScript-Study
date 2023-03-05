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

function calculate(type) {
    if (        // 다음 조건을 모두 다 만족하는 경우
        type !== 'ADD' &&
        type !== 'SUBSTRACT' &&
        type !== 'MULTIPLY' &&
        type !== 'DIVIDE'
    ) return;   // 이 아래 문장은 실행되지 않고 함수 종료

    const inputNumber = getUserInput();
    const prevResult = result;
    let operator;

    if (type === 'ADD') {
        result += inputNumber;
        operator = '+';
    } else if (type === 'SUBSTRACT') {
        result -= inputNumber;
        operator = '-';
    } else if (type === 'MULTIPLY') {
        result *= inputNumber;
        operator = '*';
    } else if (type === 'DIVIDE') {
        result /= inputNumber;
        operator = '/';
    }

    writeLog(operator, prevResult, inputNumber);
    dataLog(type, prevResult, inputNumber, result);
}

function add() {
    calculate('ADD');
}

function substract() {
    calculate('SUBSTRACT');
}

function multiply() {
    calculate('MULTIPLY');
}

function divide() {
    calculate('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', substract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
