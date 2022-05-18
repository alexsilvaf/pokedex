let idInicial = 1;
let idAnterior = idInicial - 1;
let idPosterior = idInicial + 1;

this.pokemonPosterior = document.getElementById("pokemonPosterior")
this.pokemonAnterior = document.getElementById("pokemonAnterior")

this.nomePokemonObject = document.getElementById("nomePokemon")
this.imagemPokemonObject = document.getElementById("imagemPokemon")
this.tipo1Pokemon = document.getElementById("tipo1Pokemon")
this.tipo2Pokemon = document.getElementById("tipo2Pokemon")
this.altura = document.getElementById("altura")
this.hp = document.getElementById("hp")
this.atk = document.getElementById("atk")
this.def = document.getElementById("def")
this.sa = document.getElementById("sa")
this.sd = document.getElementById("sd")
this.spd = document.getElementById("spd")

findPokemonById(idInicial);

function findPokemonById(id) {
    var settings = {
        "url": "https://pokeapi.co/api/v2/pokemon/" + id,
        "method": "GET",
        "timeout": 0
    };

    $.ajax(settings).done(function (response) {
        atualizarPokemon(response);
    });
}

function findPokemon(name) {
    var settings = {
        "url": "https://pokeapi.co/api/v2/pokemon/" + name,
        "method": "GET",
        "timeout": 0
    };

    $.ajax(settings).done(function (response) {
            idInicial = response.id;
            atualizarPokemon(response);
    });
}


function atualizarPokemon(response) {

    nomePokemonObject.textContent = firstLetterToUpperCase(response.name);
    if (idInicial < 10)
        imagemPokemonObject.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/00" + idInicial + ".png";
    else if (idInicial < 100)
        imagemPokemonObject.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/0" + idInicial + ".png";
    else
        imagemPokemonObject.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/" + idInicial + ".png";

    (idInicial === 1) ? pokemonAnterior.className = "btn bg-cinza text-white" : pokemonAnterior.className = "btn bg-vermelho text-white";

    tipo1Pokemon.textContent = firstLetterToUpperCase(response.types[0].type.name);
    if (response.types[1] != undefined) {
        tipo2Pokemon.hidden = false;
        tipo2Pokemon.textContent = firstLetterToUpperCase(response.types[1].type.name);

        if (response.types[1].type.name == "normal")
            tipo1Pokemon.className = "btn bg-secondary text-white"
        if (response.types[1].type.name == "grass")
            tipo2Pokemon.className = "btn bg-verde text-white"
        if (response.types[1].type.name == "bug")
            tipo1Pokemon.className = "btn bg-success text-white"
        if (response.types[1].type.name == "poison")
            tipo2Pokemon.className = "btn bg-roxo text-white"
        if (response.types[1].type.name == "water")
            tipo2Pokemon.className = "btn bg-azul text-white"
        if (response.types[1].type.name == "fire")
            tipo2Pokemon.className = "btn bg-vermelho text-white"
        if (response.types[1].type.name == "flying")
            tipo2Pokemon.className = "btn bg-cinza-claro text-white"
        if (response.types[1].type.name == "ice")
            tipo2Pokemon.className = "btn bg-primary text-white"
        if (response.types[1].type.name == "electric")
            tipo2Pokemon.className = "btn bg-warning text-white"
        if (response.types[1].type.name == "fighting")
            tipo2Pokemon.className = "btn bg-danger text-white"
        if (response.types[1].type.name == "ground")
            tipo2Pokemon.className = "btn bg-laranja text-white"
        if (response.types[1].type.name == "fairy")
            tipo2Pokemon.className = "btn bg-rosa-claro text-white"
        if (response.types[1].type.name == "rock")
            tipo2Pokemon.className = "btn bg-marrom-claro text-white"
        if (response.types[1].type.name == "psychic")
            tipo2Pokemon.className = "btn bg-rosa-choque text-white"
        if (response.types[1].type.name == "steel")
            tipo2Pokemon.className = "btn bg-cinza-metal text-white"
        if (response.types[1].type.name == "dark")
            tipo2Pokemon.className = "btn bg-cinza-escuro text-white"
        if (response.types[1].type.name == "ghost")
            tipo2Pokemon.className = "btn bg-roxo-escuro text-white"
        if (response.types[1].type.name == "dragon")
            tipo2Pokemon.className = "btn bg-azul-escuro text-white"

    } else {
        tipo2Pokemon.hidden = true;
    }

    if (response.types[0].type.name == "normal") {
        tipo1Pokemon.className = "btn bg-secondary text-white"
        imagemPokemonObject.className = "card-img-top bg-secondary"
    }
    if (response.types[0].type.name == "grass") {
        tipo1Pokemon.className = "btn bg-verde text-white"
        imagemPokemonObject.className = "card-img-top bg-verde"
    }
    if (response.types[0].type.name == "bug") {
        tipo1Pokemon.className = "btn bg-success text-white"
        imagemPokemonObject.className = "card-img-top bg-success"
    }
    if (response.types[0].type.name == "poison") {
        tipo1Pokemon.className = "btn bg-roxo text-white"
        imagemPokemonObject.className = "card-img-top bg-roxo"
    }
    if (response.types[0].type.name == "water") {
        tipo1Pokemon.className = "btn bg-azul text-white"
        imagemPokemonObject.className = "card-img-top bg-azul"
    }
    if (response.types[0].type.name == "fire") {
        tipo1Pokemon.className = "btn bg-vermelho text-white"
        imagemPokemonObject.className = "card-img-top bg-vermelho"
    }
    if (response.types[0].type.name == "flying") {
        tipo1Pokemon.className = "btn bg-cinza-claro text-white"
        imagemPokemonObject.className = "card-img-top bg-cinza-claro"
    }
    if (response.types[0].type.name == "ice") {
        tipo1Pokemon.className = "btn bg-primary text-white"
        imagemPokemonObject.className = "card-img-top bg-primary"
    }
    if (response.types[0].type.name == "electric") {
        tipo1Pokemon.className = "btn bg-warning text-white"
        imagemPokemonObject.className = "card-img-top bg-warning"
    }
    if (response.types[0].type.name == "fighting") {
        tipo1Pokemon.className = "btn bg-danger text-white"
        imagemPokemonObject.className = "card-img-top bg-danger"
    }
    if (response.types[0].type.name == "ground") {
        tipo1Pokemon.className = "btn bg-laranja text-white"
        imagemPokemonObject.className = "card-img-top bg-laranja"
    }
    if (response.types[0].type.name == "fairy") {
        tipo1Pokemon.className = "btn bg-rosa-claro text-white"
        imagemPokemonObject.className = "card-img-top bg-rosa-claro"
    }
    if (response.types[0].type.name == "rock") {
        tipo1Pokemon.className = "btn bg-marrom-claro text-white"
        imagemPokemonObject.className = "card-img-top bg-marrom-claro"
    }
    if (response.types[0].type.name == "psychic") {
        tipo1Pokemon.className = "btn bg-rosa-choque text-white"
        imagemPokemonObject.className = "card-img-top bg-rosa-choque"
    }
    if (response.types[0].type.name == "steel") {
        tipo1Pokemon.className = "btn bg-cinza-metal text-white"
        imagemPokemonObject.className = "card-img-top bg-cinza-metal"
    }
    if (response.types[0].type.name == "dark") {
        tipo1Pokemon.className = "btn bg-cinza-escuro text-white"
        imagemPokemonObject.className = "card-img-top bg-cinza-escuro"
    }
    if (response.types[0].type.name == "ghost") {
        tipo1Pokemon.className = "btn bg-roxo-escuro text-white"
        imagemPokemonObject.className = "card-img-top bg-roxo-escuro"
    }
    if (response.types[0].type.name == "dragon") {
        tipo1Pokemon.className = "btn bg-azul-escuro text-white"
        imagemPokemonObject.className = "card-img-top bg-azul-escuro"
    }

    altura.textContent = parseInt(response.height) / 10;
    hp.textContent = response.stats[0].base_stat;
    atk.textContent = response.stats[1].base_stat;
    def.textContent = response.stats[2].base_stat;
    sa.textContent = response.stats[3].base_stat;
    sd.textContent = response.stats[4].base_stat;
    spd.textContent = response.stats[5].base_stat;

}

function atualizarId(id) {
    idInicial = id;
    idAnterior = id - 1;
    idPosterior = id + 1;

}

function proximoId() {
    findPokemonById(idPosterior);
    atualizarId(idPosterior);
}

function anteriorId() {
    if (idInicial > 1) {
        findPokemonById(idAnterior);
        atualizarId(idAnterior);
    }
}

function firstLetterToUpperCase(string) {
    return string.charAt(0).toUpperCase() + string.substring(1);
}