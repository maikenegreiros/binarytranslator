import {binaryToText, textToBinary} from "../Models/BinaryConverter.js"

let form = function(formTarget) {
    this.listeners = [];

    formTarget.addEventListener("submit", e => {
        e.preventDefault()
        let data = new FormData(formTarget)
        this.dispache({
            'convertTo': data.get('convert-to'),
            'text': data.get('text')
        });
    })
}

form.prototype.addListener = function(callable) {
    this.listeners.push(callable);
}

form.prototype.dispache = function(data) {
    this.listeners.forEach(callable => callable(data));
}

export {form}
