function generatePassword(numAmount) {
    const password = "";
    const characterTypes = {
      uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      lowercase: "abcdefghijklmnopqrstuvwxyz",
      number: "0123456789",
      special: "!@#$%^&*_+~|:?></-=",
    };
  
    const selectRandomTypes = [
      "lowercase",
      "lowercase",
      "lowercase",
      "lowercase",
      "lowercase",
      "uppercase",
      "uppercase",
      "number",
      "number",
      "number",
      "special",
    ];
    const generatedCharacterTypes = {
      uppercase: false,
      lowercase: false,
      number: false,
      special: false,
    };
    let orderCharacterTypesResult = [];
    let numRef = numAmount; // 4
    while (numRef > 0) {
      const selectChar =
        selectRandomTypes[Math.floor(Math.random() * selectRandomTypes.length)];
      orderCharacterTypesResult.push(selectChar);
      generatedCharacterTypes[selectChar] = true;
     
      if (numRef === 1) {
        if (
          generatedCharacterTypes.lowercase &&
          generatedCharacterTypes.uppercase &&
          generatedCharacterTypes.number &&
          generatedCharacterTypes.special            
      
        ) {
          console.log(generatedCharacterTypes)
          numRef--;
        } else {
          //console.log("in")
          numRef = numAmount;
          orderCharacterTypesResult = [];
          for (const key in generatedCharacterTypes) {
            generatedCharacterTypes[key] = false;
          }
        }
      } else {
          numRef--;
      }
      // if (numRef > 1) numRef--; //! CONDICIONAL QUE NO FUNCIONA SIN IMPORTAR EL ORDEN
    }
    return orderCharacterTypesResult;
  }
  
  console.log(generatePassword(4)); // pookc34@A
  
  function generatePasswords() {
    const allPasswords = [];
    return function () {};
  }
  
  /*
  f(data){}
  *RECURSION   {{{{}}}}   [[[[]]]]
  *class STACK QUEUE
  *Diccionarios HashDicctionary  {a:2} <---- data
  
  */