const message = 'This works - imported scripts!';
alert(message);

const initValue = 0;
let result = initValue;

function addTest(num1, num2) {
    const addResult = num1 + num2;
    return addResult;
}
alert(addTest(1, 3));

function add() {
    result = result + userInput.value;
    outputResult(result, '');
}

addBtn.addEventListener('click', add);

// let log = '0 + 10 * 2 / (5 - 1)';       // 수학 연산을 실행하지 않음
// let log = 'result + 10 * 2 / (5 - 1)';  // ''(따옴표)로 인해 JavaScript가 안의 내용을 숫자, 변수가 아닌 정적 텍스트로 인식
// let log = initValue + ' + 10 * 2 / (5 - 1)';
// let log = `${initValue} + 10 * 2 / (5 - 1)`;    // 템플릿 리터럴
