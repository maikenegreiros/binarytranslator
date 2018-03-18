import binaryToText from "../Models/BinaryConverter.js"

window.addEventListener("DOMContentLoaded", () => {
    let $ = document.querySelector.bind(document)
    let textBox = $(".text-box")
    $(".form").addEventListener("submit", e => {
        e.preventDefault()
        let text = binaryToText(textBox.value)
        console.log(text)
    })
})
