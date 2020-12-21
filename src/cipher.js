const cipher = {

  encode(mayusText,offsetNumber) {

  let final=[]

  if(offsetNumber == null){
    throw new TypeError ("not valid");
  }
    else if(offsetNumber==[]){

    throw new TypeError("not valid");
  }
    else if(offsetNumber==0){

    throw new TypeError("not valid")
  }
  
    for (let i = 0; i < mayusText.length; i++) { // For loop que me toma los valores de mi texto y les aplica el charCodeAt:
      let asciiValue2 = mayusText.charCodeAt(i);  // 'hola'.charCodeAt(3) = 65

      if (asciiValue2 >= 65 && asciiValue2 <= 90) {
         
        let ubication= ((asciiValue2-65+offsetNumber)%26)+65;
         
        let mensajeCifrado = String.fromCharCode(ubication);
        
          final.push(mensajeCifrado);
          
      }  
      else {

        final.push(mayusText[i]);  // Hola mundo!
            
      } 

    }

    return final.join("");
  },

  decode(mayusText2,offsetNumber2) {

    let final2=[]

    if(offsetNumber2 == null){

      throw new TypeError ("not valid");
    }
      else if(offsetNumber2==[]){

      throw new TypeError("not valid");
    }
    else if(offsetNumber2==0){

      throw new TypeError("not valid")
    }
        
      for (let i = 0; i < mayusText2.length; i++) { // For loop que me toma los valores de mi texto y les aplica el charCodeAt:
        
        let asciiValueD = mayusText2.charCodeAt(i);  // 'hola'.charCodeAt(3) = 65
  
        if (asciiValueD >= 65 && asciiValueD <= 90) {
           
          let ubicationD= ((asciiValueD - 65 + offsetNumber2 + 26) % 26 + 65 );
           
          let mensajeDescifrado2 = String.fromCharCode(ubicationD);

            final2.push(mensajeDescifrado2);
            
        }
        
        else {

          final2.push(mayusText2[i]);  // Hola mundo!
              
        } 
      }
  
      return final2.join("");
  }

}

export default cipher;
