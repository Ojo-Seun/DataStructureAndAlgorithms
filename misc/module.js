const path = require('path')
const EventEmitter = require('events');
const e = new EventEmitter();
const remove = require('./arr');


e.on('logging', (message) => {
    console.log(message);
});
e.emit('logging', { message: "Hello Object!!!" });
remove("O");
//var pathOj = path.parse(__filename);
//console.log(pathOj);