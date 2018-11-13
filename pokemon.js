const mensagemPokemon = pokemon => `Quem é esse pokemon? É o ${pokemon}!`;

function escolhePokemon (pokemon) {
    console.log(mensagemPokemon(pokemon));
}

module.exports.quemEEssePokemon = escolhePokemon;