let nums = [128,64,32,16,8,4,2,1];

let binaryToDecimal = binary => {
    let decimal = 0;
    for(var i=0; i<nums.length; i++) {
        if(parseInt(binary[i])) {
            decimal += nums[i];
        }
    }
    return decimal;
}

let standardizeBinary = binary => {
    let binaryArr = binary.split("")
    while (binaryArr.length < 8) {
        binaryArr.unshift(0)
    }
    return binaryArr.join("")
}

let decimalToBinary = decimal => {
    let binaries = []
    do {
        binaries.unshift(decimal % 2)
        decimal = Math.trunc(decimal/2)
    } while (decimal !== 1)
    binaries.unshift(1)
    return binaries.join("")
}

let binaryToText = str => {
    let binarys = str.split(" ");
    return binarys.map(binary => {
        var decimal = binaryToDecimal(binary);
        return String.fromCharCode(decimal.toString());
    }).join("");
}

let textToBinary = str => {
    return str.split("").map(char => {
        let binary = decimalToBinary(char.charCodeAt(0))
        return standardizeBinary(binary)
    }).join(" ")
}

export {binaryToText, textToBinary}
