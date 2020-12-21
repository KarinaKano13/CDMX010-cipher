import cipher from './cipher.js';

const boton = document.getElementById("myBotonId");

  boton.addEventListener('click', function () {
    
    const text = document.getElementById("mensaje").value;  // Lo que me trae a JavaScript el valor de desplazamiento:
    // lo convierte a Mayusculas 
    const mayusText = text.toUpperCase();
    const offset = document.getElementById("offset").value;  //Lo que me trae al JavaScript el valor del mensaje:
    // Convierto el desplazamiento a valor Numérico.
    const offsetNumber = parseInt(offset);
    const parrafo = document.getElementById("resultado");
    

     let cifrado = cipher.encode(mayusText,offsetNumber)
    parrafo.innerHTML=cifrado;
    
    }

  )
const boton2 = document.getElementById("myBotonId2");

    boton2.addEventListener('click', function () {
      
      const text2 = document.getElementById("mensaje2").value;  // Lo que me trae a JavaScript el valor de desplazamiento:
      const mayusText2 = text2.toUpperCase();// lo convierte a Mayusculas
      const offset2 = document.getElementById("offset2").value;  //Lo que me trae al JavaScript el valor del mensaje:
      const offsetNumber2 = parseInt(-(offset2)); // Convierto el desplazamiento a valor Numérico.
      const parrafo2= document.getElementById("resultado2")

         let descifrado=  cipher.decode(mayusText2,offsetNumber2)
          parrafo2.innerHTML=descifrado;
    }
    )

