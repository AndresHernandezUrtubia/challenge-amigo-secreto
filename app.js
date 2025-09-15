let amigos = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombre = inputAmigo.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa el nombre de un amigo.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Ese nombre ya está en la lista.");
        return;
    }

    amigos.push(nombre);
    inputAmigo.value = "";
    mostrarLista();
}

function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((nombre) => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay nombres para sortear.");
        return;
    }

    let indiceGanador = Math.floor(Math.random() * amigos.length);
    let ganador = amigos[indiceGanador];

    mostrarResultado(ganador);
    reiniciarLista();
}

function mostrarResultado(nombreGanador) {
    let ul = document.getElementById("resultado");
    ul.innerHTML = "";

    let li = document.createElement("li");
    li.textContent = `🎉 El amigo secreto elegido es: ${nombreGanador}`;
    ul.appendChild(li);
}

function reiniciarLista() {
    amigos = []; 
    document.getElementById("listaAmigos").innerHTML = ""; 
}