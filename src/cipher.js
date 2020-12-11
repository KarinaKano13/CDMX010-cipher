function cifrar(){
  const text = document.getElementById("mensaje").value;  // Lo que me trae a JavaScript el valor de desplazamiento:
  const mayusText = text.toUpperCase();// lo convierte a Mayusculas
  const offset = document.getElementById("offset").value;  //Lo que me trae al JavaScript el valor del mensaje:
  const offsetNumber = parseInt(offset); // Convierto el desplazamiento a valor Numérico.
  const final = [];
  const espacio = " "

  for (let i = 0; i<mayusText.length; i++){// For loop que me toma los valores de mi texto y les aplica el charCodeAt:
    let asciiValue = mayusText[i].charCodeAt(); //aqui le asigno el valor de i a asciiValue
      if (asciiValue >= 65 && asciiValue <= 90) {
          //console.log(asciiValue)
        let ubication= (asciiValue-65+offsetNumber)%26+65;
         // console.log(ubication);
        let mensajeCifrado = String.fromCharCode(ubication);
          final.push(mensajeCifrado);
        //let mensajeCifrado2 = mensajeCifrado;
            /* for (let i = 0; i <= mensajeCifrado.length; i++) {
            let resultado = mensajeCifrado[i].String();*/
        //document.getElementById("x").innerHTML = mensajeCifrado.toString();//este me lo devuelve pero la ultima letra
          document.getElementById("x").innerHTML = final.join(""); // me sale el mensaje en consola pero en el elemento p me sale undefined
        //return mensajeCifrado    
         //let resultado = mensajeCifrado;   
         // console.log(mensajeCifrado);
    }else{
      final.push(espacio);  
      document.getElementById("x").innerHTML = final.join("");
          //return mensajeInvalido;
          //onsole.log(mensajeInvalido);
    } 
  } 
}

 function descifrar() {
  let text2 = document.getElementById("mensaje2").value;  // Lo que me trae a JavaScript el valor de desplazamiento:
  let mayusText2 = text2.toUpperCase();// lo convierte a Mayusculas
  let offset2 = document.getElementById("offset2").value;  //Lo que me trae al JavaScript el valor del mensaje:
  let offsetNumber2 = parseInt(-(offset2)); // Convierto el desplazamiento a valor Numérico.
  let final2 = [];
  let espacio2 = " "

  for (let i = 0; i<mayusText2.length; i++){// For loop que me toma los valores de mi texto y les aplica el charCodeAt:
    let asciiValue2 = mayusText2[i].charCodeAt(); //aqui le asigno el valor de i a asciiValue
      if (asciiValue2 >= 65 && asciiValue2 <= 90) {
          //console.log(asciiValue)
        let ubication2= (asciiValue2-65+offsetNumber2)%26+65;
         // console.log(ubication);
        let mensajeDescifrado2 = String.fromCharCode(ubication2);
          final2.push(mensajeDescifrado2);
        //let mensajeCifrado2 = mensajeCifrado;
            /* for (let i = 0; i <= mensajeCifrado.length; i++) {
            let resultado = mensajeCifrado[i].String();*/
        //document.getElementById("x").innerHTML = mensajeCifrado.toString();//este me lo devuelve pero la ultima letra
          document.getElementById("x2").innerHTML = final2.join(""); // me sale el mensaje en consola pero en el elemento p me sale undefined
        //return mensajeCifrado    
         //let resultado = mensajeCifrado;   
         console.log(mensajeDescifrado2);
    } else{
      final2.push(espacio2);  
      document.getElementById("x2").innerHTML = final2.join("");
          //return mensajeInvalido;
          //onsole.log(mensajeInvalido);
    } 
  }    
 }

const cipher = {
 cifrado: document.getElementById("myBotonId").addEventListener("click",cifrar),
 descifrar:document.getElementById("myBotonId2").addEventListener("click",descifrar)
}
export default cipher