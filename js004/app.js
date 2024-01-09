const addListenerBtn = document.getElementById('add-listener-btn');
const clickableBtn = document.getElementById('clickable-btn');
const messageInput = document.getElementById('click-message-input');

function printMessage() {
    const value = messageInput.value;
    console.log(value || 'Clicked me!');
}

function addListener() {
    clickableBtn.style.backgroundColor = 'yellow';

    /* 동일한 함수(동일한 포인터를 가진 printMessage)를 사용하는 이벤트리스너 - 새로 생성하지 않고, 기존의 이벤트리스너를 교체 */
    clickableBtn.addEventListener('click', printMessage);

    /* 내용만 동일한 새로운 함수(새로운 포인터를 가진 익명 함수)를 사용하는 이벤트리스너 - 매 동작 시 새로운 이벤트리스너 추가
       메모리 누수 야기 */
    // clickableBtn.addEventListener('click', function () {
    //     const value = messageInput.value;
    //     console.log(value || 'Clicked me!');
    // });
}

addListenerBtn.addEventListener('click', addListener);