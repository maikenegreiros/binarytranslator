import {binaryToText, textToBinary} from "../Models/BinaryConverter.js"

let modeConverter = (formView, view) => {

    formView.addListener((data) => {
        let output;
        if (data.convertTo === "Binary") {
            output = textToBinary(data.text)
        } else {
            output = binaryToText(data.text)
        }

        view(output)
    })
}

export {modeConverter}
