//Crear una función que muestre "¡Hola, mundo!" en la consola
function mostrarHolaMundo() {
    console.log("¡hola, mundo!");
    return;
}

//2.Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
function saludar(nombre) {
    console.log(`Hola, ${nombre}!`);
    return;

}

//3.Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function duplicarNumero(numero){
    return numero*2;
}

//4.Crear una función que reciba tres números como parámetros y devuelva su promedio.
function calcularPromedio(numero1,numero2,numero3){
    return (numero1+numero2+numero3)/3;
}

//5.Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function mayorDeDosNumeros(numero1,numero2,){
    if (numero1>numero2) {
        return numero1;
    }
    return numero2;

    // Opcion con operador ternario
    // return numero1 > numero2 ? numero1 : numero2;
    
    // Opcion con Math.max
    // return Math.max(numero1, numero2);

}

//Alternativa, usando el operador flecha y operador ternario
const mayorDeDosNumerosFlecha = (numero1, numero2) => numero1 > numero2 ? numero1 : numero2;

//6.Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
const multiplicarPorSiMismo = (numero) => numero * numero;