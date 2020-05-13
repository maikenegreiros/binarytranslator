let binaryToDecimal = (binary) => {
  return parseInt(binary, 2);
};

let standardizeBinary = (binary) => {
  let binaryArr = binary.split("");
  while (binaryArr.length < 8) {
    binaryArr.unshift(0);
  }
  return binaryArr.join("");
};

let decimalToBinary = (decimal) => {
  return (decimal >>> 0).toString(2);
};

let binaryToText = (str) => {
  let binarys = str.split(" ");
  return binarys
    .map((binary) => {
      var decimal = binaryToDecimal(binary);
      return String.fromCharCode(decimal.toString());
    })
    .join("");
};

let textToBinary = (str) => {
  return str
    .split("")
    .map((char) => {
      let binary = decimalToBinary(char.charCodeAt(0));
      return standardizeBinary(binary);
    })
    .join(" ");
};

export { binaryToText, textToBinary };
