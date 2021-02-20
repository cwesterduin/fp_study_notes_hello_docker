const ui = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

ui.question('Hi there! What is your name?\n\n', input => {
    const message = sayGoodbye(input)
    console.log(message)
    ui.close();
})

function sayGoodbye(name){
    return `\tGoodbye, ${name}!\n`
}