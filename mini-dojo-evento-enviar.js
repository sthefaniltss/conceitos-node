const EventEmitter = require('events');

class PreparaMiojo extends EventEmitter {
    preparar (miojo){
        console.log('Preparando miojo');
        this.emit('PreparaMiojo', miojo);
    }
}

module.exports = PreparaMiojo;

//treinamento feito por: Claudia Park, Caroline Pandolfe e Sthefani Laura