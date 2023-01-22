const message = 'This works - imported scripts!';
alert(message);

const initValue = 0;
let result = initValue;

function add(num1, num2) {
    const addResult = num1 + num2;
    return addResult;
}
// alert(num1);    // 매개변수는 함수 내에서만 유효
// alert(addResult);   // 함수 내에서 선언된 변수/상수는 함수 내에서만 유효

result = add(1, 2);

// let log = '0 + 10 * 2 / (5 - 1)';       // 수학 연산을 실행하지 않음
// let log = 'result + 10 * 2 / (5 - 1)';  // ''(따옴표)로 인해 JavaScript가 안의 내용을 숫자, 변수가 아닌 정적 텍스트로 인식
// let log = initValue + ' + 10 * 2 / (5 - 1)';
let log = `${initValue} + 10 * 2 / (5 - 1)`;    // 템플릿 리터럴

outputResult(result, log);