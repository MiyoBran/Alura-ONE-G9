//Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
function calcularIMC(peso,altura){
    return peso / (altura * altura);
}

//2.Crea una función que calcule el valor del factorial de un número pasado como parámetro.
function calcularFactorial(numero){
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }
    return factorial;
}

//3.Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
function convertirDolaresAReales(dolares) {
    const cotizacionDolar = 4.80;
    return dolares * cotizacionDolar;
}
//4.Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
function calcularAreaYPerimetroSala(altura, anchura) {
    const area= altura * anchura;
    const perimetro = 2 * (altura + anchura);

    console.log("Área de la sala: " + area);
    console.log("Perímetro de la sala: " + perimetro);
}

//5.Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
function calcularAreaYPerimetroSalaCircular(radio) {
    const pi = 3.14;
    const area = pi * radio * radio;
    const perimetro = 2 * pi * radio;

    console.log("Área de la sala circular: " + area);
    console.log("Perímetro de la sala circular: " + perimetro);
}

//6.Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
function mostrarTablaMultiplicar(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}