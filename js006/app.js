const section  = document.querySelector('section:last-of-type');

document.querySelector('#cName').addEventListener('click', () => {
    if (section.className.includes('invisible')) {
        section.className = 'green-bg visible';
    } else {
        section.className = 'green-bg invisible';
    }
});

document.querySelector('#cList').addEventListener('click', () => {
    // if (section.classList.contains('invisible')) {
    //     section.classList.remove('invisible');
    //     section.classList.add('visible');
    // } else {
    //     section.classList.remove('visible');
    //     section.classList.add('invisible');
    // }

    section.classList.toggle('invisible');
    section.classList.toggle('visible');
});