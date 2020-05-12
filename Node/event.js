const EventEmitter = require('events');
// this is a class, and hence need to create an instance to access its properties and methods
const eventEmitter = new EventEmitter();
//listener on event 'tutorial', second argument is the func to be executed when the event occurs
eventEmitter.addListener('tutorial', ()=>{}); // add listener is similar to on
eventEmitter.on('tutorial', (num1, num2) => {
    console.log('tutorial event has occured');
    console.log(num1+num2);
})

// the event occurs here, the name of event is 'tutorial'
eventEmitter.emit('tutorial',1,2);

class Person extends EventEmitter {
    constructor(name) {
        super();
        this._name = name;
    }
    
    get name() {
        return this._name;
    }
}

//instance of event emitter class
let pedro = new Person('Pedro');
let cristy = new Person('Cristy')

//adding listener
pedro.on('name', () => {
    console.log('my name is ' + pedro.name);
})

cristy.on('name', ()=> {
    console.log('my name is ' + cristy.name);
})

//emitting event, executed synchronously in the order of emittance
pedro.emit('name');
cristy.emit('name');
