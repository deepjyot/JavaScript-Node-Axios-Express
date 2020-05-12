const tutorial = require('./tutorial');
//require returns the exports object of the module
console.log("Hello");
console.log(tutorial);
console.log(tutorial.sum(1,1));
console.log(tutorial.PI);
console.log(new tutorial.someMathObj());

//node wraps our code inside a function: module wrapper function

const Logger = require('./logger')
const logger = new Logger();

logger.on('tutorial', (num1, num2) => {
    console.log('tutorial event has occured');
    console.log(num1+num2);
})

logger.log(2);
