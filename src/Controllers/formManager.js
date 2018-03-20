import {binaryToText, textToBinary} from "../Models/BinaryConverter.js"

let formManager = (formTarget, view) => {
    formTarget.addEventListener("submit", e => {
        e.preventDefault()
        let data = new FormData(formTarget)
        let convertTo = data.get("convert-to")
        let output;
        if (convertTo === "Binary") {
            output = textToBinary(data.get("text"))
        } else {
            output = binaryToText(data.get("text"))
        }

        view(output)
    })
}

export {formManager}
