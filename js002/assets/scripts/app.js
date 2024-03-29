const initValue = 0;
let result = initValue;
let logs = [];  // 빈 배열 생성

const ADD = 'ADD';
const SUBTRACT = 'SUBTRACT';
const MULTIPLY = 'MULTIPLY';
const DIVIDE = 'DIVIDE';

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
    const inputNumber = getUserInput();

    if (                // 다음 조건을 모두 다 만족하는 경우
        type !== ADD &&
        type !== SUBTRACT &&
        type !== MULTIPLY &&
        type !== DIVIDE ||
        !inputNumber    // inputNumber === 0
    ) {
        return;         // 이 아래 문장은 실행되지 않고 함수 종료
    }

    const prevResult = result;
    let operator;

    if (type === ADD) {
        result += inputNumber;
        operator = '+';
    } else if (type === SUBTRACT) {
        result -= inputNumber;
        operator = '-';
    } else if (type === MULTIPLY) {
        result *= inputNumber;
        operator = '*';
    } else if (type === DIVIDE) {
        result /= inputNumber;
        operator = '/';
    }

    writeLog(operator, prevResult, inputNumber);
    dataLog(type, prevResult, inputNumber, result);
}

addBtn.addEventListener('click', calculate.bind(this, ADD));
subtractBtn.addEventListener('click', calculate.bind(this, SUBTRACT));
multiplyBtn.addEventListener('click', calculate.bind(this, MULTIPLY));
divideBtn.addEventListener('click', calculate.bind(this, DIVIDE));
