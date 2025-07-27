// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Inicia declarando una variable de tipo array, que almacenará los nombres de los amigos ingresados
let amigos = [];

/*Desarrolla una función, que permita al usuario ingresar un nombre en el campo de texto y añadirlo a la lista de amigos creada anteriormente.
    *Capturar el valor del campo de entrada: Utilizar document.getElementById o document.querySelector para obtener el texto ingresado por el usuario.

    *Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío. Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."

    *Actualizar el array de amigos: Si el valor es válido, añadirlo al arreglo que almacena los nombre de amigos usando el método.push().

    *Limpiar el campo de entrada: Después de añadir el nombre, restablecer el campo de texto a una cadena vacía.
*/
function agregarAmigo() {
    // Obtiene el valor del campo de texto y lo agrega al array de amigos
    let amigo = document.getElementById("amigo");
    if (amigo.value.trim() !== "") {
        amigos.push(amigo.value.trim());
        amigo.value = ""; // Limpiar el campo de texto
        mostrarAmigos();
    } else {
        alert("Por favor, inserte un nombre.");
    }
}
