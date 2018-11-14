const EventEmitter = require('events');
const event = new EventEmitter();

event.on('FestaComecou', festa =>{
    console.log('E rolou a festança', festa.tipoDa);
})

event.emit('FestaComecou', {tipoDa: 'na roça'});