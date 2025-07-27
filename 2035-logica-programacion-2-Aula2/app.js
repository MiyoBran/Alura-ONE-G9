// La asignacion de la variable se realiza con una funcion.
let numeroSecreto = generarNumeroSecreto();

// Nuestro contador de intentos
let intentos = 0;

// Mostramos el número secreto en la consola para propósitos de depuración
console.log(numeroSecreto);

// Función para asignar texto a un elemento HTML
// Esta función toma un selector de elemento y un texto, y asigna el texto al elemento
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

// Función para verificar el intento del usuario
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    //Mostramos el numero secreto y su tipo en la consola
    console.log('Número secreto:');
    console.log(typeof numeroSecreto);
    console.log(numeroSecreto);

    //Mostramos el numero del usuario y su tipo en la consola
    console.log('Número del usuario:');
    console.log(typeof numeroDeUsuario);
    console.log(numeroDeUsuario);


    if (numeroDeUsuario === numeroSecreto) {
        console.log('Acertaste el número!');
    }
    return;
}


function generarNumeroSecreto() {
    //floor redondea hacia abajo
    return Math.floor(Math.random() * 10) + 1;

}

// Asignamos el texto a los elementos HTML, usando una función
asignarTextoElemento('h1', 'Juego del número secreto!');
asignarTextoElemento('p', `Indica un número del 1 al 10`);