const readLine = require('readline');
console.log(readLine)
//readline interface is an instance of event emitter class
const r1 = readLine.createInterface({input: process.stdin,
                          output: process.stdout});
//stdin input, stdout output

let num1 = Math.floor((Math.random() * 10) + 1);
let num2 = Math.floor((Math.random() * 10) + 1);
let ans = num1 + num2;

r1.question(`What is ${num1} + ${num2} ? \n`,
(userInput) => {
    if(userInput.trim() == ans) {
        r1.close();
        //this emits close event
    }
    else {
        //set the prompt
        r1.setPrompt('Incorrect response. Try again\n');
        // call the prompt
        r1.prompt();
        //add listener to check what the user enters now
        r1.on('line', (userInput)=> {
            if(userInput.trim() == ans) {
                r1.close();
                //this emits close event
            }
            else {
                r1.setPrompt(`Your answer of ${userInput} is incorrect. Try again. \n`);
                r1.prompt();
            }
        })
    }
});

//listening for close event
r1.on('close', ()=> {
    console.log('Correct answer');
})


