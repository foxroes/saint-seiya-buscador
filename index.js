let saints = [];

let resultado = document.querySelector("#resultado");
let busqueda = document.querySelector("#busqueda");
let botonBuscar = document.querySelector("#buscar");
let botonArmaduraBronce = document.querySelector("#cloths1");
let botonArmaduraPlata = document.querySelector("#cloths2");
let botonArmaduraOro = document.querySelector("#cloths3");
let botonArmaduraAsgard = document.querySelector("#cloths4");
let botonArmaduraPoseidon = document.querySelector("#cloths5");
let botonArmaduraHades = document.querySelector("#cloths6");
let botonCaballeros = document.querySelector("#male")
let botonCaballerosFemeninos = document.querySelector("#female")

fetch('https://saint-seiya-api.herokuapp.com/api/characters')
.then(response => response.json())
.then(data => {
    saints = data
    dibujar(saints);
});

botonBuscar.addEventListener("submit",buscar)
botonArmaduraBronce.addEventListener("click",buscarArmaduraBronce)
botonArmaduraPlata.addEventListener("click",buscarArmaduraPlata)
botonArmaduraOro.addEventListener("click",buscarArmaduraOro)
botonArmaduraAsgard.addEventListener("click",buscarArmaduraAsgard)
botonArmaduraPoseidon.addEventListener("click",buscarArmaduraPoseidón)
botonArmaduraHades.addEventListener("click",buscarArmaduraHades)
botonCaballeros.addEventListener("click",buscarCaballeros)
botonCaballerosFemeninos.addEventListener("click",buscarCaballerosFemeninos)


/////---->>> FILTROS <<<----/////

function buscar(e){
    e.preventDefault()
    console.log(saints)
    let value = e.target.inputBuscar.value.trim()
    let saintsFiltro = saints.filter(saint=> saint.name.toLowerCase().includes(value.toLowerCase()))
    console.log(saintsFiltro)
    dibujar(saintsFiltro)
}

function buscarArmaduraBronce(){
    let saintsFiltro = saints.filter(function(saint) {
        if (saint.cloths[0] !== undefined) {
            return saint.cloths[0].rank !== undefined && saint.cloths[0].rank == "Bronze"
        } else {
            return false
        }
    })

    dibujar(saintsFiltro)
}

function buscarArmaduraPlata(){
    let saintsFiltro = saints.filter(function(saint) {
        if (saint.cloths[0] !== undefined) {
            return saint.cloths[0].rank !== undefined && saint.cloths[0].rank == "Silver"
        } else {
            return false
        }
    })

    dibujar(saintsFiltro)
}

function buscarArmaduraOro(){
    let saintsFiltro = saints.filter(function(saint) {
        if (saint.cloths[0] !== undefined) {
            return saint.cloths[0].rank !== undefined && saint.cloths[0].rank == "Gold"
        } else {
            return false
        }
    })

    dibujar(saintsFiltro)
}

function buscarArmaduraAsgard(){
    let saintsFiltro = saints.filter(function(saint) {
        return saint.training == "Asgard, Norway"
    })

    dibujar(saintsFiltro)
}

function buscarArmaduraPoseidón(){
    let saintsFiltro = saints.filter(function(saint) {
        if (saint.cloths[0] !== undefined) {
            return saint.cloths[0].rank !== undefined && saint.cloths[0].rank == "General"
        } else {
            return false
        }
    })

    dibujar(saintsFiltro)
}

function buscarArmaduraHades(){
    let saintsFiltro = saints.filter(function(saint) {
        if (saint.cloths[0] !== undefined) {
            return saint.cloths[0].rank !== undefined && saint.cloths[0].rank == "Celestial Star"
        } else {
            return false
        }
    })

    dibujar(saintsFiltro)
}

function buscarCaballeros(){
    let saintsFiltro = saints.filter(function(saint) {
        return saint.gender == "Male"
    })

    dibujar(saintsFiltro)
}

function buscarCaballerosFemeninos(){
    let saintsFiltro = saints.filter(function(saint) {
        return saint.gender == "Female"
    })

    dibujar(saintsFiltro)
}


/////---->>> CARDS <<<----/////

function dibujar(caballero) {
    
    resultado.innerHTML = "";
    for (let i = 0; i < caballero.length; i++) {
        let tarjeta = document.createElement("div");
        tarjeta.classList.add("col-3")

        let card = `
            <div class="card text-center" style="width: 18rem;">
                <img src="https://diegochagas.com/saint-seiya-api/${caballero[i].image}" loading="lazy" class="card-img-top" alt="Personaje de Saint Seiya">
                <div class="card-body">
                    <h5 class="card-title badge rounded-end bg-info text-dark fs-6">${caballero[i].name}</h5>
                    <p class="card-text text-info bg-dark">Ataque: ${caballero[i].attacks}</p>`;
            
            
            let cloths = caballero[i].cloths;

            for(var j= 0; j < cloths.length; j++) {
                card+=`<p class="bg-warning text-dark">Armadura:  ${cloths[j].cloth}</p>`
            }
            
            for(var j= 0; j < cloths.length; j++) {
                card+=`<p class="bg-success text-light">Grupo: ${cloths[j].group}</p>`
            }
            

        card+=`</div>
            </div>`;

        tarjeta.innerHTML=card;
        resultado.append(tarjeta)
        //document.querySelector("#cards").innerHTML += tarjeta;
    }
}
