let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    // Validar que el campo no esté vacío
    if (!nombre) {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Añadir al arreglo si el nombre es válido y no está duplicado
    if (!amigos.includes(nombre)) {
        amigos.push(nombre);
        actualizarLista();
    } else {
        alert("Ese nombre ya está en la lista.");
    }

    // Limpiar el campo de entrada
    input.value = "";
    input.focus();
}

// Función para actualizar la lista de amigos en el HTML
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista existente

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo; // Crear un elemento <li> por cada amigo
        lista.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    // Validar que haya suficientes amigos para el sorteo
    if (amigos.length < 2) {
        alert("Debe haber al menos dos amigos en la lista para realizar el sorteo.");
        return;
    }

    const participantes = [...amigos]; // Copia de la lista de amigos
    const resultado = {};

    amigos.forEach((amigo) => {
        let indice;

        do {
            indice = Math.floor(Math.random() * participantes.length);
        } while (participantes[indice] === amigo); // Evitar que alguien se asigne a sí mismo

        resultado[amigo] = participantes[indice];
        participantes.splice(indice, 1); // Eliminar el amigo ya asignado
    });

    mostrarResultado(resultado);
}

// Función para mostrar el resultado en el HTML
function mostrarResultado(resultado) {
    const listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = ""; // Limpiar los resultados anteriores

    for (const [amigo, amigoSecreto] of Object.entries(resultado)) {
        const li = document.createElement("li");
        li.textContent = `${amigo} le regala a ${amigoSecreto}`;
        listaResultado.appendChild(li);
    }
}

