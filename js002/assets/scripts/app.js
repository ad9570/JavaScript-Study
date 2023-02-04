const message = 'This works - imported scripts!';
alert(message);

const initValue = 0;
let result = initValue;

function addTest(num1, num2) {
    const addResult = num1 + num2;
    return addResult;
}
alert(addTest(1, 3));

function getUserInput() {       // userInput 값을 직접 구하지 않고 함수를 이용해 구함 : 로직 아웃소싱
    return +userInput.value;
}

function writeLog(operator, prevValue, inputValue) {    // 계산 내용 및 결과 텍스트 출력
    const description = `${prevValue} ${operator} ${inputValue}`;
    outputResult(result, description);
}

function add() {
    const inputNumber = getUserInput();
    const prevResult = result;
    result = result + inputNumber; // <input>의 value는 값에 상관 없이 항상 문자열 -> 숫자로 변환
    // result = result + parseInt(userInput.value);    // 항상 정수로 변환
    // result = result + parseFloat(userInput.value);  // 항상 실수로 변환
    writeLog('+', prevResult, inputNumber);
}

function substract() {
    const inputNumber = getUserInput();
    const prevResult = result;
    result = result - inputNumber;
    writeLog('-', prevResult, inputNumber);
}

function multiply() {
    const inputNumber = getUserInput();
    const prevResult = result;
    result = result * inputNumber;
    writeLog('*', prevResult, inputNumber);
}

function divide() {
    const inputNumber = getUserInput();
    const prevResult = result;
    result = result / inputNumber;
    writeLog('/', prevResult, inputNumber);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', substract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

// let log = '0 + 10 * 2 / (5 - 1)';       // 수학 연산을 실행하지 않음
// let log = 'result + 10 * 2 / (5 - 1)';  // ''(따옴표)로 인해 JavaScript가 안의 내용을 숫자, 변수가 아닌 정적 텍스트로 인식
// let log = initValue + ' + 10 * 2 / (5 - 1)';
// let log = `${initValue} + 10 * 2 / (5 - 1)`;    // 템플릿 리터럴
