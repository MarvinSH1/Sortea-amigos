// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let personas = [];

function agregarAmigo() {
  //primero obtenemos el valor de la entrada en una variable
  let nombrePersona = document.getElementById("amigo").value;
  //Ahora debemos de validar que solo sean letras para el nombre
  let soloLetras = /^[A-Za-z]+$/;

  //checamos si solo son letras...
  if (soloLetras.test(nombrePersona)) {
    personas.push(nombrePersona);
    mostrarLista();

    //probamos si sí se agregó al array
    console.log(personas);
    //sino
  } else {
    //mensaje de error con alert()
    alert("Por favor, ingresa solo letras.");
    // También puedes mostrar un mensaje en la interfaz de usuario
  }
  document.getElementById("amigo").value = "";
}
function mostrarLista() {
  //obtenemos el elemento html y almacenamos en una variable
  let listaPersonas = document.getElementById("listaAmigos");
  //limpiamos la lista para no duplicar al actualizar
  listaPersonas.innerHTML = "";
  //comenzamos a iterar en un ciclo for para obtener cada nombre agregando al array
  for (let i = 0; i <= personas.length; i++) {
    // Creamos el elemento 'li' y lo almacenamos en una variable
    let li = document.createElement("li");
    //asignamos valores del array en li
    li.textContent = personas[i];
    //y agregamos li a la lista
    listaPersonas.appendChild(li);
  }
}
function sortearAmigo() {
  //ahora ocupamos un if-else
  //Si hay amigos agregados entonces se ejecuta el codigo dentro if
  if (personas.length > 0) {
    //obtenemos un numero aleatorio entre 0 y un el total de personas menos 1 (esto se hace asi debido al uso del método floor que redondea "hacia abajo")
    let numeroAleatorio = Math.floor(Math.random() * personas.length);
    //buscamos la persona por el indice segun el numero aleatorio y lo almacenamos en una variable
    let personaSecreta = personas[numeroAleatorio];
    //mostramos el resultado
    document.getElementById(
      "resultado"
    ).innerHTML = `Amigo sorteado: ${personaSecreta}`;
  }
  //Si no hay amigos agregados, entonces no se puede sortear
  else {
    alert("Lo siento, aún no has agregado amigos para sortear");
  }
}
