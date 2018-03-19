import {binaryToText, textToBinary} from "../Models/BinaryConverter.js"

window.addEventListener("DOMContentLoaded", () => {
    let $ = document.querySelector.bind(document)
    let textBox = $(".text-box")
    $(".form").addEventListener("submit", e => {
        e.preventDefault()
        let text = binaryToText(textBox.value)
        console.log(text)
    })
    let textBox2 = $(".text-box2")
    $(".form2").addEventListener("submit", e => {
        e.preventDefault()
        let binary = textToBinary(textBox2.value)
        console.log(binary)
    })
})
