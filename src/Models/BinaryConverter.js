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

let binaryToText = str => {
    let binarys = str.split(" ");
    return binarys.map(binary => {
        var decimal = binaryToDecimal(binary);
        return String.fromCharCode(decimal.toString());
    }).join("");
}

export default binaryToText
