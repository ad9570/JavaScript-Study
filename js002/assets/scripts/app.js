const message = 'This works - imported scripts!';
alert(message);

const initValue = 0;
let result = initValue;
result =  result + 10 * 2 / (5 - 1);

// let log = '0 + 10 * 2 / (5 - 1)';       // 수학 연산을 실행하지 않음
// let log = 'result + 10 * 2 / (5 - 1)';  // ''(따옴표)로 인해 JavaScript가 안의 내용을 숫자, 변수가 아닌 정적 텍스트로 인식
// let log = initValue + ' + 10 * 2 / (5 - 1)';
let log = `${initValue} + 10 * 2 / (5 - 1)`;    // 템플릿 리터럴

outputResult(result, log);

let errorMessage1 = 'An error '
                    + 'occured!';
let errorMessage2 = 'An error\n'
                    + 'occured!';
let errorMessage3 = `An error 
                    occured!`;
let errorMessage4 = `An error
occured!`;
let errorMessage5 = `An error\noccured!`
document.getElementById('error1').textContent = errorMessage1;
document.getElementById('error2').textContent = errorMessage2;
document.getElementById('error3').textContent = errorMessage3;
document.getElementById('error4').textContent = errorMessage4;
document.getElementById('error5').textContent = errorMessage5;