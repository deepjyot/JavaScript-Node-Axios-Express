//each new file is a new module
const EventEmitter = require('events');

var url = "http://mylogger.io/log";

class Logger extends EventEmitter {
    log(msg) {
        console.log(msg);
        this.emit('tutorial',1,2);
    }
};
module.exports = Logger;
