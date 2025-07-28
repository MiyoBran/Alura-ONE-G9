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
/*Crea una función que recorra el array amigos y agregue cada nombre como un elemento <li> dentro de una lista HTML. Usa innerHTML para limpiar la lista antes de agregar nuevos elementos.

Tareas específicas:

Obtener el elemento de la lista: Utilizar document.getElementById() o document.querySelector() para seleccionar la lista donde se mostrarán los amigos.

El elemento que debemos modificar es <ul id="listaAmigos" class="name-list" aria-labelledby="listaAmigos" role="list"></ul>

Limpiar la lista existente: Establecer lista.innerHTML = "" para asegurarse de que no haya duplicados al actualizar.

Iterar sobre el arreglo: Usa un bucle for para recorrer el arreglo amigos y crear elementos de lista (<li>) para cada título.

Agregar elementos a la lista: Para cada amigo, crear un nuevo elemento de lista. */
function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista existente
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

/*Escribe una función que seleccione de manera aleatoria uno de los nombres almacenados en el array amigos. Usa Math.random() y Math.floor() para obtener un índice aleatorio.

Tareas específicas:

Validar que haya amigos disponibles: Antes de sortear, comprobar si el array amigos no está vacío.

Generar un índice aleatorio: Usar Math.random() y Math.floor() para seleccionar un índice aleatorio del arreglo.

Obtener el nombre sorteado: Utilizar el índice aleatorio para acceder al nombre correspondiente en el arreglo.

Mostrar el resultado: Actualizar el contenido del elemento de resultado utilizando document.getElementById()  e innerHTML para mostrar el amigo sorteado.*/
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    document.getElementById("resultado").innerHTML = "El amigo secreto es: " + amigoSorteado;
}

/*
Función para reiniciar completamente el sorteo de amigos.
Esta función limpia todos los datos y reinicia la aplicación a su estado inicial:

Tareas específicas:
- Vaciar el array de amigos: Reiniciar el arreglo 'amigos' a un estado vacío
- Limpiar el campo de entrada: Restablecer el campo de texto donde se ingresan los nombres
- Limpiar la lista de amigos: Eliminar todos los nombres mostrados en la lista visual
- Limpiar el resultado del sorteo: Eliminar cualquier resultado de sorteo anterior
- Proporcionar retroalimentación al usuario: Mostrar un mensaje confirmando que se reinició

Propósito: Permitir al usuario comenzar un nuevo sorteo desde cero sin necesidad de recargar la página
*/
function reiniciarSorteo() {
    // Vaciar el array de amigos
    amigos = [];
    
    // Limpiar el campo de entrada de texto
    document.getElementById("amigo").value = "";
    
    // Limpiar la lista visual de amigos
    document.getElementById("listaAmigos").innerHTML = "";
    
    // Limpiar el resultado del sorteo anterior
    document.getElementById("resultado").innerHTML = "";
    
    // Mostrar mensaje de confirmación al usuario
    alert("¡Sorteo reiniciado! Puedes comenzar a agregar amigos nuevamente.");
}