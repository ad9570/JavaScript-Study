const backdropElement = document.getElementById('backdrop');
const modalLinkElements = document.querySelectorAll('.info-modal');
let infoModal;

function toggleBackdrop() {
    backdropElement.classList.toggle('visible');
}

function presentInfoModal(event) {
    const text = event.target.dataset.text;
    toggleBackdrop();
    infoModal = document.createElement('div');
    infoModal.classList.add('modal');
    infoModal.innerHTML = `
    <h2>More Details</h2>
    <p>${text}</p>
  `;
    const closeButton = document.createElement('button');
    closeButton.addEventListener('click', hideInfoModal);
    closeButton.textContent = 'Okay';
    infoModal.appendChild(closeButton);
    document.body.appendChild(infoModal);
}

function hideInfoModal() {
    toggleBackdrop();
    document.body.removeChild(infoModal);
}

for (const linkElement of modalLinkElements) {
    linkElement.addEventListener('click', presentInfoModal);
}

backdropElement.addEventListener('click', hideInfoModal);

window.onload = function () {
    document.getElementsByClassName('info-modal').item(0).setAttribute('data-text',
        'That means that code is not pre-compiled but instead evaluated, compiled ' +
        'and executed at runtime (e.g. when the browser executes the script).');

    document.getElementsByClassName('info-modal').item(1).setAttribute('data-text',
        'Weakly typed languages assign types (like \'number\') to variables (data ' +
        'containers) at runtime - i.e. you (the developer) can\'t set the types ' +
        'you want to use in certain places in advance. Only indirectly by making ' +
        'sure you\'re always working with the correct values.');
}
