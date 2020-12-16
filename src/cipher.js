const cipher = {

  encode(mayusText,offsetNumber) {
  let final=[]
  
    for (let i = 0; i < mayusText.length; i++) { // For loop que me toma los valores de mi texto y les aplica el charCodeAt:
      let asciiValue2 = mayusText.charCodeAt(i);  // 'hola'.charCodeAt(3) = 65

      if (asciiValue2 >= 65 && asciiValue2 <= 90) {
         
        let ubication= (asciiValue2-65+offsetNumber)%26+65;
         
        let mensajeCifrado = String.fromCharCode(ubication);
        
          final.push(mensajeCifrado);
          
       }  
      else {
        final.push(mayusText[i]);  // Hola mundo!
            
      } 
     }

    return final.join("");
  }
}
/*
 function decode() {
  
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
            for (let i = 0; i <= mensajeCifrado.length; i++) {
            let resultado = mensajeCifrado[i].String();
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
*/
 export default cipher;
 /*
 const cipher = {
  cifrado: document.getElementById("myBotonId").addEventListener("click",encode),
  descifrar:document.getElementById("myBotonId2").addEventListener("click",decode)
 }

*/