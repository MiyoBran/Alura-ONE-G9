//1.Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];
//2.Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
//3.Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang');

//4.Crea una función que muestre en la consola todos los elementos de la lista "lenguajesDeProgramacion".
function mostrarLenguajes() {
    console.log('Lenguajes de programación:');
    for (let i = 0; i < lenguajesDeProgramacion.length; i++) {
        console.log(`${i + 1}. ${lenguajesDeProgramacion[i]}`);
    }
    return;
}
//Llamamos a la función para mostrar los lenguajes
mostrarLenguajes();
//5.Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
function mostrarLenguajesInverso() {
    console.log('Lenguajes de programación en orden inverso:');
    for (let i = lenguajesDeProgramacion.length - 1; i >= 0; i--) {
        console.log(`${lenguajesDeProgramacion.length - i}. ${lenguajesDeProgramacion[i]}`);
    }
    return;
}
//Llamamos a la función para mostrar los lenguajes en orden inverso
mostrarLenguajesInverso();

// Creamos en el Scope global una lista de números del 1 al 10, se puede usar para probar las distintas funciones.
let listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//6.Crea una función que calcule el promedio de los elementos en una lista de números.
function calcularPromedio(listaNumeros){
    let suma = 0;
    for (let i = 0 ; i < listaNumeros.length; i++){
        suma += listaNumeros[i];
    }
    return suma / listaNumeros.length;
}
//7.Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
function mostrarMayorYMenor(listaNumeros) {
    let mayor = Math.max(...listaNumeros);
    let menor = Math.min(...listaNumeros);
    console.log(`El número mayor es: ${mayor}`);
    console.log(`El número menor es: ${menor}`);
}

//8.Crea una función que devuelva la suma de todos los elementos en una lista.
function mostrarSumaLista(listaNumeros) {
    let suma = 0;
    // Recorremos la lista y sumamos los números
    for (let i = 0; i < listaNumeros.length; i++) {
        suma += listaNumeros[i];
    }
    // Mostramos la suma en la consola
    console.log(`La suma de los números es: ${suma}`);
    /*   Usando Bucle For...of , a cada iteración se suma el número actual a la variable suma.
    for (const numero of listaNumeros) {
        suma += numero;
    } */
   /*  Usando el método forEach, se recorre cada número de la lista y se suma a la variable suma.
    listaNumeros.forEach(numero => {
        suma += numero;
    }); */
    // Usando el método reduce, se acumula la suma de todos los números en la lista.
    // let suma = listaNumeros.reduce((acum, numero) => acum + numero, 0);
    return suma;
}

//9.Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
function buscarElemento(listaNumeros, elemento) {
    let posicion = listaNumeros.indexof(elemento);
    if (posicion === -1) {
        console.log(`El elemento ${elemento} no se encuentra en la lista.`);
    } else {
        console.log(`El elemento ${elemento} se encuentra en la posición ${posicion}.`);
    }
    return posicion;
}

//9.5 Crea una funcion que elimine un elemento de la lista por su valor.
function eliminarElemento(listaNumeros, elemento) {
    let posicion = listaNumeros.indexOf(elemento);
    if (posicion !== -1) {
        listaNumeros.splice(posicion, 1);
        console.log(`El elemento ${elemento} ha sido eliminado de la lista.`);
    } else {
        console.log(`El elemento ${elemento} no se encuentra en la lista.`);
    }
    return listaNumeros;
}


//10.Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
function sumarListas(lista1, lista2) {
    if (lista1.length !== lista2.length) {
        console.log('Las listas deben tener el mismo tamaño.');
        return [];
    }
    let listaSuma = [];
    for (let i = 0; i < lista1.length; i++) {
        listaSuma.push(lista1[i] + lista2[i]);
    }
    return listaSuma;
}

//11.Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
function cuadradoLista(listaNumeros) {
    let listaCuadrados = [];
    for (let i = 0; i < listaNumeros.length; i++) {
        listaCuadrados.push(listaNumeros[i] ** 2);
    }
    return listaCuadrados;
}