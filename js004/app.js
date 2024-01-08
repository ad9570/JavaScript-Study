function getName() {
    return prompt('Your name: ', '');
}

function greet() {
    const name = getName();
    console.log('Hello ' + name);
}

greet();