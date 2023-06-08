function generatePassword(numAmount) {
  let password = "";
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

    if (
      numRef === 1 &&
      (!generatedCharacterTypes.lowercase ||
        !generatedCharacterTypes.uppercase ||
        !generatedCharacterTypes.number ||
        !generatedCharacterTypes.special)
    ) {
      numRef = numAmount;
      orderCharacterTypesResult = [];
      for (const key in generatedCharacterTypes) {
        generatedCharacterTypes[key] = false;
      }
    } else {
      numRef--;
    }
  }
  const resultPass = orderCharacterTypesResult.map((element) => {
    return characterTypes[element][
      Math.floor(Math.random() * characterTypes[element].length)
    ];
  });
  password = resultPass.join("");
  return password;
}

console.log(generatePassword(8)); // pookc34@A
