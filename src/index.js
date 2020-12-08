import cipher from './cipher.js';

console.log(cipher);

let mensaje, desplazamiento, mensajeString, datos, mensajeCifrado;

let informacion = document.getElementById("myBotonId").addEventListener("click", obtenerdatos)
  
function obtenerdatos() {
  mensaje =  document.getElementById("mensaje").value;
  desplazamiento = document.getElementById("offset").value;
  mensajeString = new String(mensaje);
  datos = [mensajeString.charCodeAt() + parseInt(desplazamiento)]
  mensajeCifrado = String.fromCharCode(datos);

  let element= mensajeCifrado;
  document.getElementById("mensajeCifrado").innerHTML = element;
}











/*
function cifrado() {
    document.location.href="cifrado.html"
  }
  
console.log(cipher);
*/
/*
const texto = new String(document.getElementById("texto")); PREGUNTAR POR ESTO ¿FUNCIONARÀ?

console.log(texto);
*/

// (abecedario.length);
// const abecedario = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

// objeto formado por el texto y el offset



//const mensajeIngresado = mensajeSinCifrar.texto; este aun no lo tenemos seguro, pero lo dejo porsiaca

// Este va a ser el boton que va a accionar el cifrado, lo tengo que meter en la función
//const boton = document.getElementById("cifrar");

//Este código es qie que va hacer la magia, pienso que se puede lograr
/*const cifrarMensaje = {
  mostrarMensaje: function() {
    mensajeSinCifrar.texto = 
  }
}*/


