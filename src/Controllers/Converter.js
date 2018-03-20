import {binaryToText, textToBinary} from "../Models/BinaryConverter.js"

window.addEventListener("DOMContentLoaded", () => {
    let $ = document.querySelector.bind(document)
    let form = $(".form")

    form.addEventListener("submit", e => {
        e.preventDefault()
        let data = new FormData(form)
        let convertTo = data.get("convert-to")
        let output;
        if (convertTo === "Binary") {
            output = textToBinary(data.get("text"))
        } else {
            output = binaryToText(data.get("text"))
        }

        $('.output-container').innerHTML = `<p>${output}</p>`
    })
})
