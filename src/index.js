import cipher from './cipher.js';

const boton =document.getElementById("myBotonId");

  boton.addEventListener('click', function (e) {
    e.preventDefault();
    const text = document.getElementById("mensaje").value;  // Lo que me trae a JavaScript el valor de desplazamiento:
    // lo convierte a Mayusculas 
    const mayusText = text.toUpperCase();
    const offset = document.getElementById("offset").value;  //Lo que me trae al JavaScript el valor del mensaje:
    // Convierto el desplazamiento a valor Numérico.
    const offsetNumber = parseInt(offset);
    const parrafo = document.getElementById("resultado");
    

     let final2 = cipher.encode(mayusText,offsetNumber)
    parrafo.innerHTML=final2;
    console.log(final2)
   
    }
  )
/*
  document.getElementById("miBotonId2").addEventListener('click',function descifrado() {
    const text2 = document.getElementById("mensaje2").value;  // Lo que me trae a JavaScript el valor de desplazamiento:
    const mayusText2 = text2.toUpperCase();// lo convierte a Mayusculas
    const offset2 = document.getElementById("offset2").value;  //Lo que me trae al JavaScript el valor del mensaje:
    const offsetNumber2 = parseInt(-(offset2)); // Convierto el desplazamiento a valor Numérico.

      document.getElementById("resultado2").innerHTML = cipher.decode(mayusText2,offsetNumber2);
  }
)*/
/*
  const encode= {
    
    text: document.getElementById("mensaje").value,  // Lo que me trae a JavaScript el valor de desplazamiento:
    const: mayusText = text.toUpperCase(),// lo convierte a Mayusculas
    const:offset = document.getElementById("offset").value,  //Lo que me trae al JavaScript el valor del mensaje:
    const:offsetNumber = parseInt(offset), // Convierto el desplazamiento a valor Numérico.
    
    cifrado: document.getElementById("myBotonId").addEventListener("click",cipher.encode(offsetNumber,mayusText)),
   
   }

   const decode={

    text2: document.getElementById("mensaje2").value,  // Lo que me trae a JavaScript el valor de desplazamiento:
    mayusText2: text2.toUpperCase(),// lo convierte a Mayusculas
    offset2: document.getElementById("offset2").value,  //Lo que me trae al JavaScript el valor del mensaje:
    offsetNumber2: parseInt(-(offset2)), // Convierto el desplazamiento a valor Numérico.

    descifrado: document.getElementById("myBotonId2").addEventListener("click",cipher.decode(offsetNumber2,mayusText2)),

   }

   import cipher from './cipher.js';
*/





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


