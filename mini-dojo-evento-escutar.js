const miojoPronto = require('./mini-dojo-evento-enviar.js');
const preparado = new miojoPronto;

preparado.on('PreparaMiojo', miojo => {
    console.log(`Estamos preparando um ${miojo} muito delicioso`);
} )

preparado.preparar( 'miojo de carne' );

//treinamento feito por: Claudia Park, Caroline Pandolfe e Sthefani Laura
